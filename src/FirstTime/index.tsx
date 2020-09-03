import * as React from "react";
import { Link } from "react-router-dom";
import { HalfImageText, DetailCol, Divider, Headline, FlexRowFill, DetailRow, FullPhoto, StyledTable, FlexRow, InfoTable, FlexCol, FlexColSmaller, InfoItem, InfoItems, InfoDetail, TextDetail } from "../styles";
import { FunctionComponent, useState } from "react";
import { Tabs } from "../components/Tabs";
import enricoImg from "../../assets/img/img9.jpg";
import costyImg from "../../assets/img/img8.jpg";
import ladiesImg from "../../assets/img/img18.jpg";

const FirstTime = (props: { setTitle: (v: string) => void, }) => {
  props.setTitle("First Time");
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];
  // const CoachingDetail = <InfoDetail><h3>Coaching</h3></InfoDetail>;

  // const Details = [BoulderingDetail, CoachingDetail];
  return (
    <DetailCol>

          <FullPhoto img={enricoImg} style={{backgroundPosition: `0% 30%`}}><h1>FIND THE </h1><h1>CLIMBER IN YOU</h1></FullPhoto>
          <FlexCol right=true>
            <a>
              <span style={{fontWeight: `bold`}}><p>Always wanted to try climbing but don't know where to start?</p></span>

              <p>Anyone can climb. We feel pretty passionate about this. You don’t need to be an athlete, have ‘strong fingers’, be able to do pull ups, or be ‘young’.  So if you’re doubting yourself, put that to one side and let’s give it a try.</p> 

<p>Our <a href="/courses#CE">Climb Experience</a> is perfect if you’ve never tried it before. You can feel safe in the knowledge you’ll be in experienced hands and get to find out what it’s all about and have a great day out - on your own or with a group of friends. </p>

<p><a href="mailto:info@gebla.mt">Book now</a> or check out our range of courses below:</p>

             
             
            </a>
          </FlexCol>
        <br />
        <br />

        <br />
        <br />

        <DetailRow>
          <FlexCol>
            <a>
              <p>For those who know they want to learn the safety procedures and communication protocols of climbing, we offer a series of <a href="/courses">courses</a> to master the basic and then advanced techniques.</p>
              <p>Our instructors are world-class and have been climbing for decades so they'll make sure you're confident and proficient before we release you into the wild on your own.</p>
              <p>Once you become a competent climber and belayer, you'll be able to organize your own climbing sessions with old and new friends around the world, and the relationships you build through climbing will be rock-solid.</p>
              <p>Email <a href="mailto:coach@gebla.mt">coach@gebla.mt</a> to schedule a lesson.</p>
            </a>
          </FlexCol>
          <HalfImageText right="true" img={costyImg} style={{backgroundPosition: `left center`}}><h2>Take a Class</h2></HalfImageText>

        </DetailRow>
        <br />
        <br />

        <br />
        <br />

      <DetailRow>
      <HalfImageText img={ladiesImg}><h2>Family Fun</h2></HalfImageText>

        <FlexCol right=true>
          <a>
            <p>Climbing teaches children perseverence, discipline, and respect for the environment. And the friends they make on the wall will last them a lifetime.</p>
            <p>We will offer several regular kids' programs in our gym once it opens, but until then we also offer all of our outdoor programs for children as well.</p>
            <p>Climbing can be a great activity for the whole family, no need to find a babysitter.</p>
            <p>Check out our <a href="/courses">courses</a> to see the best set for your family.</p>
          </a>
        </FlexCol>


      </DetailRow>
      <br />
      <br />
        <br />
        <br />

        <DetailRow>
          <InfoItem img={costyImg} style={{height: `25vw`, backgroundPosition: `0% 28%`}}><h3>basics </h3></InfoItem>
          <InfoItem img={ladiesImg}><h3>advanced</h3></InfoItem>
          <InfoItem img={costyImg}><h3>Under 18s</h3></InfoItem>
          <InfoItem img={ladiesImg}><h3>coaching</h3></InfoItem>
        </DetailRow>

        </DetailCol>
};

export default FirstTime;
