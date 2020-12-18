import * as React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../HomePage";
import IndoorHome from "../IndoorHome";
import OutdoorHome from "../OutdoorHome";
import FirstTime from "../FirstTime";
import Courses from "../Courses";
import About from "../About";
// import Blog from "../Blog";
import Corporate from "../Corporate";
import Form from "../Form";
import Checkout from "../Checkout";
import Success from "../Success";
import ClimbExp from "../ClimbExp";
import Privacy from "../Privacy";


export const Paths = {
  HOME: "/",
  INDOOR_HOME_PAGE: "/indoor-home",
  OUTDOOR_HOME_PAGE: "/outdoor-home",
  FIRST_TIME: "/first-time",
  COURSES: "/courses",
  ABOUT: "/about",
  BLOG: "https://blog.gebla.mt",
  CORPORATE: "/teambuilding",
  FORM: "/form/:product",
  CHECKOUT: "/checkout/:product",
  SUCCESS: "/success",
  CLIMB_EXP: "/climb-exp",
  PRIVACY: "/privacy"
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
      {/*<Route path={Paths.BLOG}><Blog setTitle={props.setTitle} /></Route>*/}
      <Route path={Paths.CORPORATE}><Corporate setTitle={props.setTitle} /></Route>
      <Route path={Paths.FORM}><Form /></Route>
      <Route path={Paths.CHECKOUT}><Checkout /></Route>
      <Route path={Paths.SUCCESS}><Success /></Route>
      <Route path={Paths.PRIVACY}><Privacy /></Route>
      <Route path={Paths.CLIMB_EXP}><ClimbExp setTitle={props.setTitle} /></Route>

    </Switch>
  );
};

export default Routes;
