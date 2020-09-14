import * as React from "react";
import { Link } from "react-router-dom";
import { InfoDetail, FlexRowFill, GalleryDots, HalfImageText, BookButton, DetailCol, Headline, DetailRow, FlexCol } from "../styles";
import { FunctionComponent, useState } from "react";
import { Tabs } from "../components/Tabs";
import teamImg from "../../assets/img/img44.jpg";
import { Gallery } from "../components/Gallery.tsx";

import lauraImg from "../../assets/img/img69.jpg";
import lukasImg from "../../assets/img/img77.jpg";
import evImg from "../../assets/img/img80.jpg";
import fenechImg from "../../assets/img/img76.jpg";
import suhailImg from "../../assets/img/img63.jpg";

const ClimbExp = (props: { setTitle: (v: string) => void, }) => {
  props.setTitle("ClimbExp");
let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];

return (
  <DetailCol>

 <DetailRow>

      <Gallery defaultTab="1">
              <InfoDetail>
                <Gallery.GalleryItem label="1">
                  <FlexRowFill right="true" img={lauraImg}></FlexRowFill>
                </Gallery.GalleryItem>
                <Gallery.GalleryItem label="2">
                  <FlexRowFill img={lukasImg} />
                </Gallery.GalleryItem>
                <Gallery.GalleryItem label="3">
                  <FlexRowFill img={evImg} style={{backgroundPosition: `left top`}} />
                </Gallery.GalleryItem>
                <Gallery.GalleryItem label="4">
                  <FlexRowFill img={fenechImg}></FlexRowFill>
                </Gallery.GalleryItem>
                <Gallery.GalleryItem label="5">
                  <FlexRowFill img={suhailImg} />          </Gallery.GalleryItem>

        </InfoDetail>
        <GalleryDots>
                <Gallery.GalleryID hideLabel=true darkenHover=true label="1" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Gallery.GalleryID>
                <Gallery.GalleryID hideLabel=true darkenHover=true label="2" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Gallery.GalleryID>
                <Gallery.GalleryID hideLabel=true darkenHover=true label="3" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Gallery.GalleryID>
                <Gallery.GalleryID hideLabel=true darkenHover=true label="4" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Gallery.GalleryID>
                <Gallery.GalleryID hideLabel=true darkenHover=true label="5" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Gallery.GalleryID>
              </GalleryDots>
      </Gallery>

        <FlexCol right=true>
          <a>
            <h1> Climb experience </h1>

 <p><span style={{ color: `#23E5BF`}}>€65pp | 4 hours | no prerequisites | all equipment provided</span></p>

            <p>If you are looking for a thrilling outdoor activity to get stuck into, something to bring the family together, or an unforgettable experience gift for an adventure-loving friend, then look no further.</p>
            <p>With a focus on fun rather than learning, we’ll set everything up, provide all the safety equipment you need, and start you off gently with beginners' routes. For anyone finding it too easy, we’ll test you out on something more challenging, making sure everyone in the session gets to push their limits.</p>

            <p>Enjoy a work out for your body and your brain and experience what it’s like to be truly in the moment. Do something you never imagined you could. Support each other to overcome your challenges and share the incredible feeling of accomplishment.</p>

            <p>Because in the end, you won’t remember the time you spent in the office, or yet another day doing the chores. But you will remember the time, you felt the fear and did it anyway.</p>

<BookButton style={{margin: `0 50px 0 0`, alignleft: `flex-end`}} onClick={() => window.location.href='/form/Climb_Experience'}><h7>Book now</h7></BookButton>
            
       <br>
</br>
          </a>
        </FlexCol>
      </DetailRow>

      
<br>
</br>


</DetailCol>
};

export default ClimbExp;
