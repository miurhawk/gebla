import * as React from "react";
import { Link } from "react-router-dom";
import { FlexCol, FlexRow, FlexRowFill, InfoTable, InfoItem, InfoItems, InfoDetail, TextDetail } from "../styles";
import shoesImg from "../../assets/img/shoesrock.jpg";
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
    <FlexCol style={{textAlign: `center`}}>
      <h1>COMING SOON</h1>
      <a>we're still gearing up</a>
      <br />
      <a>check back here for more details</a>
      <br />
    </FlexCol>
  );
};
// <FlexRowFill img={shoesImg} style={{minHeight: `120vh`}} />

export default IndoorHome;
