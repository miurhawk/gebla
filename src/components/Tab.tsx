import * as React from "react";
import { FunctionComponent, useContext } from "react";
import * as ReactDOM from "react-dom";
import { InfoItem } from "../styles";
import { TabsContext } from "./Tabs";
import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();

export interface ITabProps {
  label: string
  color: string
  darkenHover: boolean
  hideLabel: boolean
  img: string
}

export const Tab: FunctionComponent<ITabProps> = props => {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  let isActive = activeTab === props.label;
  function setTab(prop) {
    setActiveTab(prop);
    browserHistory.push("##"+prop);
  }
  return (
    <InfoItem img={props.img} style={props.style} isActive={isActive} darkenHover={props.darkenHover} color={props.color} onClick={() => setTab(props.label)}>
      <a>{props.hideLabel ? "" : props.label}</a>
      <div />
      <div />
    </InfoItem>
  )
}
