import * as React from "react";
import { FunctionComponent, useState } from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";
import { Navbar, BrandA, Ul, PageTitle } from "../styles.ts";
import Hamburger from "./Hamburger";
import FullMenu from "./FullMenu";



type NavProps = {
  title: string,
  setTitle: (v: string) => void,
};


const Navigation = (props: NavProps) => {

  const [open, setOpen] = useState<boolean>(false);
  const close = () => setOpen(false);
  // console.log(open);
  return (
    <Navbar>
      <BrandA href="/" />
        <PageTitle>{props.title}</PageTitle>
        <Hamburger open={open} setOpen={setOpen} />
      <FullMenu open={open} setOpen={setOpen} />
    </Navbar>
  )
};


export default Navigation;
//
// <Ul>
//   <a href={"/first-time"}>First Time ?</a>
//   </Ul>
