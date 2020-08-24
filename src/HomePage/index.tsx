import * as React from "react";
import { Link } from "react-router-dom";
import { FlexRowFill, FlexRow, FlexAColumnFill } from "../styles";

const indoorImg = require("../../assets/img/holds.jpg");
const outdoorImg = require("../../assets/img/img28.jpg");


const HomePage = () => {
  return (
    <FlexRow>
        <FlexAColumnFill href="/indoor-home">
          <FlexRowFill img={indoorImg}>
            <h1>Indoor</h1>
          </FlexRowFill>
        </FlexAColumnFill>
        <FlexAColumnFill href="/outdoor-home">
          <FlexRowFill img={outdoorImg} style={{backgroundPosition: `left top`}}>
            <h1>Outdoor</h1>
          </FlexRowFill>
        </FlexAColumnFill>
    </FlexRow>
  );
};

export default HomePage;
