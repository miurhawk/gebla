import * as React from "react";
import { Link } from "react-router-dom";
import { HalfImageText, DetailCol, Headline, DetailRow, FlexCol } from "../styles";
import { FunctionComponent, useState } from "react";
import { Tabs } from "../components/Tabs";
import fenechImg from "../../assets/img/img13.jpg";

const Corporate = (props: { setTitle: (v: string) => void, }) => {
  props.setTitle("Corporate");
return (
  <DetailCol>
      <DetailRow>
        <HalfImageText img={fenechImg}></HalfImageText>
        <FlexCol right=true>
          <a>
            <h1>build trust</h1>
            <p>What better way to build trust in a teammate than to literally put your life in his hands?</p>
            <p>Climbing is a great activity to grow a supportive environment as everyone pushes each other to reach the top. Teamwork and communication are essential between climber and belayer.</p>
            <p>We offer <a href="/courses#CE">Climb Experiences</a> for groups, which can be followed up with a picnic with a view.</p>
            <p>Email <a href="mailto:info@gebla.mt">info@gebla.mt</a> to schedule your group event.</p>
          </a>
        </FlexCol>
      </DetailRow>
</DetailCol>
};

export default Corporate;
