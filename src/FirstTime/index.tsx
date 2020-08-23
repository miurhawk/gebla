import * as React from "react";
import { Link } from "react-router-dom";
import { FlexRowFill, DetailRow, FullPhoto, StyledTable, FlexRow, InfoTable, FlexCol, FlexColSmaller, InfoItem, InfoItems, InfoDetail, TextDetail } from "../styles";
import { FunctionComponent, useState } from "react";
import { Tabs } from "../components/Tabs";
import martinImg from "../../assets/img/img9.jpg";
import costyImg from "../../assets/img/img8.jpg";
import ladiesImg from "../../assets/img/img18.jpg";
import fenechImg from "../../assets/img/img13.jpg";

const FirstTime = (props: { setTitle: (v: string) => void, }) => {
  props.setTitle("First Time");
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];
  // const CoachingDetail = <InfoDetail><h3>Coaching</h3></InfoDetail>;

  // const Details = [BoulderingDetail, CoachingDetail];
  return (
    <InfoTable>
      <Tabs defaultTab="Climbing Now">
        <InfoItems>
          <Tabs.Tab label="Climbing Now" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Tabs.Tab>
          <Tabs.Tab label="Learn the Ropes" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Tabs.Tab>
          <Tabs.Tab label="Corporate Teambuilding" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Tabs.Tab>
          <Tabs.Tab label="Kids" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Tabs.Tab>
        </InfoItems>
        <Tabs.Panel label="Climbing Now">

        <DetailRow>
          <FlexRowFill img={martinImg} style={{backgroundPosition: `0% 30%`}}><h1>Try it out</h1></FlexRowFill>
          <FlexColSmaller>
            <a style={{textAlign: `left`, paddingRight: `3rem`}}>
              <p>Always wanted to try climbing but don't know where to start?</p>
              <p>There's an endless supply of techniques and procedures to learn, but we suggest you leave the safety to us for your first time: we offer a <a href="/courses#CE">Climb Experience</a> for those wishing to just get straight on the rocks.</p>
              <p>We'll triple-check your knots and harness before you set off and share knowledge with you along the way, but this is the easiest way to the top to enjoy the view.</p>
              <p>Email <a href="mailto:info@gebla.mt">info@gebla.mt</a> to schedule your Climb Experience.</p>
            </a>
          </FlexColSmaller>
        </DetailRow>
        </Tabs.Panel>
        <Tabs.Panel label="Learn the Ropes">
          <DetailRow>
            <FlexColSmaller>
              <a style={{textAlign: `left`, paddingLeft: `3rem`}}>
                <p>For those who know they want to learn the safety procedures and communication protocols of climbing, we offer a series of <a href="/courses">courses</a> to master the basic and then advanced techniques.</p>
                <p>Our instructors are world-class and have been climbing for decades so they'll make sure you're confident and proficient before we release you into the wild on your own.</p>
                <p>Once you become a competent climber and belayer, you'll be able to organize your own climbing sessions with old and new friends around the world, and the relationships you build through climbing will be rock-solid.</p>
                <p>Email <a href="mailto:coach@gebla.mt">coach@gebla.mt</a> to schedule a lesson.</p>
              </a>
            </FlexColSmaller>
            <FlexRowFill img={costyImg} style={{backgroundPosition: `left center`}}><h1>Take a Class</h1></FlexRowFill>

          </DetailRow>
        </Tabs.Panel>
        <Tabs.Panel label="Corporate Teambuilding">

                <DetailRow>
                  <FlexRowFill img={fenechImg}><h1>Build Trust</h1></FlexRowFill>
                  <FlexColSmaller>
                    <a style={{textAlign: `left`, paddingRight: `3rem`}}>
                      <p>What better way to build trust in a teammate than to literally put your life in his hands?</p>
                      <p>Climbing is a great activity to grow a supportive environment as everyone pushes each other to reach the top. Teamwork and communication are essential between climber and belayer.</p>
                      <p>We offer <a href="/courses#CE">Climb Experiences</a> for groups, which can be followed up with a picnic with a view.</p>
                      <p>Email <a href="mailto:info@gebla.mt">info@gebla.mt</a> to schedule your group event.</p>
                    </a>
                  </FlexColSmaller>
                </DetailRow>
        </Tabs.Panel>

        <Tabs.Panel label="Kids">
        <DetailRow>
          <FlexColSmaller>
            <a style={{textAlign: `left`, paddingLeft: `3rem`}}>
              <p>Climbing teaches children perseverence, discipline, and respect for the environment. And the friends they make on the wall will last them a lifetime.</p>
              <p>We will offer several regular kids' programs in our gym once it opens, but until then we also offer all of our outdoor programs for children as well.</p>
              <p>Climbing can be a great activity for the whole family, no need to find a babysitter.</p>
              <p>Check out our <a href="/courses">courses</a> to see the best set for your family.</p>
            </a>
          </FlexColSmaller>
          <FlexRowFill img={ladiesImg}><h1>Family Fun</h1></FlexRowFill>

        </DetailRow>
        </Tabs.Panel>
      </Tabs>
    </InfoTable>
};

export default FirstTime;
