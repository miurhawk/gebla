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
        <p>Chris first started climbing in the Italian Alps. Since moving to Malta, he has become a central part of the local climbing community.</p>

<p>As part of the MCC committee for 3 years, he has welcomed many new climbers to the Maltese limestone. He knows every crag on the island and probably the amount of bolts on every route too.</p>
        
        <p>Now, as a co-owner of Ġebla and true gear guru, Chris hopes to share his knowledge of climbing safety and techniques to foster a succesful next generation of climbers venturing outdoors.</p>
        <br />
        <p><a href="mailto:chris@gebla.mt">chris@gebla.mt</a></p>        </a>
      </FlexCol>
    </DetailRow>
  );
};

export default Chris;
