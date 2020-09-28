import * as React from "react";
import { DetailRow, HalfImageText, FlexCol } from "../styles";

const carlyImg = require("../../assets/img/img2.jpg");



const Carly = () => {
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];

  return (
    <DetailRow>
    <HalfImageText img={carlyImg} style={{minHeight: `600px`, backgroundPosition: `left bottom`}}/>
      <FlexCol right=true>
        <a>
        <p>Carly is originally from the UK but is now settled in Malta, happy on the rocks or in the sea!</p>
        <p>She first tried climbing a decade ago, starting out as an indoor boulderer in a London gym and turning to sport climbing when she arrived in Malta, four years ago. </p>

<p>When she's not busy climbing or focused on Gebla, she's a freelance brand strategy consultant and <a href="https://brndwgn.com/" target="_blank">BRND WGN</a> associate.</p>

        <p>As co-owner of Ġebla, Carly is passionate about giving people the opportunity to try climbing, creating a community and sharing her love for the outdoors.</p>
        <br />
        <p><a href="mailto:carly@gebla.mt">carly@gebla.mt</a></p>
        </a>
      </FlexCol>
    </DetailRow>
  );
};

export default Carly;
