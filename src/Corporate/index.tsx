import * as React from "react";
import { Link } from "react-router-dom";
import { InfoDetail, FlexRowFill, GalleryDots, HalfImageText, BookButton, DetailCol, Headline, DetailRow, FlexCol } from "../styles";
import { FunctionComponent, useState } from "react";
import { Tabs } from "../components/Tabs";
import teamImg from "../../assets/img/img13.jpg";
import costyImg from "../../assets/img/img41.jpg";
import { Gallery } from "../components/Gallery.tsx";


const Corporate = (props: { setTitle: (v: string) => void, }) => {
  props.setTitle("Corporate");
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];

return (
  <DetailCol>

      <DetailRow>

      <Gallery defaultTab="1">
        <InfoDetail>
          <Gallery.GalleryItem label="1">
            <FlexRowFill right="true" img={teamImg}></FlexRowFill>
          </Gallery.GalleryItem>

        </InfoDetail>
        <GalleryDots>
          <Gallery.GalleryID hideLabel=true darkenHover=true label="1" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Gallery.GalleryID>
        </GalleryDots>
      </Gallery>

        <FlexCol right=true>
          <a>
            <h1>TEAM BUILDING</h1>
            <p>Bring your team together. Make it one to remember.</p>
            <p>If you’re searching for an exciting and innovative team building activity, look no further!</p>
            <p>Climbing is one of the best sports for team building because it promotes <span style={{fontWeight: `800`}}>trust, team work</span> and <span style={{fontWeight: `800`}}>communication</span>. It’s as much a mental activity as it is physical, so it’s the perfect combination for bringing a group together and encouraging them to think differently.</p>
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
            <a>
<p><span style={{ color: `#23E5BF`}}>Prices start at €65pp | 4 hours | no prerequisites | all equipment provided</span></p>
            <p>Try our Climb Experience for an awesome team building opportunity! We can tailor full or half days, depending on your requirements and group size.</p>
            <p>Designed to be focused on fun rather than learning rope work and climbing skills, we’ll ensure everyone has a great day out while pushing limits and encouraging teamwork, communication and trust.</p>
 <p>No matter how big your group is, there are several exercises which can be done in pairs or small groups to help build the team and bring people together.</p>
<p> Our expert guides will set everything up, provide all the equipment needed and ensure everyone is comfortable and safe. </p>
<p>We can also include a picnic before or after the session, at the crag or in a scenic spot nearby.</p>

            </a>
            <BookButton style={{margin: `0 50px 0 0`, alignSelf: `flex-end`}} onClick={() => window.location.href='/form/Corporate_Climb_Experience'}><h7>Book Now</h7></BookButton>

          </FlexCol>
          <HalfImageText right="true" img={costyImg} style={{backgroundPosition: `left center`}}><h2>The Climb Experience</h2></HalfImageText>

        </DetailRow>

      </DetailCol>
    )
};

export default Corporate;
