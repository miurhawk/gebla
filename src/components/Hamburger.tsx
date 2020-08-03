import * as React from "react";
import styled from "styled-components";
import { StyledHamburger } from "../styles.ts";

type Props = {
  open: boolean,
  setOpen: (v: boolean) => void,
};

const Hamburger = (props: Props) => (
  <StyledHamburger
    open={props.open}
    onClick={() => props.setOpen(!props.open)}
  >
    <div />
    <div />
    <div />
  </StyledHamburger>
);

export default Hamburger;
