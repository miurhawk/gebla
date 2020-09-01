import * as React from "react";
import { Link } from "react-router-dom";
import { DetailCol, Headline, FlexCol, FlexRow, FlexRowFill, InfoTable, InfoItem, InfoItems, InfoDetail, TextDetail } from "../styles";
// import { FunctionComponent, useState } from "react";
// import { Tabs } from "../components/Tabs";
// import Bouldering from "./Bouldering.tsx";
// import CoursesDetail from "./Courses.tsx";
// import PricesDetail from "./Prices.tsx";
// import EventsDetail from "./Events.tsx";
//


//
// const IndoorHome = (props: { setTitle: (v: string) => void, }) => {
//   // const BoulderingDetail =
//   let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];
//   // const CoachingDetail = <InfoDetail><h3>Coaching</h3></InfoDetail>;
//   props.setTitle("Indoor");
//   // const Details = [BoulderingDetail, CoachingDetail];
//   return (
//     <InfoTable>
//       <Tabs defaultTab="Bouldering">
//         <InfoItems>
//           <Tabs.Tab label="Bouldering" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Tabs.Tab>
//           <Tabs.Tab label="Courses" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Tabs.Tab>
//           <Tabs.Tab label="Prices" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Tabs.Tab>
//           <Tabs.Tab label="Events" color={colorArray[Math.floor(Math.random() * colorArray.length)]}></Tabs.Tab>
//         </InfoItems>
//           <Tabs.Panel label="Bouldering">
//             <Bouldering />
//           </Tabs.Panel>
//           <Tabs.Panel label="Courses">
//             <CoursesDetail />
//           </Tabs.Panel>
//           <Tabs.Panel label="Prices">
//             <PricesDetail />
//           </Tabs.Panel>
//           <Tabs.Panel label="Events">
//             <EventsDetail />
//           </Tabs.Panel>
//       </Tabs>
//     </InfoTable>
//   );
// };


const IndoorHome = (props: { setTitle: (v: string) => void, }) => {
  // const BoulderingDetail =
  let colorArray: Array<string> = ["#23E5BF","#57D0FF","#8888FF","#FF8DEA"];
  // const CoachingDetail = <InfoDetail><h3>Coaching</h3></InfoDetail>;
  props.setTitle("Indoor");
  // const Details = [BoulderingDetail, CoachingDetail];
  return (
    <DetailCol>
    <Headline>COMING SOON</Headline>

      <a><p>we're still gearing up</p>
      <p>check back here for more details</p></a>
    </DetailCol>
  );
};
// <FlexRowFill img={shoesImg} style={{minHeight: `120vh`}} />

export default IndoorHome;
