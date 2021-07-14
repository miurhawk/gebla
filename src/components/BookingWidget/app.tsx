import * as React from "react";
import Footer from "./components/Footer";
import {CenteredPage, ChunkyButton, DetailRow} from "./styles";
import LogIn from "./components/LogIn";
import { CookiesProvider, useCookies } from 'react-cookie';
import EventsModule, {Event} from "./EventsModule";
import PurchasePass from "./components/PurchasePass";
import {useState} from "react";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_live_51HlELzHG9SHb2zLPR0wtaSaqB1s9q5EmWXgOZGNaBv9mB3Opj6FG0LuOgUTUH8367SEOTJSGhLbLBHIkYtFw4YpL00ScEvbeoS');
// const stripePromise = loadStripe('pk_test_51HlELzHG9SHb2zLPflSWaeGXWqsDtKLMIpzWbtWDF1V7NMmCpisJZ1Xp5wKPs9YhHLCA4sbYsUvYZOXZt3OP8LMF00KW2TLHcU');

// export const BASEURL: string = "https://server-dev.chalk-technologies.com"
export const BASEURL: string = "https://server.chalk-technologies.com"


type WidgetProps = {
    gymID: number,
};


const BETABookingWidget = (props: WidgetProps) => {


  const [toggle, setToggle] = useState(false);

  return (
      <CookiesProvider>
          <Elements stripe={stripePromise}>

          <CenteredPage>
            <DetailRow>
                <ChunkyButton style={{marginLeft: `50px`}} active={toggle} onClick={()=>setToggle(false)}><a style={{paddingRight:`70px`}}>events</a></ChunkyButton>
                <ChunkyButton style={{marginRight: `50px`}} active={!toggle} onClick={()=>setToggle(true)}><a style={{paddingLeft:`70px`}}>passes</a></ChunkyButton>
            </DetailRow>

            {toggle && <PurchasePass gymid={props.gymID} />}
            {!toggle && <EventsModule gymID={props.gymID} />}
        <LogIn />

        <Footer />
        </CenteredPage>
          </Elements>
      </CookiesProvider>
  );

}
export default BETABookingWidget;
// ReactDOM.render(<BETABookingWidget gymID={10286}/>, document.getElementById("app"));
