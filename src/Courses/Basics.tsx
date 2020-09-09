import * as React from "react";
import { Link } from "react-router-dom";
import { DetailRow, BookButton, FullPhoto, DetailCol, SmallDetailCol, HalfImageText, FlexCol, Divider } from "../styles";

import ig from "../../assets/img/ig.png";
import fb from "../../assets/img/fb.png";
import constructionImg from "../../assets/img/gato2.jpg";
const beginnerImg = require("../../assets/img/img16.jpg");


const Basics = () => {
  // const BoulderingDetail =
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];
  // const CoachingDetail = <InfoDetail><h3>Coaching</h3></InfoDetail>;
  // const Details = [BoulderingDetail, CoachingDetail];
  return (
    <DetailCol>
      <DetailRow>
          <a><p><span style={{fontWeight: `bold`}}>Discover climbing with one of our Basics courses. </span> </p>

<p>Each one will be tailored to you and we'll bring all the gear you need. Please come with plenty of water, appropriate clothes for exercise, and snacks. We'll send detailed information on where to meet your instructors on the day before your course.</p>
          <p>Email <a href="mailto:info@gebla.mt">info@gebla.mt</a> with your details to book a session.</p>
          </a>

      </DetailRow>

      <DetailRow style={{flexWrap: `wrap`, justifyContent: `center`}}>
        <SmallDetailCol>
          <a id="CE">
          <h6>Climb Experience</h6>
          €65 pp | 4 hours | no prerequisites
          <br />
          <br />
            <p>This fun session allows you to try climbing if you're not sure you want to commit to learning all the skills necessary to climb on your own.</p>
            <p>Our expert guides will look out for your safety and maximise your climbing time.</p>
            <p>While you won't learn any rope skills during the session, it's a great way to introduce yourself and start getting acquainted with the gear and protocols.</p>
          </a>
        </SmallDetailCol>
        <SmallDetailCol>
            <BookButton><h7>Book Now</h7></BookButton>
            </SmallDetailCol>
        <SmallDetailCol>
          <a>
          <h6>Intro to Climbing</h6>
          €70 pp | 3 hours | no prerequisites
          <br />
          <br />

        

	<p>In this tailored session we'll teach you general principles of climbing, some technique, basic understanding of anchors and safety.</p>

<p>We'll get you started with belaying, and of course you’ll get some actual climbing practice during the session.</p>

            <p>You won't be ready to climb without supervision after this course, but you'll be well on your way.</p>
          </a>
        </SmallDetailCol>
        <SmallDetailCol>
          <a>
          <h6>Top Rope Competence</h6>
          €130 pp | 4 hours | Intro to Climbing required
          <br />
          <br />
            <p>During the first 3 hours we reinforce what you learnt in the intro. You’ll learn to catch falls, practice belaying and learn about different devices as well as recognising safe anchor set up. </p>
            <p>We’ll help you improve your technique and general competence on the rock and teach you as much as you can take on board!  </p>
            <p>During the last hour we test you - checking the lines, tying in, partner safety checks, belay set up and technique. Assuming you pass, you’d be confident top rope climbing elsewhere and can confidently go to any sport climbing gym and pass their test for entry.</p>
          </a>
        </SmallDetailCol>
        <SmallDetailCol>
            <BookButton><h7>Book Now</h7></BookButton>
            </SmallDetailCol>
        <SmallDetailCol>
          <a>
          <h6>Abseiling Competence</h6>
          €120 pp | 3 hours | no prerequisites
          <br />
          <br />
            <p>Want the thrill without all the hard work? Abseiling may be for you.</p>
            <p>In this course we'll teach you  technique, equipment handling and how to set your own anchors; everything you need to know to be confident and safe when using your own gear. </p>
          </a>
        </SmallDetailCol>
      </DetailRow>
      <FullPhoto img={beginnerImg} style={{backgroundPosition: `top`, height: `120vh`}}></FullPhoto>

    </DetailCol>
  );
};
// <FlexRowFill img={shoesImg} style={{minHeight: `120vh`}} />

export default Basics;
