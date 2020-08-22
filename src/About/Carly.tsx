import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DetailRow, FlexRowFill, GalleryDots, FlexRow, FlexColSmaller, FlexCol, InfoItem, InfoItemsSmall, InfoDetail, TextDetail, FlexRowFill } from "../styles";
import { FunctionComponent, useState } from "react";
import { Tabs } from "../components/Tabs";
import { Gallery } from "../components/Gallery";

const carlyImg = require("../../assets/img/carly.jpg");



const Carly = () => {
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];

  return (
    <DetailRow>
    <FlexRowFill style={{minHeight: `600px`} img={carlyImg} />
      <FlexColSmaller>
        <a>
        <p>This is a blurb about Carly, who is our Marketing wizard.</p>
        </a>
      </FlexColSmaller>
    </DetailRow>
  );
};

export default Carly;
