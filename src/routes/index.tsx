import * as React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../HomePage";
import IndoorHome from "../IndoorHome";
import OutdoorHome from "../OutdoorHome";
import FirstTime from "../FirstTime";
import CreateAccount from "../CreateAccount";
import Calendar from "../Calendar";
import Courses from "../Courses";
import About from "../About";
import Blog from "../Blog";
import Corporate from "../Corporate";


export const Paths = {
  HOME: "/",
  LOG_IN_PAGE: "/log-in",
  CREATE_ACCOUNT_PAGE: "/create-account",
  PERSONAL_INFORMATION_FORM: "/personal-information",
  INDOOR_HOME_PAGE: "/indoor-home",
  OUTDOOR_HOME_PAGE: "/outdoor-home",
  FIRST_TIME: "/first-time",
  CALENDAR: "/calendar",
  COURSES: "/courses",
  ABOUT: "/about",
  BLOG: "/blog",
  CORPORATE: "/corporate",
};

type RouterProps = {
  setTitle: (v: string) => void,
};

const Routes = (props: RouterProps) => {
  return (
    <Switch>
      <Route path={Paths.HOME} exact><HomePage /></Route>
      <Route path={Paths.INDOOR_HOME_PAGE} exact><IndoorHome setTitle={props.setTitle} /></Route>
      <Route path={Paths.OUTDOOR_HOME_PAGE} exact><OutdoorHome setTitle={props.setTitle} /></Route>
      <Route path={Paths.FIRST_TIME} exact><FirstTime setTitle={props.setTitle} /></Route>
      <Route path={Paths.CALENDAR} exact><Calendar setTitle={props.setTitle} /></Route>
      <Route path={Paths.COURSES}><Courses setTitle={props.setTitle} /></Route>
      <Route path={Paths.ABOUT}><About setTitle={props.setTitle} /></Route>
      <Route path={Paths.BLOG}><Blog setTitle={props.setTitle} /></Route>
      <Route path={Paths.CORPORATE}><Corporate setTitle={props.setTitle} /></Route>

    </Switch>
  );
};

export default Routes;
