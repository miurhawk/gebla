import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./routes";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "typeface-montserrat";
import { CenteredPage } from "./styles";

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CenteredPage>
        <Navigation />
        <Router>
          <Routes />
        </Router>
        <Footer />
      </CenteredPage>

    );
  }
}


ReactDOM.render(<AppContainer />, document.getElementById("app"));
