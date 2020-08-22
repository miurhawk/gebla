import * as React from "react";
import { FunctionComponent, useContext } from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";
import { TabsContext } from "./Tabs";
import { InfoTable, InfoItem, InfoItems, InfoDetail, TextDetail } from "../styles";

interface IPanelProps {
  label: string
}

export const Panel: FunctionComponent<IPanelProps> = props => {
  const { activeTab } = useContext(TabsContext)
  return activeTab === props.label ? <InfoDetail>{props.children}</InfoDetail> : null
}
