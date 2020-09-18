import * as React from "react";
import { Link } from "react-router-dom";
import { InfoDetail, FlexRowFill, GalleryDots, HalfImageText, BookButton, DetailCol, Headline, DetailRow, FlexCol} from "../styles";
import { FunctionComponent, useState } from "react";
import { Tabs } from "../components/Tabs";
import teamImg from "../../assets/img/img13.jpg";
import costyImg from "../../assets/img/img41.jpg";
import absImg from "../../assets/img/img82.jpg";
import Gallery from "../components/Gallery.tsx";


const Corporate = (props: { setTitle: (v: string) => void, }) => {
  props.setTitle("Corporate");
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];

return (
  <DetailCol>

      <DetailRow>

      <Gallery>
            <HalfImageText gall=true right="true" img={teamImg}></HalfImageText>
            <HalfImageText gall=true right="true" img={teamImg}></HalfImageText>
      </Gallery>

        <FlexCol right=true>

        <h1>TEAM BUILDING</h1>

          <a>
            <p>Bring your team together. Make it one to remember.</p>
            <p>If you’re searching for an exciting and innovative team building activity, look no further!</p>
            <p>Climbing is one of the best sports for team building because it promotes trust, team work and communication. It’s as much a mental activity as it is physical, so it’s the perfect combination for bringing a group together and encouraging them to think differently.</p>
            <p>Climbing fosters a supportive and collaborative environment, as we gently encourage people to step outside their comfort zone. And it provides a new opportunity for problem solving and building confidence - individually and as a team.</p>
            <p>No one will be forced to do more than they are able. But since climbing really is an activity anyone can try, the whole group will leave feeling inspired and that they have accomplished something they never imagined they could.</p>
       <br>
</br>
          </a>
        </FlexCol>
      </DetailRow>
<br>
</br>


 <DetailRow>
          <FlexCol>
          <h2>book the climb experience</h2>
            <a>
<p><span style={{ color: `#23E5BF`}}>Prices start at €65pp | 4 hours | no prerequisites | all equipment provided</span></p>
            <p>Try our Climb Experience for an awesome team building opportunity! We can tailor full or half days, depending on your requirements and group size.</p>
            <p>Designed to be focused on fun rather than learning rope work and climbing skills, we’ll ensure everyone has a great day out while pushing limits and encouraging teamwork, communication and trust.</p>
 <p>No matter how big your group is, there are several exercises which can be done in pairs or small groups to help build the team and bring people together.</p>
<p> Our expert guides will set everything up, provide all the equipment needed and ensure everyone is comfortable and safe. </p>
<p>We can also include a picnic before or after the session, at the crag or in a scenic spot nearby.</p>

            </a>
            <BookButton style={{margin: `0 50px 0 0`, alignSelf: `flex-end`}} onClick={() => window.location.href='/form/Corporate_Climb_Experience'}><h7>Book Now</h7></BookButton>
            <br />
            <br />
          </FlexCol>
          <HalfImageText right="true" img={costyImg} style={{backgroundPosition: `left center`}}><h2></h2></HalfImageText>

        </DetailRow>
<br/>

 <DetailRow>
      <HalfImageText img={absImg}><h2></h2></HalfImageText>

        <FlexCol right=true>
        <h2>Abseiling</h2>
          <a>

<p><span style={{ color: `#23E5BF`}}>Prices start at €65pp | no prerequisites | all equipment provided</span></p>

         <p>Do something thrilling in the safest way possible. Overcome the challenge with your friends or team mates and see the Maltese Islands from an entirely new aspect.</p>

 <p>The abseiling experience in Malta is fantastic; with sea cliffs, stunning valleys and limestone slabs, you’ll get to enjoy breathtaking views as you take a leap of faith and descend the rock face. </p>
   
<p>Our experienced abseiling guides will talk you through everything, put everyone at ease and show you how to take control of your descent.</p>

 <p>A great activity for team building, abseiling offers a fantastic day out which can be enjoyed by anyone, of any ability.</p>

<p>With lines from 10 to 50 metres across a range of locations, we can tailor the day to suit you. </p>

<p>We can also combine it with rock climbing for a full day’s adventure.</p>

          </a>

 <BookButton onClick={() => window.location.href='/form/Abseiling'}><h7>Book Now</h7></BookButton>
            <br />
            <br />
        </FlexCol>
      </DetailRow>

      </DetailCol>
    )
};

export default Corporate;
