import * as React from "react";
import { HalfImageText, DetailRow, FlexCol, FlexColSmaller, FlexCol, InfoItem, InfoItemsSmall, InfoDetail, TextDetail, FlexRowFill } from "../styles";
const chrisImg = require("../../assets/img/img35.jpg");



const Chris = () => {
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];

  return (
    <DetailRow>
    <HalfImageText style={{minHeight: `600px`} img={chrisImg} />
      <FlexCol right=true>
        <a>
        <p>Chris has been climbing for 6 years. He first learned in his native Italy, but has happily adapted to the Maltese limestone.</p>
        <p>Chris is our numbers guy and his attention to detail is unparalleled.</p>
        <p>As a co-owner of Ġebla, Chris hopes to share his knowledge of climbing safety and protocols to foster a succesful next generation of climbers.</p>
        <br />
        <p><a href="mailto:chris@gebla.mt">chris@gebla.mt</a></p>        </a>
      </FlexCol>
    </DetailRow>
  );
};

export default Chris;
