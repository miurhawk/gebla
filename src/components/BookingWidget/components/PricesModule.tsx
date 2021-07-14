import * as React from "react"
import {StyledForm, AgileButton, Divider, LoginDiv, StyledPriceCard, SmallButton} from "../styles";
import {useEffect, useState} from "react";
import {BASEURL} from "../app";
import {useCookies} from "react-cookie";
import UserInfo, {PassModel} from "../UserInfo/UserInfo";
import {Price} from "./PurchasePass";
import {EventTemplate} from "../EventsModule";

export interface LineItem {
    price: Price;
    quantity: number;
    subtotal: {
        Amount: number;
        Ccy: string;
    };
    // discoiunt
}

export interface Product {
    key: number;
    name: string;
    passes: number[];
}
type PricesProps = {
    gymid: number,
    setLineItems: (li: LineItem[]) => void,
    setTotal: (t: {Amount: number, Ccy: string}) => void,
}
const PricesModule = (props: PricesProps) => {
    // the view to show available passes for the gym



    let [prices, setPrices] = useState<Price[]>([]);
    let [passInfo, setPI] = useState<{[key: number]: PassModel}>({});
    let [eventInfo, setEI] = useState<{[key: number]: EventTemplate}>({});


    useEffect( () => {

        let data = JSON.stringify({
            gym: props.gymid,
            type: "membership",
        });
        fetch(BASEURL+"/gym/prices", {
            method: "POST",
            body: data,
        }).then((response) => {
            if (response.status === 200) {
                response.json().then((res) => {
                    setPrices(res.prices);
                    setPI(res.pass_info);
                    setEI(res.event_info);

                })
            } else {
                alert("There was an error fetching gym passes, please try again");
            }

        });
    }, [props.gymid]);




  return (
    <div style={{textAlign: `center`}}>
        <a>You can reassign passes to friends or family after purchase.</a>
        {prices && prices.map((p) => <PriceCard price={p} passInfo={passInfo} eventInfo={eventInfo} key={p.key} setLineItems={props.setLineItems} setTotal={props.setTotal} />)}
    </div>
  )
};



export default PricesModule;

type PriceProps = {
    price: Price;
    passInfo: {[key: number]: PassModel};
    eventInfo: {[key: number]: EventTemplate};
    setLineItems: (li: LineItem[]) => void;
    setTotal: ({Amount: number, Ccy: string}) => void;
}

const PriceCard = (props: PriceProps) => {

    const [cookies, setCookie, removeCookie] = useCookies();

    const handleAdd = (price: Price) => {

        let data = JSON.stringify({
            price: price.key,
            quantity: 1,
            action: "ADD",
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
    };
    return (
        <StyledPriceCard>
            <div>
                <h4>{props.price.product.name}</h4>
                {cookies.beta_auth && <AgileButton style={{marginLeft: `0`, backgroundColor: `#B3BFCD`, border: `5px solid #B3BFCD`}} onClick={()=>handleAdd(props.price)}><h5>add to cart</h5></AgileButton>}
                {!cookies.beta_auth && <a>log in or sign up to purchase passes</a>}
            </div>
            <div>
                {props.price.product.passes && props.price.product.passes.map((p)=>
                        <a key={p}>
                            {props.passInfo[p] && props.passInfo[p].entries == -1 ? "unlimited" : props.passInfo[p] && props.passInfo[p].entries} {props.passInfo[p] && props.passInfo[p].entries > 1 ? "uses" : "use"}<br />
                            <ul>
                                {props.passInfo[p] && props.passInfo[p].entry && <li>Gym Entry</li>}
                                {props.passInfo[p] && props.passInfo[p].events && props.passInfo[p].events.map((e)=>
                                    <li key={e}>{props.eventInfo[e] && props.eventInfo[e].name}</li>
                                )}
                            </ul>
                        </a>
                    )}
            </div>
        </StyledPriceCard>

    )
}
