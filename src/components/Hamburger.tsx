import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";
import { MenuButton } from "../styles.ts";

type Props = {
  open: boolean,
  setOpen: (v: boolean) => void,
};

const Hamburger = (props: Props) => (
  <div>
    <MenuButton open={props.open} onClick={() => props.setOpen(!props.open)} />
  </div>
);

export default Hamburger;
