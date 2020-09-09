import * as React from "react";
import { Link } from "react-router-dom";
import { HalfImageText, DetailCol, Headline, DetailRow, FlexCol } from "../styles";
import { FunctionComponent, useState } from "react";
import { Tabs } from "../components/Tabs";
import teamImg from "../../assets/img/img44.jpg";

const ClimbExp = (props: { setTitle: (v: string) => void, }) => {
  props.setTitle("ClimbExp");
return (
  <DetailCol>

      <DetailRow>
        <HalfImageText img={teamImg}></HalfImageText>
        <FlexCol right=true>
          <a>
            <h1>Climb experience</h1>

            <p>If you are looking for a thrilling outdoor activity to get stuck into, something to bring the family together, or an unforgettable experience gift for an adventure-loving friend, then look no further.</p>

 <p>With a focus on fun rather than learning, we’ll set everything up, provide all the safety equipment you need, and start you off gently with beginners routes. For anyone finding it too easy, we’ll test you out on something more challenging, making sure everyone in the session gets to push their limits.</p>

<p>Enjoy a work out for your body and your brain and experience what it’s like to be truly in the moment. Do something you never imagined you could. Support each other to overcome your challenges and share the incredible feeling of accomplishment.</p>

<p>Because in the end, you won’t remember the time you spent in the office, or yet another day doing the chores. But you will remember the time, you felt the fear and did it anyway.</p>

           
            <p>Book now <a href="mailto:info@gebla.mt">info@gebla.mt</a></p>
          </a>
        </FlexCol>
      </DetailRow>
<br>
</br>


</DetailCol>
};

export default ClimbExp;
