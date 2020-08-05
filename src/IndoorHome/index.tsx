import * as React from "react";
import { Link } from "react-router-dom";
import { StyledTable, InfoTable, InfoItem, InfoItems, InfoDetail, TextDetail } from "../styles";
import { FunctionComponent, useState } from "react";
import { Tabs } from "../components/Tabs";

const indoorImg = require("../../assets/img/indoor.jpg");

// type TabDetail {item: InfoItem; detail: InfoDetail;};
// const TabDetails Array<TabDetail> = [
//   {item: }
// ];
const IndoorHome = () => {
  const [selected, setSelected] = useState("a");
  // const BoulderingDetail =
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];
  // const CoachingDetail = <InfoDetail><h3>Coaching</h3></InfoDetail>;

  // const Details = [BoulderingDetail, CoachingDetail];
  return (
    <InfoTable>
      <Tabs defaultTab="Prices">
        <InfoItems>
          <Tabs.Tab label="Bouldering" color={colorArray[Math.floor(Math.random() * colorArray.length)]}><h1>Bouldering</h1></Tabs.Tab>
          <Tabs.Tab label="Courses" color={colorArray[Math.floor(Math.random() * colorArray.length)]}>Coaching</Tabs.Tab>
          <Tabs.Tab label="Prices" color={colorArray[Math.floor(Math.random() * colorArray.length)]}>Prices</Tabs.Tab>
          <Tabs.Tab label="Events" color={colorArray[Math.floor(Math.random() * colorArray.length)]}>Events</Tabs.Tab>
        </InfoItems>
        <Tabs.Panel label="Bouldering">
          <h3>
            <p>Ġebla is Malta's largest indoor bouldering facility.</p>
            <p>No experience is necessary, though if it's your first time we recommend you arrive at least 2 hours before we close so that you'll have enough time to go through a brief orientation with our staff and fully explore the facility.</p>
            <p>If you'd rather have more supervision for your first visit, sign up for one of our Taster or Introduction Courses.</p>
            <p>Stay after your climb for a cold Cisk at our cafe!</p>
          </h3>
        </Tabs.Panel>
        <Tabs.Panel label="Courses">
          <h3>
            <p>We offer many courses at our indoor facility, from supervised beginner "Taster" sessions to advanced training for elite athletes. Check out our Courses page for more info.</p>
          </h3>
        </Tabs.Panel>
        <Tabs.Panel label="Prices">
          <StyledTable>
            <tbody>
            <tr><th>Pass Duration</th><th>Regular (€)</th><th>Concession* (€)</th></tr>
            <tr><td>1 Day</td><td>15</td><td>13</td></tr>
            <tr><td>10 Day Bundle</td><td>120</td><td>100</td></tr>
            <tr><td>1 Month</td><td>80</td><td>60</td></tr>
            <tr><td>3 Month</td><td>220</td><td>170</td></tr>
            <tr><td>6 Month</td><td>400</td><td>340</td></tr>
            <tr><th>Item</th><th>Price (€)</th></tr>
            <tr><td>Shoe Rental</td><td>4</td></tr>
            <tr><td>Chalk Rental</td><td>2</td></tr>
            <tr><td> </td></tr>
            </tbody>
          </StyledTable>
          <h4>*Student, Retired, Unemployed, or MCC/MRCC member with proof</h4>
        </Tabs.Panel>
        <Tabs.Panel label="Events">
          <p><a>Check out our <a href="/calendar">events calendar</a> for public events.</a></p>
          <p>We also host private events! Great for birthday parties and corporate team-building. We offer two formats:</p>
          <ul>
            <li>Open Hours Event - €45 per participant, max 10
3-hour timeslot with staff to supervise and guide climbing, plus a few reserved tables in our cafe to snack, eat cake, debrief, and find the best photo for Instagram. Don't forget to tag us!!</li>
            <li>Private Event - € 50 per participant, min 20
4-hour timeslot with staff to supervise and guide climbing, plus we'll close down the gym for your event so only your team or party will be in the facility. </li>
          </ul>
        </Tabs.Panel>
      </Tabs>
    </InfoTable>
  );
};

export default IndoorHome;



//
// <InfoTable>
//   <InfoItems>
//     <InfoItem img={indoorImg}>
//       <h1>Bouldering</h1>
//     </InfoItem>
//     <InfoItem img={indoorImg}>
//       <h1>Courses &<br />Coaching</h1>
//     </InfoItem>
//     <InfoItem img={indoorImg}>
//       <h1>Prices</h1>
//     </InfoItem>
//     <InfoItem>
//       <h1>Events</h1>
//     </InfoItem>
//   </InfoItems>
//   <InfoDetail>
//     <h3>
//       <p>Ġebla is Malta's largest indoor bouldering facility.</p>
//       <p>No experience is necessary, though if it's your first time we recommend you arrive at least 2 hours before we close so that you'll have enough time to go through a brief orientation with our staff and fully explore the facility.</p>
//       <p>If you'd rather have more supervision for your first visit, sign up for one of our Taster or Introduction Courses.</p>
//       <p>Stay after your climb for a cold Cisk at our cafe!</p>
//     </h3>
//   </InfoDetail>
// </InfoTable>
