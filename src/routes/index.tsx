import * as React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../HomePage";
import IndoorHome from "../IndoorHome";
import OutdoorHome from "../OutdoorHome";
import FirstTime from "../FirstTime";
import Courses from "../Courses";
import About from "../About";
import Blog from "../Blog";
import Corporate from "../Corporate";
import Form from "../Form";
import Success from "../Success";
import ClimbExp from "../ClimbExp";


export const Paths = {
  HOME: "/",
  LOG_IN_PAGE: "/log-in",
  INDOOR_HOME_PAGE: "/indoor-home",
  OUTDOOR_HOME_PAGE: "/outdoor-home",
  FIRST_TIME: "/first-time",
  COURSES: "/courses",
  ABOUT: "/about",
  BLOG: "/blog",
  CORPORATE: "/corporate",
  FORM: "/form/:product",
  SUCCESS: "/success"
  CLIMB_EXP: "/climb-exp"
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
      <Route path={Paths.COURSES}><Courses setTitle={props.setTitle} /></Route>
      <Route path={Paths.ABOUT}><About setTitle={props.setTitle} /></Route>
      <Route path={Paths.BLOG}><Blog setTitle={props.setTitle} /></Route>
      <Route path={Paths.CORPORATE}><Corporate setTitle={props.setTitle} /></Route>
      <Route path={Paths.FORM}><Form setTitle={props.setTitle} /></Route>
      <Route path={Paths.SUCCESS}><Success /></Route>
      <Route path={Paths.CLIMB_EXP}><ClimbExp setTitle={props.setTitle} /></Route>

    </Switch>
  );
};

export default Routes;
