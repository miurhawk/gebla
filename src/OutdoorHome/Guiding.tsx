import * as React from "react";
import { useState } from "react";
import { DetailRow, FlexRowFill, GalleryDots, FlexRow, FlexColSmaller, FlexCol, InfoItem, InfoItemsSmall, InfoDetail, TextDetail, FlexRowFill } from "../styles";
import { FunctionComponent, useState } from "react";
import { Tabs } from "../components/Tabs";

import indoorImg from "../../assets/img/abseil.jpg"



const GuidingDetail = () => {
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];

  return (
    <DetailRow>
    <FlexRowFill img={indoorImg} />
      <FlexColSmaller>
        <a style={{paddingRight: `3rem`, textAlign: `left`}}>
        <p>Our highly-experienced guides are ready to show you a great day on the rocks. Guides are available on an hourly basis and can function in any of the following capacities:</p>
        <ul>
          <li>Taking an experienced group of climbers to a new area</li>
          <li>Showing climbers from abroad to the crag and reccomending routes worth climbing</li>
          <li>Acting as a belay or multipitch partner</li>
          <li>Taking inexperienced climbers to a toprope climbing area</li>

        </ul>
        <p>Guiding services are €35 per hour, per guide. Send an email to <a href="mailto:info@gebla.mt">info@gebla.mt</a> with your party size and dates to book.</p>
        </a>
      </FlexColSmaller>
    </DetailRow>
  );
};

export default GuidingDetail;
