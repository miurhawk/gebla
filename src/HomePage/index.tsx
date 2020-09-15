import * as React from "react";
import { Link } from "react-router-dom";
import { HalfImageText, Headline, DetailRow, DetailCol, FlexRowFill, FlexAColumnFill } from "../styles";

const indoorImg = require("../../assets/img/holds.jpg");
const outdoorImg = require("../../assets/img/img43.jpg");


const HomePage = () => {
  return (
    <DetailCol>
    <Headline>Get a grip. <span style={{color: `#23E5BF`}}>discover climbing.</span></Headline>

    <DetailRow>
        <FlexAColumnFill href="/indoor-home">
          <FlexRowFill style={{justifyContent: `center`, minHeight: `500px`}} img={indoorImg}>
            <h3>Indoor</h3>
          </FlexRowFill>
        </FlexAColumnFill>
        <FlexAColumnFill href="/outdoor-home">
          <FlexRowFill right="true" img={outdoorImg} style={{backgroundPosition: `centre`, justifyContent: `center`, minHeight: `500px`}}>
            <h3>Outdoor</h3>
          </FlexRowFill>
        </FlexAColumnFill>

    </DetailRow>
    <a>
<h6><span style={{fontWeight: `bold`}}>Hello. Welcome to Gebla.</span></h6>

<p>We love climbing and we think you will too. People of every age, shape and size are taking it up as a new sport every day. Check out <a href="/about">our story</a> to find out why you should give it a try. </p>
    </a>
    </DetailCol>

  );
};

export default HomePage;
