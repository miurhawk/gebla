import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DetailRow, FlexRowFill, GalleryDots, FlexRow, FlexColSmaller, FlexCol, InfoItem, InfoItemsSmall, InfoDetail, TextDetail, FlexRowFill } from "../styles";
import { FunctionComponent, useState } from "react";
import { Tabs } from "../components/Tabs";
import { Gallery } from "../components/Gallery";

import indoorImg from "../../assets/img/indoor.jpg"



const EventsDetail = () => {
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];

  return (
    <DetailRow>
    <FlexRowFill img={indoorImg} />
      <FlexColSmaller>
      <a>
        <p>Check out our <a href="/calendar">events calendar</a> for public events.</p>
        <p>We also host private events! Great for birthday parties and corporate team-building. We offer two formats:</p>
        <ul>
          <li><a>Open Hours Event - €45 per participant, max 10</a><br />3-hour timeslot with staff to supervise and guide climbing, plus a few reserved tables in our cafe to snack, eat cake, debrief, and find the best photo for Instagram. Don't forget to tag us!!<br /><br /></li>
          <li><a>Private Event - € 50 per participant, min 20</a><br />4-hour timeslot with staff to supervise and guide climbing, plus we'll close down the gym for your event so only your team or party will be in the facility. </li>
        </ul>
        <p>Contact us for scheduling and availability</p>
        </a>
      </FlexColSmaller>
    </DetailRow>
  );
};

export default EventsDetail;
