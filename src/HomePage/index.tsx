import * as React from "react";
import { Link } from "react-router-dom";
import { HalfImageText, Headline, DetailRow, DetailCol, FlexRowFill, FlexAColumnFill } from "../styles";

const indoorImg = require("../../assets/img/holds.jpg");
const outdoorImg = require("../../assets/img/img28.jpg");


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
          <FlexRowFill right="true" img={outdoorImg} style={{backgroundPosition: `left top`, justifyContent: `center`}}>
            <h3>Outdoor</h3>
          </FlexRowFill>
        </FlexAColumnFill>

    </DetailRow>
    <a>
    <span style={{fontWeight: `bold`}}><p>Hello. We love climbing and we think you will too. That’s why we’ve started Gebla. </p></span>
<p>People often tell us, "climbing isn’t for me", but we’re not buying it. Climbing is for everyone! Every age, shape and size. </p>
<p>Maybe you’ll have to try it to believe it; come and find out for yourself. Or check out our story to find out why… </p>
    </a>
    </DetailCol>

  );
};

export default HomePage;
