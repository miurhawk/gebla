import * as React from "react";
import { Link } from "react-router-dom";
import { DetailCol, Headline, HalfImageText, FlexCol, FullPhoto, DetailRow, Divider, FlexCol, InfoItem, InfoItems } from "../styles";
import { FunctionComponent, useState } from "react";
import { Tabs } from "../components/Tabs";
import Basics from "./Basics.tsx";
import Advanced from "./Advanced.tsx";
import Kids from "./Kids.tsx";
import Coaching from "./Coaching.tsx";

const multipitchImg = require("../../assets/img/img27.jpg");



const Courses = (props: { setTitle: (v: string) => void, }) => {
  props.setTitle("Courses & Coaching");
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];

  return (
    <DetailCol>

      <FullPhoto img={multipitchImg}><h1>learn the ropes</h1></FullPhoto>

      <Tabs defaultTab="Intro">
        <InfoItems>
          <Tabs.Tab label="Basics" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Tabs.Tab>
          <Tabs.Tab label="Advanced" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Tabs.Tab>
          <Tabs.Tab label="Kids' Programs" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Tabs.Tab>
          <Tabs.Tab label="1-to-1 Coaching" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Tabs.Tab>
        </InfoItems>
        <Tabs.Panel label="Intro">
          <DetailCol>
            <a>
            <span style={{fontWeight: `800`}}><p>Something for everyone: our courses range from entry level through to coaching for advanced technique. </p></span>
            <p>Our instructors are all highly experienced, so we'll make sure you're confident and proficient before we release you into the wild on your own.</p>
            <p>Check out the options above, or get in touch to find out more.</p>
            </a>
          </DetailCol>
        </Tabs.Panel>
        <Tabs.Panel label="Basics">
          <Basics />
        </Tabs.Panel>
        <Tabs.Panel label="Advanced">
          <Advanced />
        </Tabs.Panel>
        <Tabs.Panel label="Kids' Programs">
          <Kids />
        </Tabs.Panel>

        <Tabs.Panel label="1-to-1 Coaching">
          <Coaching />
        </Tabs.Panel>
      </Tabs>
    </DetailCol>
  );
};

export default Courses;
