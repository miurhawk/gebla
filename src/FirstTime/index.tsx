import * as React from "react";
import { Link } from "react-router-dom";
import { HalfImageText, BookButton, DetailCol, DetailRow, FullPhoto, FlexCol } from "../styles";
import { FunctionComponent, useState } from "react";
import { Tabs } from "../components/Tabs";
import enricoImg from "../../assets/img/img9.jpg";
import costyImg from "../../assets/img/img68.jpg";
import ladiesImg from "../../assets/img/img18.jpg";
import tACImg from "../../assets/img/img38.jpg";
import martinImg from "../../assets/img/img54.jpg";
import teamImg from "../../assets/img/img71.jpg";

const FirstTime = (props: { setTitle: (v: string) => void, }) => {
  props.setTitle("First Time");
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];

  return (
    <DetailCol>

          <FullPhoto img={enricoImg} style={{backgroundPosition: `30% 50%`}}><h1>Find the climber in you</h1>
          <br>
          </br>
          <BookButton onClick={() => window.location.href='/courses'}><h7>See Our Courses</h7></BookButton></FullPhoto>
            <a>
          <br>
          </br>
          <h6><span style={{fontWeight: `bold`, color: `#23E5BF`}}>Want to try climbing but not sure  where to start?</span></h6>
              <p>Anyone can climb. We feel pretty passionate about this. You don’t need to be an athlete, have ‘strong fingers’, be able to do pull ups, or be ‘young’.  So if you’re doubting yourself, put that to one side and let’s give it a try.</p>
            </a>

      <DetailRow>
        <HalfImageText img={tACImg} />
          <FlexCol right=true>
          <h2>Take a course</h2>
          <a>
            <p> Get to grips with sport climbing! Learn with expert instructors. Master the safety procedures, become comfortable with the basics and you’ll be ready to partner up with other climbers and get out there.</p>
            <p>And when you’d like to take your skills to the next level or improve your technique, we have a range of advanced courses and coaching sessions to choose from.</p>
            <p>Take a look at our <a href="/courses">courses</a> to find the right one for you, or <a href="mailto:info@gebla.mt">email us</a> to schedule a lesson.</p>
          </a>
        </FlexCol>
      </DetailRow>
      <br />
      <DetailRow>
        <FlexCol>
          <h2>Book your Climb Experience</h2>
          <a>
            <p><span style={{ color: `#23E5BF`}}>€65pp | 4 hours | no prerequisites | all equipment provided</span></p>
            <p>If you are looking for a thrilling outdoor activity, something to bring the family together, or an unforgettable experience gift for an adventure-loving friend, then look no further.</p>
            <p>In this session we focus on fun rather than learning. We set everything up, provide all the safety equipment, and start you off gently with beginners' routes. For anyone finding it too easy, we’ll test you out on something more challenging, making sure everyone in the session gets to push their limits.</p>
            <p>Enjoy a work out for your body and your brain and experience what it’s like to be truly in the moment. Do something you never imagined you could. Support each other to overcome your challenges and share the incredible feeling of accomplishment.</p>

          </a>
          <BookButton onClick={() => window.location.href='/form/Climb_Experience'}><h7>Book Now</h7></BookButton>
          <br />
          <br />
          </FlexCol>
          <HalfImageText right="true" img={costyImg} style={{backgroundPosition: `left center`}}><h2></h2></HalfImageText>
        </DetailRow>
        <br />

      <DetailRow>
      <HalfImageText img={teamImg}><h2></h2></HalfImageText>

        <FlexCol right=true>
        <h2>Family fun</h2>
          <a>
            <p>Kids have tons of energy and it’s not easy to find new activities to keep them interested and learning at the same time. Climbing is a great way to put all that energy to good use. </p>
            <p>It teaches children perseverance, discipline, and respect for the environment. They’ll make lifelong friends, built on something special, and they’ll come home tired and happy.</p>
            <p>It’s also a great activity for families; a chance to come together and build new memories which will last a lifetime. </p>
            <p>  Check out our <a href="/courses">courses</a> or  <a href="mailto:info@gebla.mt">get in touch</a> to find out more.</p>
          </a>
        </FlexCol>
      </DetailRow>
      <br />
      <br />
      <br />
      <a id="malta"></a>
      <FullPhoto img={martinImg} style={{minHeight: `50vh`, backgroundPosition: `top`}} />
      <DetailRow>
        <FlexCol><h2> More than <span style={{ color: `#23E5BF`}}>climbing</span></h2></FlexCol>
        <FlexCol right=true>
          <a>
            <p>It's not just about doing things you never imagined you could. It’s about new friendships built on something different. A worldwide community you’re suddenly and automatically welcomed into. </p>
            <p>It's about supporting each other. Sharing the highs and lows. Finding a workout for your body and your brain that you can’t replicate in any other way. Accomplishing personal goals and loving it when you see others reach theirs. And at the end of the day, it’s about sharing the best cold beer you’ve ever had.</p>
            <p>It’s not about scaling Everest or taking up an adrenaline sport, but you will get to experience what it’s like to truly be in the moment. Forced to overcome fears, negative thoughts and anxiety. You’ll be a better person when you come back down to earth than when you left it.</p>
            <p>It’s about the art of movement and balance. About watching slim girls climb harder than big muscly guys. About not making judgements, or feeling judged. And it’s about feeling empowered, and knowing yourself, in a way you never did before.</p>
            <p>This is why we started Ġebla. Because we believe in giving people the opportunity to try it for themselves.</p>
            <p>Check out our <a href="/courses">courses</a> and book today!</p>
          </a>
        </FlexCol>
      </DetailRow>
      <br />
      <br />
    </DetailCol>
};

//
// <DetailRow>
//   <InfoItem img={costyImg} style={{height: `25vw`, backgroundPosition: `0% 28%`}}><h3>Enjoy a day out</h3></InfoItem>
//   <InfoItem img={ladiesImg} style={{height: `25vw`}}><h3>Learn the basics</h3></InfoItem>
//   <InfoItem img={enricoImg} style={{height: `25vw`}}><h3>Advanced training</h3></InfoItem>
//   <InfoItem img={ladiesImg} style={{height: `25vw`}}><h3>Kids' programs</h3></InfoItem>
// </DetailRow>
export default FirstTime;
