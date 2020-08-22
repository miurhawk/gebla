import * as React from "react";
import { DetailRow, FlexRowFill, GalleryDots, FlexRow, FlexColSmaller } from "../styles";

const steveImg = require("../../assets/img/stevedahletqorrot.jpg");


const Steve = () => {
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];

  return (
    <DetailRow>
    <FlexRowFill style={{minHeight: `600px`}} img={steveImg} />
      <FlexColSmaller>
      <a>
        <p>Steve is one of 5 Maltese people to climb a grade 8 climb.</p>
        <p>He started climbing three years ago and it was love at first onsight. In his real life he's an architecht, but he spends as much time as he can on the rocks.</p>
        <p>At Ġebla Steve is a co-owner, as well as a guide and instructor.</p>
        <br />
        <p><a href="mailto:steve@gebla.mt">steve@gebla.mt</a></p>
        </a>
      </FlexColSmaller>
    </DetailRow>
  );
};

export default Steve;
