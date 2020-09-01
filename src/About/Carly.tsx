import * as React from "react";
import { DetailRow, HalfImageText, FlexCol, FlexRow, FlexColSmaller, FlexCol, InfoItem, InfoItemsSmall, InfoDetail, TextDetail, FlexRowFill } from "../styles";

const carlyImg = require("../../assets/img/img2.jpg");



const Carly = () => {
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];

  return (
    <DetailRow>
    <HalfImageText img={carlyImg} style={{minHeight: `600px`, backgroundPosition: `left bottom`}}/>
      <FlexCol right=true>
        <a>
        <p>Carly is our Marketing Wizard (TM). She is originally from the UK but has been in Malta for seven years.</p>
        <p>She first tried climbing a decade ago, as part of a family outing, and ended up enjoying it more than the kids!</p>
        <p>As co-owner of Ġebla, Carly is passionate about creating a community and sharing her love for the outdoors.</p>
        <br />
        <p><a href="mailto:carly@gebla.mt">carly@gebla.mt</a></p>
        </a>
      </FlexCol>
    </DetailRow>
  );
};

export default Carly;
