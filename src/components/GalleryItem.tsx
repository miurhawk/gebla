import * as React from "react";
import { FunctionComponent, useContext } from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";
import { GalleryContext } from "./Gallery";
import { InfoTable, GalleryDetail, InfoItem, InfoItems, InfoDetail, LRGalleryButtons, TextDetail } from "../styles";
const indoorImg = require("../../assets/img/indoor.jpg");

interface IGalleryItemProps {
  label: number
}

export const GalleryItem: FunctionComponent<IGalleryItemProps> = props => {
  const { activeTab, setActiveTab } = useContext(GalleryContext)
  return activeTab === props.label ? <GalleryDetail>{props.children}</GalleryDetail> : null
}


// <LRGalleryButtons onClick={setActiveTab(activeTab+1)} />
