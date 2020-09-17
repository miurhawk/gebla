import * as React from "react";
import { Link } from "react-router-dom";
import { DetailCol, Headline, HalfImageText, FlexCol, FullPhoto, DetailRow, Divider, FlexCol, InfoItem, InfoItems } from "../styles";
import { FunctionComponent, useState, useEffect } from "react";
import { Tabs } from "../components/Tabs";
import Basics from "./Basics.tsx";
import Advanced from "./Advanced.tsx";
import Kids from "./Kids.tsx";
import Coaching from "./Coaching.tsx";

const multipitchImg = require("../../assets/img/img57.jpg");



const Courses = (props: { setTitle: (v: string) => void, }) => {
  // props.setTitle("Courses & Coaching");
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];
  const [color1, updateColor1] = useState("#23E5BF");
  const [color2, updateColor2] = useState("");
  const [color3, updateColor3] = useState("");
  const [color4, updateColor4] = useState("");


  useEffect(() => {
    setTimeout(() => updateColor1(""), 300)
    setTimeout(() => updateColor2("#23E5BF"), 300)
    setTimeout(() => updateColor2(""), 600)
    setTimeout(() => updateColor3("#23E5BF"), 600)
    setTimeout(() => updateColor3(""), 900)
    setTimeout(() => updateColor4("#23E5BF"), 900)
    setTimeout(() => updateColor4(""), 1200)
  }, []);

  return (
    <DetailCol>

      <FullPhoto img={multipitchImg}><h1>learn the ropes</h1></FullPhoto>

      <Tabs defaultTab="Intro">
        <InfoItems>
          <Tabs.Tab label="Basics" color={color1}></Tabs.Tab>
          <Tabs.Tab label="Advanced" color={color2}></Tabs.Tab>
          <Tabs.Tab label="Kids' Programs" color={color3}></Tabs.Tab>
          <Tabs.Tab label="1-to-1 Coaching" color={color4}></Tabs.Tab>
        </InfoItems>
        <Tabs.Panel label="Intro">
          <DetailCol>
            <a>
<h3>Something for <span style={{fontWeight: `bold`, color: `#23E5BF`}}>everyone</span></h3>
            <span style={{fontWeight: `800`}}><p>Our courses range from entry level through to coaching for advanced technique. </p></span>
            <p>Our instructors are all highly experienced, so we'll make sure you're confident and proficient before we release you into the wild on your own.</p>
            <p>Check out the options above, or <a href="mailto:info@gebla.mt">get in touch</a> to find out more.</p>

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
