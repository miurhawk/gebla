import * as React from "react";
import { Link } from "react-router-dom";
import { DetailRow, BookButton, FullPhoto, DetailCol, SmallDetailCol, HalfImageText, FlexCol, Divider } from "../styles";

const towerImg = require("../../assets/img/img34.jpg");//34


const Advanced = () => {
  // const BoulderingDetail =
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];
  // const CoachingDetail = <InfoDetail><h3>Coaching</h3></InfoDetail>;
  // const Details = [BoulderingDetail, CoachingDetail];
  return (
    <DetailCol>


      <DetailRow>
      <a><p><span style={{fontWeight: `bold`}}>Advance your skills.</span></p>

<p>Our advanced courses assume you're confident with toprope climbing to at least grade 5. We also need you to be happy toprope belaying, and have your own gear.</p>

      <p>Because each student is unique, we can't tell you beforehand how many sessions will be required to gain a competence in a new skill. We'll evaluate you after each session and tell you whether we think you're ready to perform the skill without supervision or not. But expect each skill to take 2-5 sessions to master.</p>
      <p>Each session is 3 hours long and costs €120. A maximum of 2 participants per guide is allowed.</p>
      <p>Email <a href="mailto:info@gebla.mt">info@gebla.mt</a> with your details to book a session.</p></a>

      </DetailRow>

      <DetailRow style={{flexWrap: `wrap`, justifyContent: `center`, alignContent: `space-between`}}>
      <SmallDetailCol>
        <a>
        <h6>Lead Climbing</h6>
        <br />
        <br />
        <p>Learn to safely lead climb a route, including guidance on partner safety checks, communication, rope management, and mental fortitude.</p>
        <p>With the ability to lead climb you will gain access to the majority of the climbs on the island and become more independent as a climber.</p>
        <p>Our guides will get you to the point where you are safe and comfortable on a lead route, and taking falls above and below a bolt.</p>
        </a>
      </SmallDetailCol>
      <SmallDetailCol>
        <a>
        <h6>Anchor Cleaning</h6>
        <br />
        <br />
        <p>In this course we will teach you how to safely clean all types of anchors found on sport climbs.</p>
        <p>You will practice first on the ground, then on a low hanging anchor, and finally atop a route.</p>
        </a>

      </SmallDetailCol>
      <SmallDetailCol>
          <BookButton><h7>Book Now</h7></BookButton>
          </SmallDetailCol>
        <SmallDetailCol>
          <a id="CE">
          <h6>Lead Belaying</h6>
          <br />
          <br />
          <p>In this course you'll learn how to safely lead belay from a standing position.</p>
          <p>We’ll improve your rope management skills, teach you how to check your rope for wear, and get you confidently belaying on all types of routes.</p>
          </a>
        </SmallDetailCol>

        <SmallDetailCol>
          <a>
          <h6>Anchor Building</h6>
          <br />
          <br />
          <p>In this course we will teach you how to build several types of anchors that can be used for abseiling, multipitch climbing, hanging belay, and more. We will mainly focus on building anchors on bolts, but are happy to share our knowledge on building natural anchors as well.</p>
          <p>You will practice first on the ground, then on a low hanging anchor, and finally atop a route.</p>
          </a>
        </SmallDetailCol>
        <SmallDetailCol>
          <a>
          <h6>Star Belayer</h6>
          <br />
          <br />
          <p>Most lead belayers can catch a basic fall. But very few belayers can catch a fall with grace.</p>
          <p>In this course we'll turn you into a star belayer-- the one everyone wants to give them a catch. You'll learn advanced techniques for catching your partner softly, how to better anticipate your climber's needs, and ways to improve communication when your climber is out of sight.</p>
          </a>

        </SmallDetailCol>

        <SmallDetailCol>
          <a>
          <h6>Multipitch</h6>
          requires lead, anchor building
          <br />
          <br />
          <p>Multipitch climbing will give you access to the stunning seacliff multipitches around the island, as well as countless adventures abroad.</p>
          <p>With this skill you'll solidify your anchor building and cleaning abilities, take your rope management skills to the next level, and be ready for adventures you never dreamed of.</p>
          <p>You should have all of your own gear for this skill, including at least 3 slings or cordelets, at least 3 locking carabiners, a full set of quickdraws, an ATC or similar belay device, a helmet, and your usual climbing gear.</p></a>
          <br />
          <br />
          <br />
          <br />
        </SmallDetailCol>
        <SmallDetailCol>
            <BookButton><h7>Book Now</h7></BookButton>
            </SmallDetailCol>
      </DetailRow>
      <FullPhoto img={towerImg} style={{minHeight: `120vh`}}></FullPhoto>

    </DetailCol>
  );
};
// <FlexRowFill img={shoesImg} style={{minHeight: `120vh`}} />

export default Advanced;
