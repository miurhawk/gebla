import * as React from "react";
import { FunctionComponent, useState } from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./routes";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "typeface-montserrat";
import { CenteredPage, GlobalStyle, Divider, PageTitle } from "./styles";
import { FullMenu } from "./components/FullMenu";

const AppContainer = () => {
  const [title, setTitle] = useState("");

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

      <Divider />
      <br />
      <Router >
        <Routes setTitle={setTitle} />
      </Router>
      <br />
      <Divider />

      <Footer />
    </CenteredPage>
    </div>
  );

}


ReactDOM.render(<AppContainer />, document.getElementById("app"));
