import * as React from "react";
import { Link } from "react-router-dom";
import { FlexCol, FlexRow, FlexRowFill, InfoTable, InfoItem, InfoItems, InfoDetail, TextDetail } from "../styles";
import shoesImg from "../../assets/img/img15.jpg";


const IndoorHome = (props: { setTitle: (v: string) => void, }) => {
  // const BoulderingDetail =
  // const CoachingDetail = <InfoDetail><h3>Coaching</h3></InfoDetail>;
  props.setTitle("Blog");
  // const Details = [BoulderingDetail, CoachingDetail];
  return (
    <FlexCol style={{textAlign: `center`}}>
      <h1>COMING SOON</h1>
      <a>we're still gearing up</a>
      <br />
      <a>check back here for more details</a>
      <br />
      <FlexRowFill img={shoesImg} style={{minHeight: `100vh`}} />

    </FlexCol>
  );
};

export default IndoorHome;
