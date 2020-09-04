import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DetailRow, FlexCol, FlexRowFill } from "../styles";
import { FunctionComponent, useState } from "react";
import { Tabs } from "../components/Tabs";
import { Gallery } from "../components/Gallery";

import indoorImg from "../../assets/img/img3.jpg"



const CoursesDetail = () => {
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];

  return (
    <DetailRow>
    <FlexRowFill img={indoorImg} />
      <FlexCol>
        <a>
        <p>We offer many courses at our indoor facility, from supervised beginner "Taster" sessions to advanced training for elite athletes. Check out our <a href="/courses">Courses</a> page for more info.</p>
        </a>
      </FlexCol>
    </DetailRow>
  );
};

export default CoursesDetail;
