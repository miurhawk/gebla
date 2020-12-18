import * as React from "react";
import { FunctionComponent, useState } from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./routes";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Terms from "./Terms";
import "typeface-montserrat";
import { CenteredPage, GlobalStyle, Divider, PageTitle } from "./styles";
import { FullMenu } from "./components/FullMenu";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_live_51HlELzHG9SHb2zLPR0wtaSaqB1s9q5EmWXgOZGNaBv9mB3Opj6FG0LuOgUTUH8367SEOTJSGhLbLBHIkYtFw4YpL00ScEvbeoS');

const history = createBrowserHistory();
const AppContainer = () => {
  const [title, setTitle] = useState("");
  const trackingId = "UA-179414731-1";
  ReactGA.initialize(trackingId);

  history.listen(location => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
  });

  return (
    <div>
    <GlobalStyle />
    <Elements stripe={stripePromise}>
    <CenteredPage>
      <Navigation title={title} />
      {FullMenu}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <br />
      <Router history={history}>
        <Routes setTitle={setTitle} />
      </Router>
      <br />

      <Footer />
      <Terms />
    </CenteredPage>
    </Elements>
    </div>
  );

}


ReactDOM.render(<AppContainer />, document.getElementById("app"));
