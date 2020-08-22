import * as React from "react";
import { Link } from "react-router-dom";
import { StyledTable, InfoTable, InfoItem, InfoItems, InfoDetail, TextDetail } from "../styles";
import { FunctionComponent, useState } from "react";
import { Tabs } from "../components/Tabs";
import Sport from "./Sport.tsx";
import GuidingDetail from "./Guiding.tsx";
import MaltaDetail from "./Malta.tsx";

const indoorImg = require("../../assets/img/indoor.jpg");



const OutdoorHome = (props: { setTitle: (v: string) => void, }) => {
  // const BoulderingDetail =
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];
  // const CoachingDetail = <InfoDetail><h3>Coaching</h3></InfoDetail>;
  props.setTitle("Outdoor");
  // const Details = [BoulderingDetail, CoachingDetail];
  return (
    <InfoTable>
      <Tabs defaultTab="Sport Climbing">
        <InfoItems>
          <Tabs.Tab label="Sport Climbing" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Tabs.Tab>
          <Tabs.Tab label="Malta" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Tabs.Tab>
          <Tabs.Tab label="Guiding" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Tabs.Tab>
        </InfoItems>
        <Tabs.Panel label="Sport Climbing">
          <Sport />
        </Tabs.Panel>
        <Tabs.Panel label="Malta">
          <MaltaDetail />
        </Tabs.Panel>
        <Tabs.Panel label="Guiding">
          <GuidingDetail />
        </Tabs.Panel>
      </Tabs>
    </InfoTable>
  );
};

export default OutdoorHome;
