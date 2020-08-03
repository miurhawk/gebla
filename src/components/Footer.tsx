import * as React from "react"
import styled from "styled-components";
import { Foot, FlexRowSpaceBetween, Brand, Ul, Li } from "../styles.ts";

const Footer = () => {

  return (
    <Foot>
      <FlexRowSpaceBetween>
        <h1>Contact</h1>
        <a href="mailto:info@gebla.mt">info@gebla.mt</a>
        <a>+356 7772 6645</a>
      </FlexRowSpaceBetween>
      <FlexRowSpaceBetween>
        <h1>Hours</h1>
        <a>Mo - Sa : 800 - 2200</a>
        <a>Su : 900 - 1800</a>
      </FlexRowSpaceBetween>
    </Foot>
  )
};



export default Footer;
