import * as React from "react";
import { Link } from "react-router-dom";
import { FlexRowFill, FlexRow, FlexAColumnFill } from "../styles";

const indoorImg = require("../../assets/img/indoor.jpg");
const outdoorImg = require("../../assets/img/outdoor.jpg");


const HomePage = () => {
  return (
    <FlexRow>
        <FlexAColumnFill href="/indoor-home">
          <FlexRowFill>
            <h1>Indoor</h1>
          </FlexRowFill>
        </FlexAColumnFill>
        <FlexAColumnFill href="/outdoor-home">
          <FlexRowFill img={outdoorImg}>
            <h1>Outdoor</h1>
          </FlexRowFill>
        </FlexAColumnFill>
    </FlexRow>
  );
};

export default HomePage;
