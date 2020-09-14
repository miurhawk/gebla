import * as React from "react";
import { Link } from "react-router-dom";
import { DetailRow, DetailCol, FlexRowFill, InfoItem, InfoItems, InfoDetail } from "../styles";
import { FunctionComponent, useState } from "react";
import { Tabs } from "../components/Tabs";
import Steve from "./Steve.tsx";
import Carly from "./Carly.tsx";
import Chris from "./Chris.tsx";
import Miura from "./Miura.tsx";

import "typeface-montserrat";


const miuraImg = require("../../assets/img/img24.jpg");
const steveImg = require("../../assets/img/img36.jpg");
const carlyImg = require("../../assets/img/img40.jpg");
const chrisImg = require("../../assets/img/img7.jpg");

// type TabDetail {item: InfoItem; detail: InfoDetail;};
// const TabDetails Array<TabDetail> = [
//   {item: }
// ];


const About = (props: { setTitle: (v: string) => void, }) => {
  // const BoulderingDetail =
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];
  // const CoachingDetail = <InfoDetail><h3>Coaching</h3></InfoDetail>;
  props.setTitle("About Us");
  // const Details = [BoulderingDetail, CoachingDetail];
  return (
    <DetailCol>
      <Tabs defaultTab="Intro">
        <InfoItems height="40vh">
          <Tabs.Tab img={steveImg} style={{backgroundPosition: `0% 28%`}} label="Steve" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Tabs.Tab>
          <Tabs.Tab img={chrisImg} label="Chris" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Tabs.Tab>
          <Tabs.Tab img={carlyImg} label="Carly" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Tabs.Tab>
          <Tabs.Tab img={miuraImg} label="Miura" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Tabs.Tab>
        </InfoItems>
          <Tabs.Panel label="Intro">

            <a>
<h6><span style={{fontWeight: `bold`}}>Welcome to Gebla!</span></h6>

                                                <p>We all started climbing for different reasons, at different times in our lives. In cities, in the mountains, indoor, and outdoors. Each of us discovered the same thing every climber will tell you - it’s about so much more than climbing. </p>
                        <p>We believe in giving people the opportunity to try it for themselves. To open up a new way to keep fit, without the repetition of gym sessions. To inspire people to do more than they thought they could. To help people improve their minds, to overcome challenges and feel the incredible sense of accomplishment you get right from that very first session. </p>
                        <p>Gebla is a place that's not about making judgements or feeling judged. It’s about feeling empowered and knowing yourself in a way you never did before. </p>
                        <p>In the end, you won’t remember the time you spent at your desk, or yet another day doing the chores. But you will remember the time, you felt the fear and did it anyway.
                        </p>
                      </a>
          </Tabs.Panel>
          <Tabs.Panel label="Steve">
            <Steve />
          </Tabs.Panel>
          <Tabs.Panel label="Chris">
            <Chris />
          </Tabs.Panel>
          <Tabs.Panel label="Carly">
            <Carly />
          </Tabs.Panel>
          <Tabs.Panel label="Miura">
            <Miura />
          </Tabs.Panel>
      </Tabs>
    </DetailCol>
  );
};

export default About;
// <Tabs.Tab label="Team" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Tabs.Tab>

        <br />

// <Tabs.Panel label="Team">
// <DetailRow>
//   <FlexColSmaller style={{minHeight: `600px`}}>
//   <a><p>Ġebla would be nothing without our support team! Thanks to all our friends for supporting us.</p>
//
//   </a>
//   </FlexColSmaller>
//   <FlexRowFill img={teamImg} />
//   </DetailRow>
// </Tabs.Panel>

// <p>Special shoutout to the following businesses:</p>
// <ul>
// <p>Malta Climbing Club</p>
// <p>Malta Adventure and Camping</p>
// <p>Crossfit F15</p>
// </ul>
