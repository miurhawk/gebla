import * as React from "react";
import { useParams, useHistory, withRouter } from "react-router-dom";
import { StyledForm, SmallDetailCol } from "../styles";
import {useEffect, useState} from "react";
import ReactGA from "react-ga";
import {Elements, CardElement, PaymentRequestButtonElement, useStripe, useElements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// const stripePromise = loadStripe('pk_live_51HlELzHG9SHb2zLPR0wtaSaqB1s9q5EmWXgOZGNaBv9mB3Opj6FG0LuOgUTUH8367SEOTJSGhLbLBHIkYtFw4YpL00ScEvbeoS');
const Checkout = (props: { setTitle: (v: string) => void, }) => {
  // Single - €65
  // Family 3 - €180
  // Family 4 - €220

  const [color, setColor] = useState(`#23E5BF`);
  const [name, setName] = useState("");
  const [Rname, setRName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [total, setTotal] = useState(65);
  const [checkoutLabel, setCheckoutLabel] = useState("Pay €65");
  const [continueLabel, setContinueLabel] = useState("Make Payment");
  const [groupSize, setGroupSize] = useState("single");
  const [continued, setContinued] = useState(false);
  const [clientSecret, setSecret] = useState("");

  const groupPriceMap: any = {
    "single": 65,
    "couple": 125,
    "family3": 180,
    "family4": 220
  }
  let history = useHistory();
  const setContinue = () => {
      if (continued) {
          setColor(`#23E5BF`);
          setContinueLabel("Make Payment");
          setContinued(false);
      } else {
          var response = fetch('http://server.chalk-technologies.com/pos/gebla/'+groupSize).then(function(response) {
              return response.json();
          }).then(function(responseJson) {
              setSecret(responseJson.client_secret);
              setColor(`#FF8DEA`);
              setContinueLabel("Change Order");
              setContinued(true);
          });
      }
  }
  const updateGroupSize = (value) => {
    setGroupSize(value);
    setTotal(groupPriceMap[value]);
    setCheckoutLabel("Pay €"+groupPriceMap[value]);
  }
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (evt) => {
      evt.preventDefault();
      if (!stripe || !elements) {
          return;
      }
      const cardElement = elements.getElement(CardElement);
      const res = stripe.confirmCardPayment(clientSecret, {
          payment_method: {
              card: cardElement,
              billing_details: {name: name, email: email, phone: phone}
          }
      })
          .then(function (result) {
              if (result.error) {
                  console.log(result);
                  alert("There was an error processing your payment, please refresh and try again");
                  location.reload();
              }
              var text = "Good Day "+ name +",\nThis is a confirmation of your purchase of a " + groupSize + " voucher for " + Rname + ".\nWe will send your electronic voucher shortly, please reply with any questions or special requests. Thanks!\n\nĠebla Team\n\npuchaser phone number: "+phone;
              let data = JSON.stringify({
                  text: text,
                  title: "Your Ġebla Voucher",
                  recipient: email,
                  secret: "XmTpO1",
              });
              fetch("http://server.chalk-technologies.com/system/mail", {
                  method: "POST",
                  body: data,
              }).then( (response) => {

                  if (response.status === 204) {
                      history.push('/success');
                      return
                  } else {
                      alert("There was an error sending the confirmation email, please contact info@gebla.mt to collect your voucher");
                      history.push('/success');
                  }
              });
          }).catch(function (result) {
              console.log(result);
              alert("There was an error processing your payment, please refresh and try again");
          });


  }


  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];

  return (
        <StyledForm onSubmit={handleSubmit}>

          <h6 style={{color: `#EEEDF4`}}>Purchase a Voucher</h6>
          <a>Vouchers will be sent electronically to the email address provided below. You may also request a physical voucher by responding to the email.</a>

          <label><h6>Your Name: </h6> <input type="text" readOnly={continued} required value={name} onChange={(e) => setName(e.target.value)} /></label>
          <label><h6>Recipient's Name: </h6> <input type="text" value={Rname} onChange={(e) => setRName(e.target.value)} /></label>

          <label><h6>Email: </h6><input type="email" readOnly={continued} required value={email} onChange={(e) => setEmail(e.target.value)} /></label>

          <label><h6>Contact No. (w/ Country Code): </h6><input type="tel" readOnly={continued} required value={phone} onChange={(e) => setPhone(e.target.value)} /></label>

          <label><h6>Select Group Size: </h6>
            <select required disabled={continued} onChange={(e) => updateGroupSize(e.target.value)}>
              <option value="single">Personal - €65</option>
              <option value="couple">Couple - €125</option>
              <option value="family3">Family of 3 - €180</option>
              <option value="family4">Family of 4 - €220</option>
            </select>
          </label>
            <button style={{backgroundColor: color, height: `60px`, border: `none`, alignSelf: `center`, fontFamily: `Montserrat`, fontSize: `16pt`}} type="button" onClick={() => {setContinue()}}>{continueLabel}</button>

            {continued && <CardElement options={{
            style: {
              base: {
                fontSize: '24px',
                  iconColor: '#23E5BF',
                color: '#23E5BF',
                '::placeholder': {
                  color: '#EEEDF4',
                },
              },
              invalid: {
                  iconColor: '#FF8DEA',
                color: '#FF8DEA',
              },
            }
          }} />}

            {continued && <input className="input__submit" style={{backgroundColor: `#23E5BF`, height: `60px`, width: `200px`, border: `none`, alignSelf: `center`, fontFamily: `Montserrat`, fontSize: `16pt`}} type="submit" disabled={!stripe} value={checkoutLabel} />}
        </StyledForm>
  );
};
// const Checkout = withRouter(BaseCheckout);

export default Checkout;
