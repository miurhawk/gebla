import * as React from "react";
import { Link } from "react-router-dom";
import { FlexRowFill, FlexARowFill, IndoorRow, OutdoorRow, HomeTable, Li } from "../styles";

const indoorImg = require("../../assets/img/indoor.jpg");
const outdoorImg = require("../../assets/img/outdoor.jpg");


const HomePage = () => {
  return (
    <HomeTable>
        <FlexARowFill href="/indoor-home">
          <FlexRowFill img={indoorImg}>
            <h1>Indoor</h1>
          </FlexRowFill>
        </FlexARowFill>
        <FlexARowFill href="/outdoor-home">
          <FlexRowFill img={outdoorImg}>
            <Li key="Outdoor"><h1>Outdoor</h1></Li>
          </FlexRowFill>
        </FlexARowFill>
    </HomeTable>
  );
};

export default HomePage;
