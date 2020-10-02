import * as React from "react";
import { HalfImageText, DetailRow, FlexCol } from "../styles";
const chrisImg = require("../../assets/img/img35.jpg");



const Chris = () => {
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];

  return (
    <DetailRow>
    <HalfImageText style={{minHeight: `600px`} img={chrisImg} />
      <FlexCol right=true>
        <a>
        <p>Chris has been climbing for 7 years, starting out on the Alps in his native Italy before moving to Malta and happily adapting to the local limestone cliffs.</p>
        
        <p>As a co-owner of Ġebla, Chris looks forward to sharing his knowledge of climbing gear and techniques to foster a successful next generation of climbers venturing outdoors.</p>
        <br />
        <p><a href="mailto:chris@gebla.mt">chris@gebla.mt</a></p>        </a>
      </FlexCol>
    </DetailRow>
  );
};

export default Chris;
