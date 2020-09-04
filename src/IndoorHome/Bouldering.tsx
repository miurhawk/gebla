import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DetailRow, GalleryDots, FlexCol, InfoItem, InfoItemsSmall, InfoDetail, FlexRowFill } from "../styles";
import { FunctionComponent, useState } from "react";
import { Tabs } from "../components/Tabs";
import { Gallery } from "../components/Gallery";

import menuImg from "../../assets/img/img21.jpg"
import outdoorImg from "../../assets/img/img28.jpg"
import indoorImg from "../../assets/img/img3.jpg"



const Bouldering = () => {
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];

  return (
    <DetailRow>
      <FlexCol>
        <a>
          <p>Ġebla is Malta's largest indoor bouldering facility.</p>
          <p>No experience is necessary, though if it's your first time we recommend you arrive at least 2 hours before we close so that you'll have enough time to go through a brief orientation with our staff and fully explore the facility.</p>
          <p>If you'd rather have more supervision for your first visit, sign up for one of our Taster or Introduction Courses.</p>
          <p>Stay after your climb for a cold Cisk at our cafe!</p>
        </a>
      </FlexCol>
      <FlexCol>
        <Gallery defaultTab="4">
          <InfoDetail>
            <Gallery.GalleryItem label="1">
              <FlexRowFill img={outdoorImg} />
            </Gallery.GalleryItem>
            <Gallery.GalleryItem label="2">
              <FlexRowFill img={menuImg} />
            </Gallery.GalleryItem>
            <Gallery.GalleryItem label="3">
              <FlexRowFill img={outdoorImg} />
            </Gallery.GalleryItem>
            <Gallery.GalleryItem label="4">
              <FlexRowFill img={indoorImg} />
            </Gallery.GalleryItem>
            <Gallery.GalleryItem label="5">
              <FlexRowFill img={outdoorImg} />
            </Gallery.GalleryItem>
            <Gallery.GalleryItem label="6">
              <FlexRowFill img={indoorImg} />
            </Gallery.GalleryItem>
            <Gallery.GalleryItem label="7">
              <FlexRowFill img={outdoorImg} />
            </Gallery.GalleryItem>
            <Gallery.GalleryItem label="8">
              <FlexRowFill img={menuImg} />
            </Gallery.GalleryItem>
          </InfoDetail>
          <GalleryDots>
            <Gallery.GalleryID hideLabel=true darkenHover=true label="1" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Gallery.GalleryID>
            <Gallery.GalleryID hideLabel=true darkenHover=true label="2" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Gallery.GalleryID>
            <Gallery.GalleryID hideLabel=true darkenHover=true label="3" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Gallery.GalleryID>
            <Gallery.GalleryID hideLabel=true darkenHover=true label="4" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Gallery.GalleryID>
            <Gallery.GalleryID hideLabel=true darkenHover=true label="5" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Gallery.GalleryID>
            <Gallery.GalleryID hideLabel=true darkenHover=true label="6" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Gallery.GalleryID>
            <Gallery.GalleryID hideLabel=true darkenHover=true label="7" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Gallery.GalleryID>
            <Gallery.GalleryID hideLabel=true darkenHover=true label="8" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Gallery.GalleryID>
          </GalleryDots>
        </Gallery>
      </FlexCol>
    </DetailRow>
  );
};

export default Bouldering;
