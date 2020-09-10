import * as React from "react";
import { Link } from "react-router-dom";
import { DetailCol, Headline, FullPhoto } from "../styles";
import shoesImg from "../../assets/img/img15.jpg";


const IndoorHome = (props: { setTitle: (v: string) => void, }) => {
  // const BoulderingDetail =
  // const CoachingDetail = <InfoDetail><h3>Coaching</h3></InfoDetail>;
  props.setTitle("Blog");
  // const Details = [BoulderingDetail, CoachingDetail];
  return (
    <DetailCol style={{textAlign: `center`}}>
      <Headline>COMING SOON</Headline>
      <a>We're still gearing up.</a>
      <a>Check back here for stories and news, coming soon!</a>
      <br />
      <FullPhoto img={shoesImg} style={{minHeight: `100vh`}} />

    </DetailCol>
  );
};

export default IndoorHome;
