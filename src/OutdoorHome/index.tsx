import * as React from "react";
import { Link } from "react-router-dom";
import { DetailRow, FlexCol, HalfImageText, FlexRowFill, GalleryDots, Divider, DetailCol, Headline, StyledTable, InfoItem, InfoItems, InfoDetail, FullPhoto } from "../styles";
import { FunctionComponent, useState } from "react";
import { Gallery } from "../components/Gallery";


import lauraImg from "../../assets/img/img20.jpg";
import lukasImg from "../../assets/img/img21.jpg";
import evImg from "../../assets/img/img11.jpg";
import fenechImg from "../../assets/img/img14.jpg";
import suhailImg from "../../assets/img/img32.jpg";
import charlieImg from "../../assets/img/img.jpg"

import otherImg from "../../assets/img/img19.jpg";
import martinImg from "../../assets/img/img23.jpg";

const OutdoorHome = (props: { setTitle: (v: string) => void, }) => {
  // const BoulderingDetail =
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];
  // const CoachingDetail = <InfoDetail><h3>Coaching</h3></InfoDetail>;
  props.setTitle("Outdoor");
  // const Details = [BoulderingDetail, CoachingDetail];
  return (
    <DetailCol>

        <DetailRow>
          <FlexCol>
            <a>
              <h2>GO OUTSIDE. <br /><span style={{color: `#23E5BF`}}>FEEL ALIVE.</span></h2>
              <p>If you want to give it a try for the first time, our Climb Experience might be right for you. Once you're hooked we offer a series of courses to help you learn the safety and communication protocols of climbing so you can become a self-sufficient climber and belayer.</p>
              <p>When you become a climber, you join a global community of welcoming, adventurous and eclectic folks who will be eager to share a belay, and a beer, anywhere in the world.</p>
            </a>
          </FlexCol>
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
        </DetailRow>
        <br />
        <a id="guiding"></a>
        <DetailRow>
        <HalfImageText right=true img={charlieImg}></HalfImageText>

          <FlexCol right=true>
            <a>
            <h2>guiding</h2>
            <p>Our highly-experienced guides are ready to show you a great day on the rocks. Available on an hourly basis, guides can:</p>
            <ul>
              <li>take an experienced group of climbers to a new area,</li>
              <li>act as a belay or multipitch partner,</li>
              <li>show climbers from abroad to, and around, the crag,</li>
              <li>take less experienced climbers to a toprope climbing area.</li>

            </ul>
            <p>Guiding services are €35 per hour, per guide. <a href="mailto:info@gebla.mt">Contact us</a> with your party size and dates to book.</p>
            </a>
          </FlexCol>
        </DetailRow>


        <br />
        <a id="malta"></a>

        <FullPhoto img={martinImg} style={{minHeight: `50vh`, backgroundPosition: `center`}}/>
        <DetailRow>
        <FlexCol><h2><span style={{ color: `#23E5BF`}}>malta:</span> Discover<br />something special</h2></FlexCol>

        <FlexCol right=true>
            <a>
            <p>These beautiful Islands are blessed with easy access to stunning crags and hundreds of routes, often with incredible sea views.  </p>
            <p>Thanks to its small size, you never have to travel far to reach the crag and you’ll usually be just a quick jaunt from a beach for swimming afterwards.</p>
            <p>Maltese rock is limestone, with everything from epic overhanging lines in ancient caves to sketchy slabs. And each crag usually has a range of difficulties to suit climbers of all levels.</p>
            <p>Thanks to the friendliness of the people, a great restaurant and bar scene, an incredible cultural heritage and relentless clear blue sky, Malta is a wonderful place for your next climbing trip. And our <a href="/outdoor-home?dummy=guide##Guiding">guides</a> are here to save you time finding the crags and make sure you have a great vacation.</p>
            </a>
        </FlexCol>
        </DetailRow>


          </DetailCol>

  );
};

export default OutdoorHome;
