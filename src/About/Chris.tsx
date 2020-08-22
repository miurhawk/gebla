import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FlexRowFill, DetailRow, FlexRow, FlexColSmaller, FlexCol, InfoItem, InfoItemsSmall, InfoDetail, TextDetail, FlexRowFill } from "../styles";
import { FunctionComponent, useState } from "react";
import { Tabs } from "../components/Tabs";
import { Gallery } from "../components/Gallery";

import menuImg from "../../assets/img/lapsitr.JPG"
import outdoorImg from "../../assets/img/outdoor.jpg"
import indoorImg from "../../assets/img/indoor.jpg"

const chrisImg = require("../../assets/img/chris.jpg");



const Chris = () => {
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];

  return (
    <DetailRow>
    <FlexRowFill style={{minHeight: `600px`} img={chrisImg} />
      <FlexColSmaller>
        <a>
        <p>This is a blurb about Chris, who is our Business guru.</p>
        </a>
      </FlexColSmaller>
    </DetailRow>
  );
};

export default Chris;
