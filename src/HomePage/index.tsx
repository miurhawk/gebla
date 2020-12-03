import * as React from "react";
import { Link } from "react-router-dom";
import { HalfImageText, Headline, DetailRow, DetailCol, FlexRowFill, FlexAColumnFill } from "../styles";

const indoorImg = require("../../assets/img/test.jpg");
const outdoorImg = require("../../assets/img/img43.jpg");


const HomePage = () => {
  return (
    <DetailCol>
      <Headline>Get a grip. <span style={{color: `#23E5BF`}}>discover climbing.</span></Headline>

      <DetailRow>
          <FlexAColumnFill href="/indoor-home">
            <FlexRowFill style={{justifyContent: `center`}} img={indoorImg}>
              <h3>Indoor</h3>
            </FlexRowFill>
          </FlexAColumnFill>
          <FlexAColumnFill href="/outdoor-home">
            <FlexRowFill right="true" img={outdoorImg} style={{backgroundPosition: `80% 0%`, justifyContent: `center`}}>
              <h3>Outdoor</h3>
            </FlexRowFill>
          </FlexAColumnFill>

      </DetailRow>
      <a>
        <h6><span style={{fontWeight: `bold`}}>Welcome to Ġebla.</span></h6>
        <p>We love climbing and think you will too. It's a fantastic sport anyone can try. Climb Malta's stunning cliffs and valleys, see these beautiful Islands from a whole new perspective and feel the exhilaration of achieving something you maybe never imagined you could. </p>

<p>People of every age, shape and size are taking it up as a new sport every day. <a href="/first-time">Find out more</a> about climbing, take a look at our range of <a href="/courses">courses</a> or try our  <a href="/climb-exp">Climb Experience</a> for an unforgettable day out.</p>

<p>Read <a href="/about">our story</a> to find out why we'd love you to give it a try. </p>
      </a>
    </DetailCol>

  );
};

export default HomePage;
