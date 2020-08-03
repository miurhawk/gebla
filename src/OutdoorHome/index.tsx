import * as React from "react";
import { Link } from "react-router-dom";
import { FlexColumnSpaceBetween, CenteredPage } from "../styles";

const OutdoorHome = () => {
  return (
    <FlexColumnSpaceBetween>
      <h1>Ġebla Climbing : Outdoor</h1>
      <Link to="/indoor-home">Indoor</Link>
      <Link to="/outdoor-home">Outdoor</Link>
    </FlexColumnSpaceBetween>
  );
};

export default OutdoorHome;
