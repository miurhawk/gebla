import * as React from "react";
import { Link } from "react-router-dom";
import { InfoTable, InfoItem, InfoItems, InfoDetail, TextDetail } from "../styles";

const indoorImg = require("../../assets/img/indoor.jpg");

const IndoorHome = () => {
  return (
    <InfoTable>
      <InfoItems>
        <InfoItem img={indoorImg}>
          <h1>Bouldering</h1>
        </InfoItem>
        <InfoItem img={indoorImg}>
          <h1>Courses &<br />Coaching</h1>
        </InfoItem>
        <InfoItem img={indoorImg}>
          <h1>Prices</h1>
        </InfoItem>
        <InfoItem img={indoorImg}>
          <h1>Events</h1>
        </InfoItem>
      </InfoItems>
      <InfoDetail img={indoorImg}>
        // <TextDetail>
          <h3>
          <p>Come check out Malta's largest indoor bouldering facility. No experience is necessary, though if it's your first time we recommend you arrive at least 2 hours before we close so that you'll have enough time to go through a brief orientation with our staff and fully explore the facility. See our rates here.</p>
          <p>If you'd rather have a bit more supervision for your first visit, sign up for one of our Taster or Introduction Courses.</p>
          <p>We have a cafe, showers, and training area, and we'll just ask you to submit a waiver either before you come or at the facility before you start climbing.</p>
          </h3>
        // </TextDetail>
      </InfoDetail>
    </InfoTable>
  );
};

export default IndoorHome;
