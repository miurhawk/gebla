import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DetailRow, GalleryDots, FlexRow, FlexColSmaller, FlexCol, InfoItem, InfoItemsSmall, InfoDetail, TextDetail, FlexRowFill } from "../styles";
import { FunctionComponent, useState } from "react";
import { Gallery } from "../components/Gallery";
import { Tabs } from "../components/Tabs";
import lauraImg from "../../assets/img/img20.jpg";
import lukasImg from "../../assets/img/img21.jpg";
import evImg from "../../assets/img/img11.jpg";
import fenechImg from "../../assets/img/img14.jpg";
import suhailImg from "../../assets/img/img32.jpg";


const Sport = () => {
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];

  return (
    <DetailRow>
      <FlexColSmaller>
        <a>
          <p>Sport climbing is climbing with harnesses, ropes, and metal bolts secured into the rock. It's the safest type of outdoor climbing, so you can push your physical limits rather than your luck. There are hundreds of existing sport routes in Malta and more are bolted every year.</p>
          <p>If you want to give sport climbing a try for the first time, a <a href="/courses#CE">Climb Experience</a> might be right for you. Once you're hooked we offer a series of <a href="/courses">courses</a> to help you learn the safety and communication protocols of climbing so you can become a self-sufficient climber and belayer.</p>
          <p>When you become a climber, you join a global community of welcoming, adventurous, and eclectic folks who will be eager to share a belay anywhere in the world.</p>
        </a>
      </FlexColSmaller>
      <FlexColSmaller>
        <Gallery defaultTab="1">
          <InfoDetail>
            <Gallery.GalleryItem label="1">
              <FlexRowFill img={lauraImg} />
            </Gallery.GalleryItem>
            <Gallery.GalleryItem label="2">
              <FlexRowFill img={lukasImg} />
            </Gallery.GalleryItem>
            <Gallery.GalleryItem label="3">
              <FlexRowFill img={evImg} style={{backgroundPosition: `left top`}} />
            </Gallery.GalleryItem>
            <Gallery.GalleryItem label="4">
              <FlexRowFill img={fenechImg} />
            </Gallery.GalleryItem>
            <Gallery.GalleryItem label="5">
              <FlexRowFill img={suhailImg} />
            </Gallery.GalleryItem>
          </InfoDetail>
          <GalleryDots>
            <Gallery.GalleryID hideLabel=true darkenHover=true label="1" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Gallery.GalleryID>
            <Gallery.GalleryID hideLabel=true darkenHover=true label="2" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Gallery.GalleryID>
            <Gallery.GalleryID hideLabel=true darkenHover=true label="3" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Gallery.GalleryID>
            <Gallery.GalleryID hideLabel=true darkenHover=true label="4" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Gallery.GalleryID>
            <Gallery.GalleryID hideLabel=true darkenHover=true label="5" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Gallery.GalleryID>

          </GalleryDots>
        </Gallery>
      </FlexColSmaller>
    </DetailRow>
  );
};

export default Sport;
