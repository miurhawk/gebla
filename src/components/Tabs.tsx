import * as React from "react";
import { FunctionComponent, useState, createContext } from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";
import { Panel, IPanelProps } from "./Panel";
import { InfoTable, InfoItem, InfoItems, InfoDetail, TextDetail } from "../styles";
import { Tab, ITabProps } from "./Tab";


interface ITabsComposition {
  Tab: FunctionComponent<ITabProps>;
  Panel: FunctionComponent<IPanelProps>;
}

interface ITabsContext {
  activeTab: string
  setActiveTab: (label: string) => void
}

export const TabsContext = createContext<ITabsContext | undefined>(
  undefined
)

const Tabs: FunctionComponent  & ITabsComposition = props => {
  const [activeTab, setActiveTab] = useState(props.defaultTab)
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab}}>
        {props.children}
    </TabsContext.Provider>
  )
}

Tabs.Tab = Tab;
Tabs.Panel = Panel;
export { Tabs };
