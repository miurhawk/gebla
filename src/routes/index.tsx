import * as React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../HomePage";
import IndoorHome from "../IndoorHome";
import OutdoorHome from "../OutdoorHome";
import FirstTime from "../FirstTime";
import Login from "../Login";
import CreateAccount from "../CreateAccount";
import PersonalInformation from "../PersonalInformation";
import Calendar from "../Calendar";

export const Paths = {
  HOME: "/",
  LOG_IN_PAGE: "/log-in",
  CREATE_ACCOUNT_PAGE: "/create-account",
  PERSONAL_INFORMATION_FORM: "/personal-information",
  INDOOR_HOME_PAGE: "/indoor-home",
  OUTDOOR_HOME_PAGE: "/outdoor-home",
  FIRST_TIME: "/first-time",
  CALENDAR: "/calendar",
};

const Routes = () => {
  return (
    <Switch>
      <Route path={Paths.HOME} exact component={HomePage} />
      <Route path={Paths.LOG_IN_PAGE} component={Login} />
      <Route path={Paths.CREATE_ACCOUNT_PAGE} component={CreateAccount} />
      <Route
        path={Paths.PERSONAL_INFORMATION_FORM}
        component={PersonalInformation}
      />
      <Route path={Paths.INDOOR_HOME_PAGE} exact component={IndoorHome} />
      <Route path={Paths.OUTDOOR_HOME_PAGE} exact component={OutdoorHome} />
      <Route path={Paths.FIRST_TIME} exact component={FirstTime} />
      <Route path={Paths.CALENDAR} exact component={Calendar} />

    </Switch>
  );
};

export default Routes;
