import * as React from "react"
import styled from "styled-components";
import { Navbar, BrandA, Ul, Li } from "../styles.ts";
import { FullMenu } from "./FullMenu";

const Navigation = () => {
  const brand = { name: "Ġebla", to: "/"};
  const links = [
    { name: "Indoor", to: "/indoor-home"},
    { name: "Outdoor", to: "/outdoor-home"},
    { name: "First Time ?", to: "/first-time"}
  ];

  return (
    <Navbar>
      <BrandA href="/" />
      <Ul>
        <Li key={links[0].name}><a href={links[0].to}>{links[0].name}</a></Li>
        <Li key={links[1].name}><a href={links[1].to}>{links[1].name}</a></Li>
        <Li key={links[2].name}><a href={links[2].to}>{links[2].name}</a></Li>
      </Ul>
    </Navbar>
  )
};



export default Navigation;
