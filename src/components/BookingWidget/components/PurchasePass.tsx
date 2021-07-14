import * as React from "react"
import {StyledForm, AgileButton, Divider, LoginDiv, FlexCol} from "../styles";
import {useEffect, useState} from "react";
import {BASEURL} from "../app";
import {useCookies} from "react-cookie";
import UserInfo, {PassModel} from "../UserInfo/UserInfo";
import PricesModule, {LineItem, Product} from "./PricesModule";
import CheckoutModule, {Payment} from "./CheckoutModule";
import CartModule from "./CartModule";


export interface Price {
    key: number;
    name: string;
    product: Product;
    stripe_price: {
        currency: string;
        unit_amount: number;
    }
}
type PurchaseProps = {
    gymid: number,
}
const PurchasePass = (props: PurchaseProps) => {
    // the view to show available passes for the gym

    const [payment, setPmt] = useState<Payment>();
    const [checkout, setCheckout] = useState(false);
    const [lineItem, setLineItems] = useState<LineItem[]>([]);
    const [total, setTotal] = useState<{Amount: number, Ccy: string}>({Amount: 0, Ccy: ""});
  return (
    <FlexCol>
        {!checkout && <PricesModule setLineItems={setLineItems} setTotal={setTotal} gymid={props.gymid} />}
        <CartModule setPmt={setPmt} lineItems={lineItem} setLineItems={setLineItems} total={total} setTotal={setTotal} />
        {total.Amount != 0 && <CheckoutModule payment={payment} setPayment={setPmt} gymid={props.gymid} continued={checkout} setContinue={setCheckout} />}
    </FlexCol>
  )
};



export default PurchasePass;
