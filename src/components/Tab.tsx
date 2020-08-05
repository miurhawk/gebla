import * as React from "react";
import { FunctionComponent, useContext } from "react";
import * as ReactDOM from "react-dom";
import { InfoTable, InfoItem, InfoItems, InfoDetail, TextDetail } from "../styles";
import { TabsContext } from "./Tabs";
// const indoorImg = require("../../assets/img/indoor.jpg");
 // img={indoorImg}

export interface ITabProps {
  label: string
  color: string
}

export const Tab: FunctionComponent<ITabProps> = props => {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  let isActive = activeTab === props.label;
  return (
    <InfoItem isActive={isActive} color={props.color} onClick={() => setActiveTab(props.label)}>
      <h1>{props.label}</h1>
    </InfoItem>
  )
}
