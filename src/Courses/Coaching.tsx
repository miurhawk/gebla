import * as React from "react";
import { Link } from "react-router-dom";
import { DetailRow, BookButton, FullPhoto, DetailCol, SmallDetailCol, HalfImageText, FlexCol, Divider } from "../styles";

const charlieImg = require("../../assets/img/img6.jpg");


const Coaching = () => {
  // const BoulderingDetail =
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];
  // const CoachingDetail = <InfoDetail><h3>Coaching</h3></InfoDetail>;
  // const Details = [BoulderingDetail, CoachingDetail];
  return (
    <DetailCol>

        <a>
<h6><span style={{fontWeight: `bold`, color: `#23E5BF`}}>Stuck on your project?</span></h6>
         

          <p><span style={{fontWeight: `bold`}}>Our experienced coaches are here to help! </span>We'll create a personalised training plan for you and meet with you as often as you'd like for technique review and feedback. Coaching sessions start at €55 per hour.</p>
          <p>Contact <a href="mailto:coach@gebla.mt">coach@gebla.mt</a> to book your sessions.</p>
        </a>
      <FullPhoto img={charlieImg} style={{height: `120vh`}}></FullPhoto>


    </DetailCol>
  );
};
// <FlexRowFill img={shoesImg} style={{minHeight: `120vh`}} />

export default Coaching;
