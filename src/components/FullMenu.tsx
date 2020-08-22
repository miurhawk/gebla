import * as React from "react";
import { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { Navbar, BrandA, Ul, StyledMenu, MenuButton, StyledLink } from "../styles.ts";

type MenuProps = {
  open: boolean,
  setOpen: (v: boolean) => void,
};

const FullMenu = (props: MenuProps) => {
  const links = [
    { name: "Indoor", to: "/indoor-home"},
    { name: "Outdoor", to: "/outdoor-home"},
    { name: "First Time ?", to: "/first-time"}
  ];
  const close = () => props.setOpen(false);
  return (
    <StyledMenu open={props.open}>
      <MenuButton onClick={close} open={props.open}><div style={{transform: `rotate(45deg)`, zIndex: `1`, position: `absolute`, top: `5vh`}} /><div  style={{transform: `rotate(-45deg)`, zIndex: `2`, position: `absolute`, top: `5vh`}}/></MenuButton>
      <br />
      <br />
      <a href="/first-time" onClick={() => close()}>First Time</a>
      <a href="/indoor-home" onClick={() => close()}>Indoor</a>
      <a href="/outdoor-home" onClick={() => close()}>Outdoor</a>
      <a href="/courses" onClick={() => close()}>Courses & Coaching</a>
      <a href="/courses?dummy=y##Kids'%20Programs" onClick={() => close()}>Kids</a>
      <a href="/outdoor-home?dummy=y##Guiding" onClick={() => close()}>Guiding</a>
      <a href="/first-time?dummy=y##Corporate%20Teambuilding" onClick={() => close()}>Corporate</a>
      <a href="/blog" onClick={() => close()}>Blog</a>
      <a href="/about" onClick={() => close()}>About</a>


    </StyledMenu>
   );
};

export default FullMenu;
