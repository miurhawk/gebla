import * as React from "react"
import {ChunkyButton, LoginDiv, StyledForm} from "../styles";
import {BASEURL} from "../app";
import {useCookies} from "react-cookie";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {useEffect, useState} from "react";
import {GetTotalString} from "./CartModule";


const CASH = 1;
const STRIPE = 2;
const REVOLUT = 3;
const VOUCHER = 4;

type CheckoutProps = {
    continued: boolean;
    setContinue: (k: boolean) => void;
    gymid: number;
    payment: Payment;
    setPayment: (payment: Payment) => void;
}

export type Payment = {
    key: number;
    type: number;
    external_id: string;
    amount: number;
    ccy: string;
    confirmed: boolean;
    client_secret: string;
}
const CheckoutModule = (props: CheckoutProps) => {
    const [payByStripe, setStripe] = useState(false);
    const [payByRevolut, setRevolut] = useState(false);

    // const [pmt, setPmt] = useState<Payment>();
    const [cookies, setCookie, removeCookie] = useCookies();
    useEffect(()=>{
        // also check if payment is already there
        console.log("using effect");
        console.log(props.payment);
        if (props.payment) {
            console.log("setting payment info");
            switch (props.payment.type) {
                case STRIPE:
                    console.log("setting stripe")
                    setStripe(true);
                    break;
                case REVOLUT:
                    console.log("setting revolut")
                    setRevolut(true);
                    break;
            }
            props.setContinue(true);
        }
    }, [props.payment]);

    const handleSubmitStripe = async (evt) => {
        evt.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);
        const res = stripe.confirmCardPayment(props.payment.client_secret, {
            payment_method: {
                card: cardElement,
                // billing_details: {name: name, email: email, phone: phone}
            }
        })
            .then(function (result) {
                if (result.error) {
                    console.log(result);
                    alert("There was an error processing your payment, please refresh and try again");
                    // location.reload();
                }

                fetch(BASEURL+"/pos/payment/"+props.payment.key, {
                    method: "PUT",
                    headers: {"Authorization": cookies.beta_auth},
                }).then( (response) => {

                    if (response.status === 200) {
                        alert("success!");
                        window.location.reload();
                    } else {
                        alert("There was an error confirming your payment. please try again or contact support@chalk-technologies.com");
                    }
                });
            }).catch(function (result) {
                console.log(result);
                alert("There was an error processing your payment, please refresh and try again");
            });

    };

    // give user the option to pay by stripe or revolut
    const setPayByStripe = () => {
        props.setContinue(true);
        setStripe(true);
        checkout(STRIPE);
    }
    const setPayByRevolut = () => {
        props.setContinue(true);
        setRevolut(true);
        checkout(REVOLUT);
    }

    const checkout = (type: number) => {

        let data = JSON.stringify({
            payment_type: type,
            for_gym: props.gymid,
            // discount: discount,
        });
        fetch(BASEURL+"/pos/checkout", {
            method: "POST",
            body: data,
            headers: {"Authorization": cookies.beta_auth}
        }).then(function(response) {
            return response.json();
        }).then(function(responseJson) {
            props.setPayment(responseJson);
        });

    }

    const back = () => {
        // this func goes back to shoping, so we need to delete any purchases created (as long as they're not confirmed), plus the tx and the links of the tx to the lineitems
        // then we need ot set continue to false
        props.setContinue(false);
        setStripe(false);
        setRevolut(false);
    };


    const stripe = useStripe();
    const elements = useElements();



  return (
      <>
          {props.continued && <ChunkyButton active={false} onClick={back}>back</ChunkyButton>}
          {!props.continued && <ChunkyButton active={true} onClick={setPayByRevolut}><a>Revolut</a></ChunkyButton>}
          {!props.continued && <ChunkyButton active={true} onClick={setPayByStripe}><a>Credit Card</a></ChunkyButton>}


          {payByRevolut && <RevModule payment={props.payment} handleSubmit={handleSubmitStripe} />}
          {payByStripe && <StripeModule payment={props.payment} handleSubmit={handleSubmitStripe} />}
      </>

  )
};



export default CheckoutModule;


type PaymentProps = {
    payment: Payment;
    handleSubmit: (p: Promise<void>) => void;
}

const RevModule = (props: PaymentProps) => {
    return(

        <div>
            <h6>Pay by Revolut</h6>
            <a>Please send your payment of {props.payment && GetTotalString(props.payment.amount, props.payment.ccy)} to @chalktech on Revolut. Add a note with reference {props.payment && props.payment.external_id}. Once confirmed, your passes will be added automatically to your account.</a>
        </div>
    )
}


const StripeModule = (props: PaymentProps) => {

    return(

        <StyledForm onSubmit={props.handleSubmit}>

            <h6>Pay by credit card</h6>
            <a style={{marginBottom: `10px`}}>Passes will be credited to your account as soon as the transaction is finalized.</a>

            <CardElement options={{
                style: {
                    base: {
                        fontSize: '12pt',
                        iconColor: '#161615',
                        color: '#161615',
                        '::placeholder': {
                            color: '#161615',
                        },
                    },
                    invalid: {
                        iconColor: '#F89C1A',
                        color: '#F89C1A',
                    },
                }
            }} />

            <input className="input__submit" style={{backgroundColor: `#161615`, height: `30px`, width: `100px`, border: `none`, borderRadius: `15px`, alignSelf: `center`, fontFamily: `Raleway`, fontSize: `10pt`, margin: `10px`}} type="submit" value="checkout" />
        </StyledForm>
    )
}
