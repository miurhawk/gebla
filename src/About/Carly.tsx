import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DetailRow, FlexRowFill, GalleryDots, FlexRow, FlexColSmaller, FlexCol, InfoItem, InfoItemsSmall, InfoDetail, TextDetail, FlexRowFill } from "../styles";
import { FunctionComponent, useState } from "react";
import { Tabs } from "../components/Tabs";
import { Gallery } from "../components/Gallery";

const carlyImg = require("../../assets/img/babu.jpg");



const Carly = () => {
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];

  return (
    <DetailRow>
    <FlexRowFill style={{minHeight: `600px`} img={carlyImg} />
      <FlexColSmaller>
        <a>
        <p>Carly is our Marketing Wizard (TM). She is originally from the UK but has been in Malta for seven years.</p>
        <p>She first tried climbing a decade ago, as part of a family outing, and ended up enjoying it more than the kids!</p>
        <p>As co-owner of Ġebla, Carly is passionate about creating a community and sharing her love for the outdoors.</p>
        <br />
        <p><a href="mailto:carly@gebla.mt">carly@gebla.mt</a></p>
        </a>
      </FlexColSmaller>
    </DetailRow>
  );
};

export default Carly;
