import * as React from "react";
import { Link } from "react-router-dom";
import { FullPhoto, DetailRow, Divider, FlexRowFill, StyledTable, FlexRow, InfoTable, FlexCol, FlexColSmaller, InfoItem, InfoItems, InfoDetail, TextDetail } from "../styles";
import { FunctionComponent, useState } from "react";
import { Tabs } from "../components/Tabs";

const indoorImg = require("../../assets/img/indoor.jpg");
const beginnerImg = require("../../assets/img/justine.jpg");
const towerImg = require("../../assets/img/towerpower.jpg");
const kidsImg = require("../../assets/img/kids.jpg");
const charlieImg = require("../../assets/img/charliemelli.jpg");
const multipitchImg = require("../../assets/img/multipitch.jpg");

// type TabDetail {item: InfoItem; detail: InfoDetail;};
// const TabDetails Array<TabDetail> = [
//   {item: }
// ];
const Courses = (props: { setTitle: (v: string) => void, }) => {
  props.setTitle("Courses & Coaching");
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];
  // const CoachingDetail = <InfoDetail><h3>Coaching</h3></InfoDetail>;

  // const Details = [BoulderingDetail, CoachingDetail];
  return (
    <InfoTable>
      <Tabs defaultTab="Basics">
        <InfoItems>
          <Tabs.Tab label="Basics" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Tabs.Tab>
          <Tabs.Tab label="Advanced" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Tabs.Tab>
          <Tabs.Tab label="Kids' Programs" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Tabs.Tab>
          <Tabs.Tab label="1-to-1 Coaching" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Tabs.Tab>
        </InfoItems>
        <Tabs.Panel label="Basics">
        <DetailRow>
          <a style={{paddingLeft: `15vw`, paddingRight:`15vw`}}><p>All of our Basics courses include all the gear you need. Please bring plenty of water, appropriate clothes for exercise in the weather of the day, and snacks. We will send detailed information on where to meet your guides on the day before your course.</p>
          <p>Email <a href="mailto:info@gebla.mt">info@gebla.mt</a> with your details to book a session.</p></a>
          <FlexRowFill img={beginnerImg} style={{minHeight: `100vh`, backgroundPosition: `top`}}></FlexRowFill>
        </DetailRow>
        <DetailRow>
          <FlexRowFill><h1>Climb Experience</h1><a>€65 pp | 4 hours | no prerequisites</a></FlexRowFill>
          <FlexColSmaller>
            <a id="CE" style={{textAlign: `left`, paddingRight: `3rem`}}>
              <p>The Climb Experience allows you to try climbing if you're not sure you want to commit to learning all the skills necessary to climb on your own.</p>
              <p>Our expert guides will look out for your safety and maximize your climbing time.</p>
              <p>While you won't learn any rope skills during the session, it's a great way to introduce yourself and start getting acquainted with the gear and protocols.</p>
            </a>
          </FlexColSmaller>
        </DetailRow>
        <Divider />
        <DetailRow>
          <FlexColSmaller>
            <a style={{textAlign: `left`, paddingLeft: `3rem`}}>
              <p>In this course we will teach you general principles of climbing and basic climbing technique, introduce you to safety equipment and protocols, and get you started with belaying.</p>
              <p>You won't be ready to climb without supervision after this course, but you'll be well on your way.</p>
            </a>
          </FlexColSmaller>
          <FlexRowFill><h1>Introduction to Climbing</h1><a>€70 pp | 3 hours | no prerequisites</a></FlexRowFill>
        </DetailRow>
        <Divider />
        <DetailRow>
          <FlexRowFill><h1>Top Rope Competence</h1><a>€130 pp | 4 hours | Intro to Climbing required</a></FlexRowFill>
          <FlexColSmaller>
            <a style={{textAlign: `left`, paddingRight: `3rem`}}>
              <p>During the first 3 hours we reinforce what you learned in the intro course. You’ll practice belaying and learn about different belay devices and best practices when it comes to anchors.</p>
              <p>We’ll help you improve your technique and general competence on the rock and teach you as much as you can take on board!</p>
              <p>During the last hour we will test you - checking the lines, tying in, partner safety checks, belay set up and technique.</p>
              <p>If you pass, it means that we are confident in your top rope climbing abilities and you can join other groups as a climber or belayer on toprope.</p>
            </a>
          </FlexColSmaller>
        </DetailRow>
        <Divider />
        <DetailRow>
          <FlexColSmaller>
            <a style={{textAlign: `left`, paddingLeft: `3rem`}}>
              <p>Want the thrill without all the hard work? Abseiling may be for you.</p>
              <p>In this course we'll teach you everything you need to know to be confident and safe when using your own gear to abseil:  technique, equipment handling and setting your own anchors.</p>
            </a>
          </FlexColSmaller>
          <FlexRowFill><h1>Abseiling Competence</h1><a>€120 pp | 3 hours | no prerequisites</a></FlexRowFill>
        </DetailRow>
        </Tabs.Panel>
        <Tabs.Panel label="Advanced">
        <DetailRow>
          <a style={{padding: `3rem`}}><p>Our advanced courses assume you are familiar with toprope belaying and climbing and have all your own gear. You should be able to confidently climb at least a grade 5 climb on toprope.</p>
          <p>Because each student is unique, we can't tell you beforehand how many sessions will be required to gain a competence in a new skill. We will evaluate you after each session and tell you whether we think you're ready to perform the skill without supervision or not. But expect each skill to take 2-5 sessions to master.</p>
          <p>Each session is 3 hours long and costs €120. A maximum of 2 participants per guide is allowed.</p>
          <p>Email <a href="mailto:info@gebla.mt">info@gebla.mt</a> with your details to book a session.</p></a>
        </DetailRow>
        <Divider />

        <DetailRow>
          <FlexRowFill><h1>Lead Climbing</h1></FlexRowFill>
          <FlexColSmaller>
            <a style={{textAlign: `left`, paddingRight: `3rem`}}>
              <p>Learn to safely lead climb a route, including guidance on partner safety checks, communication, rope management, and mental fortitude.</p>
              <p>With the ability to lead climb you will gain access to the majority of the climbs on the island and become more independent as a climber.</p>
              <p>Our guides will get you to the point where you are safe and comfortable on a lead route, and taking falls above and below a bolt.</p>
            </a>
          </FlexColSmaller>
        </DetailRow>
        <Divider />
        <DetailRow>
          <FlexColSmaller>
            <a style={{textAlign: `left`, paddingLeft: `3rem`}}>
              <p>In this course we will teach you how to safely clean all types of anchors found on sport climbs.</p>
              <p>You will practice first on the ground, then on a low hanging anchor, and finally atop a route.</p>
            </a>
          </FlexColSmaller>
          <FlexRowFill><h1>Anchor Cleaning</h1></FlexRowFill>
        </DetailRow>
        <FlexRowFill img={towerImg} style={{minHeight: `120vh`}}></FlexRowFill>

        <DetailRow>
          <FlexRowFill><h1>Lead Belaying</h1></FlexRowFill>
          <FlexColSmaller>
            <a style={{textAlign: `left`, paddingRight: `3rem`}}>
              <p>In this course you'll learn how to safely lead belay from a standing position.</p>
              <p>We’ll improve your rope management skills, teach you how to check your rope for wear, and get you confidently belaying on all types of routes.</p>
            </a>
          </FlexColSmaller>
        </DetailRow>
        <Divider />
        <DetailRow>
          <FlexColSmaller>
            <a style={{textAlign: `left`, paddingLeft: `3rem`}}>
              <p>In this course we will teach you how to build several types of anchors that can be used for abseiling, multipitch climbing, hanging belay, and more. We will mainly focus on building anchors on bolts, but are happy to share our knowledge on building natural anchors as well.</p>
              <p>You will practice first on the ground, then on a low hanging anchor, and finally atop a route.</p>
            </a>
          </FlexColSmaller>
          <FlexRowFill><h1>Anchor Building</h1></FlexRowFill>
        </DetailRow>
        <Divider />
        <DetailRow>
          <FlexRowFill><h1>Star Belayer</h1></FlexRowFill>
          <FlexColSmaller>
            <a style={{textAlign: `left`, paddingRight: `3rem`}}>
              <p>Most lead belayers can catch a basic fall. But very few belayers can catch a fall with grace.</p>
              <p>In this course we'll turn you into a star belayer-- the one everyone wants to give them a catch. You'll learn advanced techniques for catching your partner softly, how to better anticipate your climber's needs, and ways to improve communication when your climber is out of sight.</p>
            </a>
          </FlexColSmaller>
        </DetailRow>
        <Divider />
        <DetailRow>
          <FlexColSmaller>
            <a style={{textAlign: `left`, paddingLeft: `3rem`}}>
              <p>Multipitch climbing will give you access to the stunning seacliff multipitches around the island, as well as countless adventures abroad.</p>
              <p>With this skill you'll solidify your anchor building and cleaning abilities, take your rope management skills to the next level, and be ready for adventures you never dreamed of.</p>
              <p>You should have all of your own gear for this skill, including at least 3 slings or cordelets, at least 3 locking carabiners, a full set of quickdraws, an ATC or similar belay device, a helmet, and your usual climbing gear.</p>
            </a>
          </FlexColSmaller>
          <FlexRowFill><h1>Multipitch</h1><a>requires lead, anchor building</a></FlexRowFill>
        </DetailRow>
        <FlexRowFill img={multipitchImg} style={{minHeight: `120vh`}}></FlexRowFill>

        </Tabs.Panel>
        <Tabs.Panel label="Kids' Programs">
        <DetailRow>
          <a style={{padding: `3rem`}}><p>Climbing is a great activity for children as it combines problem-solving with physical activity and can lead to increased discipline, motivation, and social bonding.</p>
          <p>Our children's programs aren't available until our Msida gym opens in a few months, but you can start getting excited and book your place for once we do open.</p>
          <p>Email <a href="mailto:coach@gebla.mt">coach@gebla.mt</a> with your child's age and climbing experience to inquire further.</p></a>
        <FlexRowFill img={kidsImg} style={{minHeight: `100vh`}}></FlexRowFill>
        </DetailRow>
        <DetailRow>
          <FlexRowFill><h1>Kids' Club</h1><a>€170 per month | ages 5-16</a></FlexRowFill>
          <FlexColSmaller>
            <a style={{textAlign: `left`, paddingRight: `3rem`}}>
              <p>Kids' Club is for children who want to climb socially and regularly.</p>
              <p>Club will meet regularly once per week in our gym, where experienced coaches will play climbing games and work on improving technique with the group.</p>
              <p>Members of kids club will get free shoe rental during their weekly session.</p>
            </a>
          </FlexColSmaller>
        </DetailRow>
        <Divider />
        <DetailRow>
          <FlexColSmaller>
            <a style={{textAlign: `left`, paddingLeft: `3rem`}}>
              <p>The competitive team is for kids who want to excel at climbing and compete internationally.</p>
              <p>We will accept children of all ability levels, as long as they are motivated to train hard and improve. The team will meet three times per week to train together, and all team members will have free access to the gym during any opening hours.</p>
              <p>Team dues also include competition jerseys, individual training plans, and coaching at local and international competitions.</p>
            </a>
          </FlexColSmaller>
          <FlexRowFill><h1>Competitive Team</h1><a>€250 per month | ages 8-19</a></FlexRowFill>
        </DetailRow>
        <Divider />
        <DetailRow>
          <FlexRowFill><h1>Birthday Parties</h1><a>€35 pp for 3 hours</a></FlexRowFill>
          <FlexColSmaller>
            <a style={{textAlign: `left`, paddingRight: `3rem`}}>
              <p>Climbing is a great birthday party activity: the kids will bond over solving tricky climbs, and get a physical and mental workout before sitting down in our cafe to open presents and celebrate the birthday boy or girl.</p>
              <p>We'll supervise the climbing and give the group an introduction to safety in the gym. You bring the cake.</p>
            </a>
          </FlexColSmaller>
        </DetailRow>
        </Tabs.Panel>

        <Tabs.Panel label="1-to-1 Coaching">
          <DetailRow>
            <a style={{paddingLeft: `15vw`, paddingRight: `15vw`}}>
              <p>Stuck on your project? Our experienced coaches are here to help! We'll create a personalized training plan for you and meet with you as often as you'd like for techique review and feedback. Coaching sessions start at €55 per hour.</p>
              <p>Contact <a href="mailto:coach@gebla.mt">coach@gebla.mt</a> or inquire at the gym for more info.</p>
            </a>
          </DetailRow>
          <FlexRowFill img={charlieImg} style={{minHeight: `100vh`}}></FlexRowFill>
        </Tabs.Panel>
      </Tabs>
    </InfoTable>
  );
};

export default Courses;
