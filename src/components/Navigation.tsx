import * as React from "react";
import { FunctionComponent, useState } from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";
import { Navbar, BrandA, Ul, Li } from "../styles.ts";
import Hamburger from "./Hamburger";
import FullMenu from "./FullMenu";

const Navigation = () => {
  const brand = { name: "Ġebla", to: "/"};

  const [open, setOpen] = useState<boolean>(false);
  const close = () => setOpen(false);
  // console.log(open);
  return (
    <Navbar>
      <BrandA href="/" />
      <Ul>
        <Li key={"FirstTime"}><a href={"/first-time"}>First Time ?</a></Li>
        <Hamburger open={open} setOpen={setOpen} />
      </Ul>
      <FullMenu open={open} setOpen={setOpen} />
    </Navbar>
  )
};


export default Navigation;
