import * as React from "react";
import { Link } from "react-router-dom";
import { FlexColumnSpaceBetween, CenteredPage } from "../styles";

const HomePage = () => {
  return (
    <FlexColumnSpaceBetween>
      <h1>offwidth</h1>
      <Link to="/log-in">log in</Link>
      <Link to="/create-account">create account</Link>
    </FlexColumnSpaceBetween>
  );
};

export default HomePage;
