import * as React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../HomePage";
import Login from "../Login";
import CreateAccount from "../CreateAccount";
import PersonalInformation from "../PersonalInformation";

export const Paths = {
  HOME: "/",
  LOG_IN_PAGE: "/log-in",
  CREATE_ACCOUNT_PAGE: "/create-account",
  PERSONAL_INFORMATION_FORM: "/personal-information",
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
    </Switch>
  );
};

export default Routes;
