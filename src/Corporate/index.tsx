import * as React from "react";
import { Link } from "react-router-dom";
import { HalfImageText, DetailCol, Headline, DetailRow, FlexCol } from "../styles";
import { FunctionComponent, useState } from "react";
import { Tabs } from "../components/Tabs";
import teamImg from "../../assets/img/img13.jpg";
import costyImg from "../../assets/img/img41.jpg";

const Corporate = (props: { setTitle: (v: string) => void, }) => {
  props.setTitle("Corporate");
return (
  <DetailCol>

      <DetailRow>
        <HalfImageText img={teamImg}></HalfImageText>
        <FlexCol right=true>
          <a>
            <h1>TEAM BUILDING</h1>
            <p>Bring your team together. Make it one to remember.</p>
            <p>If you’re searching for an exciting and innovative team building activity, look no further!</p>
            <p>Climbing is one of the best sports for team building because it promotes trust, team work and communication. It’s as much a mental activity as it is physical, so it’s the perfect combination for bringing a group together and encouraging them to think differently.</p>
            <p>Climbing fosters a supportive and collaborative environment, as we gently encourage people to step outside their comfort zone. And it provides a new opportunity for problem solving and building confidence - individually and as a team.</p>
            <p>No one will be forced to do more than they are able. But since climbing really is an activity anyone can try, the whole group will leave feeling inspired and that they have accomplished something they never imagined they could.</p>
            <p>We currently offer <a href="/courses#CE">Climb Experiences</a> for groups, which can be followed up with a picnic with a view.</p>
            <p>Email <a href="mailto:info@gebla.mt">info@gebla.mt</a> to schedule your group event.</p>
          </a>
        </FlexCol>
      </DetailRow>
<br>
</br>

 <DetailRow>
          <FlexCol>
            <a>
              <p>new copy to go here</p>
              <p>It teaches children perseverance, discipline, and respect for the environment. They’ll make lifelong friends, built on something special, and they’ll come home tired and happy.</p>
              <p>It’s also a great activity for families; a chance to come together and build new memories which will last a lifetime. </p>
              <p>It’s also a great activity for families; a chance to come together and build new memories which will last a lifetime. </p>
              <p><a href="mailto:info@gebla.mt">Book today</a> or check out our <a href="/courses">courses</a> to explore our range of courses.</p>
            </a>
          </FlexCol>
          <HalfImageText right="true" img={costyImg} style={{backgroundPosition: `left center`}}><h2>Climb Experience</h2></HalfImageText>

        </DetailRow>

</DetailCol>
};

export default Corporate;
