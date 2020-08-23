import * as React from "react";
import { DetailRow, GalleryDots, FlexRow, FlexColSmaller, FlexCol, InfoItem, InfoItemsSmall, InfoDetail, TextDetail, FlexRowFill } from "../styles";
const miuraImg = require("../../assets/img/img25.jpg");


const Miura = () => {
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];

  return (
    <DetailRow>
    <FlexRowFill style={{minHeight: `600px`} img={miuraImg} />
      <FlexColSmaller>
        <a>
        <p>Miura has been climbing for over 20 years and represented the United States in IFSC World Cups and other international competitions for half of that time.</p>
        <p>When she's not climbing she's either writing software or making tshirts.</p>
        <p>Miura is a co-owner of Ġebla, as well as the head coach and lead instructor.</p>
        <br />
        <p><a href="mailto:miura@gebla.mt">miura@gebla.mt</a></p>
        </a>
      </FlexColSmaller>
    </DetailRow>
  );
};

export default Miura;
