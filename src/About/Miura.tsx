import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DetailRow, GalleryDots, FlexRow, FlexColSmaller, FlexCol, InfoItem, InfoItemsSmall, InfoDetail, TextDetail, FlexRowFill } from "../styles";
import { FunctionComponent, useState } from "react";
import { Tabs } from "../components/Tabs";
import { Gallery } from "../components/Gallery";

import menuImg from "../../assets/img/carlyxini.JPG"
import outdoorImg from "../../assets/img/outdoor.jpg"
import indoorImg from "../../assets/img/indoor.jpg"

const miuraImg = require("../../assets/img/miura.jpg");


const Bouldering = () => {
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];

  return (
    <DetailRow>
    <FlexRowFill style={{minHeight: `600px`} img={miuraImg} />
      <FlexColSmaller>
        <a>
        <p>This is a blurb about Miura, who has been climbing forever.</p>
        </a>
      </FlexColSmaller>
    </DetailRow>
  );
};

export default Bouldering;
