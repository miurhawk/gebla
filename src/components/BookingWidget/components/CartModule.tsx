import * as React from "react"
import {Divider, CartDiv, ReallySmallButton} from "../styles";
import {useEffect} from "react";
import {BASEURL} from "../app";
import {useCookies} from "react-cookie";
import {LineItem} from "./PricesModule";
import {Payment} from "./CheckoutModule";


type CartProps = {
    lineItems: LineItem[],
    setLineItems: (li: LineItem[]) => void,
    total: {Amount: number, Ccy: string},
    setTotal: (total: {Amount: number, Ccy: string}) => void,
    setPmt: (payment: Payment) => void,
}
const CartModule = (props: CartProps) => {
    // the view to show available passes for the gym

    const [cookies, setCookie, removeCookie] = useCookies();

    useEffect(() => {
        // check if lineItems is none
        if (cookies.beta_auth && props.lineItems.length == 0) {

            fetch(BASEURL+"/pos", {
                method: "GET",
                headers: {"Authorization": cookies.beta_auth},
            }).then((response) => {
                if (response.status === 200) {
                    response.json().then((res) => {
                        // handle the success!
                        props.setLineItems(res.line_items);
                        props.setTotal(res.total);
                        if (res.payments && res.payments.length) {
                            console.log(res.payments[0]);
                            props.setPmt(res.payments[0]);
                        }
                    })
                } else {
                    alert("There was an error in fetching the cart");

                }
            });
        }

    }, []);


    const removeItem = (li: LineItem) => {

        let data = JSON.stringify({
            price: li.price.key,
            quantity: 0,
            action: "REMOVE",
        });
        fetch(BASEURL+"/pos/updateCart", {
            method: "POST",
            body: data,
            headers: {"Authorization": cookies.beta_auth}
        }).then((response) => {
            if (response.status === 200) {
                response.json().then((res) => {
                    props.setLineItems(res.line_items);
                    props.setTotal(res.total);
                })
            } else {
                alert("There was an error adding the item, please try again");
            }

        });
    }
  return (
      <CartDiv>
          {props.lineItems && props.lineItems.map((l) => <React.Fragment key={l.price.key}><ReallySmallButton onClick={()=>removeItem(l)}><a>x</a></ReallySmallButton> <a> <span style={{color: `#B3BFCD`}}>{l.quantity}</span>  {l.price.product && l.price.product.name}: {GetTotalString(l.subtotal.Amount, l.subtotal.Ccy)}</a><br /></React.Fragment>)}
    <Divider />
    <a>
        <span style={{color: `#B3BFCD`}}>total: </span>{GetTotalString(props.total.Amount, props.total.Ccy)}
    </a>


      </CartDiv>
  )
};



export default CartModule;


export function GetTotalString(amount: number, ccy: string) {
    let totalString = "";
    switch (ccy) {
        case "usd":
            totalString += "$";
            break;
        case "eur":
            totalString += "€";
            break;
        case "chf":
            totalString += "CHF";
            break;
        default:
            totalString += ccy;
            break;
    }
    totalString += Number(amount/100).toFixed(2);
    return totalString


}