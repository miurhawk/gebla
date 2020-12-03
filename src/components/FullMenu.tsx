import * as React from "react";
import { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { Navbar, BrandA, Ul, StyledMenu, MenuButton, StyledLink } from "../styles.ts";

type MenuProps = {
  open: boolean,
  setOpen: (v: boolean) => void,
};

const FullMenu = (props: MenuProps) => {

  // <MenuButton onClick={close} open={props.open}><div style={{transform: `rotate(45deg)`, zIndex: `1`, position: `absolute`, top: `5vh`}} /><div  style={{transform: `rotate(-45deg)`, zIndex: `2`, position: `absolute`, top: `5vh`}}/></MenuButton>

  const close = () => props.setOpen(false);
  return (
    <StyledMenu open={props.open}>
      <br />
      <br />
      <br />
      <br />

      <a href="/first-time" onClick={() => close()}>First Time</a>
      <a href="/climb-exp" onClick={() => close()}>Climb Experience</a>
      <a href="/outdoor-home" onClick={() => close()}>Outdoor</a>
      <a href="/courses" onClick={() => close()}>Courses & Coaching</a>
      <a href="/outdoor-home#guiding" onClick={() => close()}>Guiding</a>
      <a href="/teambuilding" onClick={() => close()}>Team Building</a>
      <a href="/courses?dummy=y##Kids'%20Programs" onClick={() => close()}>Kids</a>
      <a href="/indoor-home" onClick={() => close()}>Indoor</a>
      <a href="/blog" onClick={() => close()}>Blog</a>
      <a href="/about" onClick={() => close()}>About</a>
      <a href="/privacy" onClick={() => close()}>Privacy Policy</a>


    </StyledMenu>
   );
};

export default FullMenu;
