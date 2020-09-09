import * as React from "react";
import { DetailCol } from "../styles";


const Success = () => {



  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];
  return (
    <DetailCol>
      <a>
        <h6>Success! We'll be in touch soon.</h6>
      </a>
    </DetailCol>
  );
};

export default Success;
