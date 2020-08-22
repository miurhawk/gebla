import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DetailRow, FlexRowFill, GalleryDots, FlexRow, FlexColSmaller, FlexCol, InfoItem, InfoItemsSmall, InfoDetail, TextDetail, FlexRowFill } from "../styles";
import { FunctionComponent, useState } from "react";
import { Tabs } from "../components/Tabs";

import indoorImg from "../../assets/img/lapsitr.JPG"



const MaltaDetail = () => {
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];

  return (
    <DetailRow>
    <FlexRowFill img={indoorImg} style={{backgroundPosition: `left top`}}/>
      <FlexColSmaller>
        <a style={{textAlign: `left`}}>
        <p>We are blessed in Malta with easy access to stunning crags, never more than a 15-minute walk from the parking, often with incredible sea views and just a quick jaunt from a beach for swimming afterwards.</p>
        <p>The island is well-connected with roads accessible to cars and bikes or scooters leading almost anywhere. Thanks to its small size, you never have to drive far to reach the crag.</p>
        <p>Maltese rock is limestone, and the crags often have a range of difficulties to suit climbers of all levels.</p>
        <p>Thanks to the friendliness of the people, a great restaurant and bar scene, and the relentless good weather, Malta is a wonderful place for your next climbing destination.</p>
        <p>Malta is a great destination for your next climbing trip. And our <a href="/outdoor-home?dummy=guide##Guiding">guides</a> are here to save you time finding the crags and make sure you have a great vacation.</p>
        </a>
      </FlexColSmaller>
    </DetailRow>
  );
};

export default MaltaDetail;
