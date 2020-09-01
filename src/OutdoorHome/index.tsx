import * as React from "react";
import { Link } from "react-router-dom";
import { DetailRow, FlexCol, HalfImageText, FlexRowFill, GalleryDots, Divider, DetailCol, Headline, StyledTable, InfoTable, InfoItem, InfoItems, InfoDetail, TextDetail, FullPhoto } from "../styles";
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
            <h2 style={{margin: `0`}}>GO OUTSIDE. <br /><span style={{paddingTop: `0.5rem`, color: `#23E5BF`}}>FEEL ALIVE.</span></h2>
              <p>Here in Malta we’re lucky to have access to hundreds of sport climbing routes, all easily accessible and in some of the most beautiful spots on the Islands. </p>



<p>Sport climbing is the safest type of outdoor climbing, so you can push your physical limits rather than your luck, or just have some fun on something nice and easy. </p>



<p>If you want to give it a try for the first time, our Climb Experience might be right for you. Once you're hooked we offer a series of courses to help you learn the safety and communication protocols of climbing so you can become a self-sufficient climber and belayer.</p>



<p>When you become a climber, you join a global community of welcoming, adventurous and eclectic folks who will be eager to share a belay, and a beer, anywhere in the world.</p>



<p>Find out more</p>
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
            <h2 style={{margin: `0`}}>guiding</h2>
            <p>Our highly-experienced guides are ready to show you a great day on the rocks. Guides are available on an hourly basis and can function in any of the following capacities:</p>
            <ul>
              <li>Taking an experienced group of climbers to a new area</li>
              <li>Showing climbers from abroad to the crag and reccomending routes worth climbing</li>
              <li>Acting as a belay or multipitch partner</li>
              <li>Taking inexperienced climbers to a toprope climbing area</li>

            </ul>
            <p>Guiding services are €35 per hour, per guide. Send an email to <a href="mailto:info@gebla.mt">info@gebla.mt</a> with your party size and dates to book.</p>
            </a>
          </FlexCol>
        </DetailRow>


        <br />
        <a id="malta"></a>

        <FullPhoto img={martinImg} style={{minHeight: `50vh`, backgroundPosition: `center`}}/>
        <DetailRow>
        <HalfImageText><h2><span style={{ color: `#23E5BF`}}>malta:</span> Discover</h2><h2 style={{paddingTop: `0.5rem`}}>something special</h2></HalfImageText>

        <FlexCol right=true>
            <a>
            <p>We are blessed in Malta with easy access to stunning crags, never more than a 15-minute walk from the parking, often with incredible sea views and just a quick jaunt from a beach for swimming afterwards.</p>
            <p>The island is well-connected with roads accessible to cars and bikes or scooters leading almost anywhere. Thanks to its small size, you never have to drive far to reach the crag.</p>
            <p>Maltese rock is limestone, and the crags often have a range of difficulties to suit climbers of all levels.</p>
            <p>Thanks to the friendliness of the people, a great restaurant and bar scene, and the relentless good weather, Malta is a wonderful place for your next climbing destination. And our <a href="/outdoor-home?dummy=guide##Guiding">guides</a> are here to save you time finding the crags and make sure you have a great vacation.</p>
            </a>
        </FlexCol>
        </DetailRow>


          </DetailCol>

  );
};

export default OutdoorHome;
