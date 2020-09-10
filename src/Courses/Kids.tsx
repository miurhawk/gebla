import * as React from "react";
import { Link } from "react-router-dom";
import { DetailRow, BookButton, FullPhoto, DetailCol, SmallDetailCol, HalfImageText, FlexCol, Divider } from "../styles";

const kidsImg = require("../../assets/img/img17.jpg");


const Basics = () => {
  // const BoulderingDetail =
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];
  // const CoachingDetail = <InfoDetail><h3>Coaching</h3></InfoDetail>;
  // const Details = [BoulderingDetail, CoachingDetail];
  return (
    <DetailCol>
      <DetailRow>
      <a id="kids"><p><span style={{fontWeight: `bold`}}>Climbing is a great activity for children as it combines problem-solving with physical activity</span> and can lead to increased discipline, motivation, and social bonding.</p>
      <p>Our children's programs aren't available until our Msida gym opens in a few months, but you can start getting excited and book your place for once we do open.</p>
      <p>Email <a href="mailto:coach@gebla.mt">coach@gebla.mt</a> with your child's age and climbing experience to inquire further.</p></a>



      </DetailRow>

      <DetailRow style={{flexWrap: `wrap`, justifyContent: `center`}}>
        <SmallDetailCol>
          <a>
          <h6>Kids' Club</h6>
          <p style={{ color: `#23E5BF`}}>€170 per month | ages 5-16</p>
          <p>Kids' Club is for children who want to climb socially and regularly.</p>
          <p>Club will meet regularly once per week in our gym, where experienced coaches will play climbing games and work on improving technique with the group.</p>
          <p>Members of kids club will get free shoe rental during their weekly session.</p>
          </a>
          <BookButton onClick={() => window.location.href='/form/Kids_Club'}><h7>Join</h7></BookButton>

        </SmallDetailCol>
        <SmallDetailCol>
          <a>
          <h6>Competitive Team</h6>
          <p style={{ color: `#23E5BF`}}>€250 per month | ages 8-19</p>
          <p>The competitive team is for kids who want to excel at climbing and compete internationally.</p>
          <p>We will accept children of all ability levels, as long as they are motivated to train hard and improve. The team will meet three times per week to train together, and all team members will have free access to the gym during any opening hours.</p>
          <p>Team dues also include competition jerseys, individual training plans, and coaching at local and international competitions.</p>
          </a>
          <BookButton onClick={() => window.location.href='/form/Competitive_Team'}><h7>Join</h7></BookButton>
        </SmallDetailCol>
        <SmallDetailCol>
          <a>
          <h6>Birthday Parties</h6>
          <p style={{ color: `#23E5BF`}}>€35 pp for 3 hours</p>
          <p>Climbing is a great birthday party activity: the kids will bond over solving tricky climbs, and get a physical and mental workout before sitting down in our cafe to open presents and celebrate the birthday boy or girl.</p>
          <p>We'll supervise the climbing and give the group an introduction to safety in the gym. You bring the cake.</p>
          </a>
          <BookButton onClick={() => window.location.href='/form/Birthday_Party'}><h7>Book</h7></BookButton>
        </SmallDetailCol>

      </DetailRow>
      <FullPhoto img={kidsImg} style={{backgroundPosition: `top`, height: `120vh`}}></FullPhoto>

    </DetailCol>
  );
};
// <FlexRowFill img={shoesImg} style={{minHeight: `120vh`}} />

export default Basics;
