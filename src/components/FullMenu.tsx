import * as React from "react";
import { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { Navbar, BrandA, Ul, Li, StyledMenu, StyledLink } from "../styles.ts";

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
      <StyledLink href="/indoor-home" onClick={() => close()}><h2>Indoor</h2></StyledLink>

      <StyledLink href="/outdoor-home" onClick={() => close()}><h2>Outdoor</h2></StyledLink>
      <StyledLink onClick={() => close()}>Link 3</StyledLink>
    </StyledMenu>
   );
};

export default FullMenu;
