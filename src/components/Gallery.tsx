import * as React from "react";
import { FunctionComponent, useState, createContext } from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";
import { GalleryItem, IGalleryItemProps } from "./GalleryItem";
import { InfoTable, InfoItem, InfoItems, InfoDetail, TextDetail } from "../styles";
import { GalleryID, IGalleryIDProps } from "./GalleryID";


interface IGalleryComposition {
  GalleryID: FunctionComponent<IGalleryIDProps>;
  GalleryItem: FunctionComponent<IGalleryItemProps>;
}

interface IGalleryContext {
  activeTab: number
  setActiveTab: (label: number) => void
}

export const GalleryContext = createContext<IGalleryContext | undefined>(
  undefined
)

const Gallery: FunctionComponent  & IGalleryComposition = props => {
  const [activeTab, setActiveTab] = useState(props.defaultTab)
  return (
    <GalleryContext.Provider value={{ activeTab, setActiveTab}}>
        {props.children}
    </GalleryContext.Provider>
  )
}

Gallery.GalleryID = GalleryID;
Gallery.GalleryItem = GalleryItem;
export { Gallery };
