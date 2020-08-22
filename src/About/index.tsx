import * as React from "react";
import { Link } from "react-router-dom";
import { FlexColSmaller, DetailRow, FlexRow, FlexRowFill, InfoTable, InfoItem, InfoItems, InfoDetail, TextDetail } from "../styles";
import { FunctionComponent, useState } from "react";
import { Tabs } from "../components/Tabs";
import Steve from "./Steve.tsx";
import Carly from "./Carly.tsx";
import Chris from "./Chris.tsx";
import Miura from "./Miura.tsx";

import "typeface-montserrat";


const logo = require("../../assets/img/logo.png");
const miuraImg = require("../../assets/img/miura.jpg");
const steveImg = require("../../assets/img/steve.jpg");
const carlyImg = require("../../assets/img/carlyxini.jpg");
const chrisImg = require("../../assets/img/chris.jpg");
const teamImg = require("../../assets/img/team.jpg");

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
    <InfoTable>
      <Tabs defaultTab="Team">
        <InfoItems height="40vh">
          <Tabs.Tab label="Team" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Tabs.Tab>
          <Tabs.Tab img={steveImg} label="Steve" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Tabs.Tab>
          <Tabs.Tab img={carlyImg} label="Carly" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Tabs.Tab>
          <Tabs.Tab img={chrisImg} label="Chris" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Tabs.Tab>
          <Tabs.Tab img={miuraImg} label="Miura" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Tabs.Tab>
        </InfoItems>
          <Tabs.Panel label="Team">
          <DetailRow>
            <FlexColSmaller style={{minHeight: `600px`}}>
            <a><p>Ġebla would be nothing without our support team! Thanks to all our friends for supporting us.</p>

            </a>
            </FlexColSmaller>
            <FlexRowFill img={teamImg} />
            </DetailRow>
          </Tabs.Panel>
          <Tabs.Panel label="Steve">
            <Steve />
          </Tabs.Panel>
          <Tabs.Panel label="Carly">
            <Carly />
          </Tabs.Panel>
          <Tabs.Panel label="Chris">
            <Chris />
          </Tabs.Panel>
          <Tabs.Panel label="Miura">
            <Miura />
          </Tabs.Panel>
      </Tabs>
    </InfoTable>
  );
};

export default About;


// <p>Special shoutout to the following businesses:</p>
// <ul>
// <p>Malta Climbing Club</p>
// <p>Malta Adventure and Camping</p>
// <p>Crossfit F15</p>
// </ul>
