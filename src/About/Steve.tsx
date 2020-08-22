import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DetailRow, FlexRowFill, GalleryDots, FlexRow, FlexColSmaller } from "../styles";
import { FunctionComponent, useState } from "react";
import { Tabs } from "../components/Tabs";
import { Gallery } from "../components/Gallery";

import menuImg from "../../assets/img/fenechseacliff.jpg"
import outdoorImg from "../../assets/img/outdoor.jpg"
import indoorImg from "../../assets/img/indoor.jpg"

const steveImg = require("../../assets/img/stevedahletqorrot.jpg");


const Steve = () => {
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];

  return (
    <DetailRow>
    <FlexRowFill style={{minHeight: `600px`} img={steveImg} />
      <FlexColSmaller>
      <a>
        <p>Steve is one of 5 Maltese people to climb a grade 8 climb.</p>
        <p>He started climbing three years ago and it was love at first onsight. In his real life he's an architecht, but he spends as much time as he can on the rocks.</p>
        <p>At Ġebla Steve is a part-owner, as well as a guide and instructor.</p>
        </a>
      </FlexColSmaller>
    </DetailRow>
  );
};

export default Steve;
