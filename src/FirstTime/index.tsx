import * as React from "react";
import { Link } from "react-router-dom";
import { FlexColumnSpaceBetween, CenteredPage } from "../styles";

const FirstTime = () => {
  return (
    <FlexColumnSpaceBetween>
      <h1>Ġebla Climbing : First Time ?</h1>
      <Link to="/indoor-home">Indoor</Link>
      <Link to="/outdoor-home">Outdoor</Link>
    </FlexColumnSpaceBetween>
  );
};

export default FirstTime;
