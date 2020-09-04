import * as React from "react";
import { FunctionComponent, useContext } from "react";
import * as ReactDOM from "react-dom";
import { GalleryDot } from "../styles";
import { GalleryContext } from "./Gallery";

export interface IGalleryIDProps {
  label: number
  color: string
  darkenHover: boolean
  hideLabel: boolean
  img: string
}

export const GalleryID: FunctionComponent<IGalleryIDProps> = props => {
  const { activeTab, setActiveTab } = useContext(GalleryContext);
  let isActive = activeTab === props.label;
  return (
    <GalleryDot isActive={isActive} darkenHover={props.darkenHover} color={props.color} onClick={() => setActiveTab(props.label)} />
  )
}
