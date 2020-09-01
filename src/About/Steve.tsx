import * as React from "react";
import { DetailRow, HalfImageText, FlexCol } from "../styles";

const steveImg = require("../../assets/img/img30.jpg");


const Steve = () => {
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];

  return (
    <DetailRow>
      <FlexCol>
      <a>
        <p>Steve is one of 5 Maltese people to climb a grade 8 climb.</p>
        <p>He started climbing three years ago and it was love at first onsight. In his real life he's an architecht, but he spends as much time as he can on the rocks.</p>
        <p>At Ġebla Steve is a co-owner, as well as a guide and instructor.</p>
        <br />
        <p><a href="mailto:steve@gebla.mt">steve@gebla.mt</a></p>
        </a>
      </FlexCol>
      <HalfImageText right=true style={{minHeight: `600px`}} img={steveImg} />

    </DetailRow>
  );
};

export default Steve;
