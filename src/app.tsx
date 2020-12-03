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
    </div>
  );

}


ReactDOM.render(<AppContainer />, document.getElementById("app"));
