import * as React from "react"
import styled from "styled-components";
import { Foot, Social, GroupRow } from "../styles.ts";
import ig from "../../assets/img/ig.png";
import fb from "../../assets/img/fb.png";

const Footer = () => {

  return (
    <Foot>
        <a href="mailto:info@gebla.mt">info@gebla.mt</a>
        <a href="tel:+35677726645">+356 7772 6645</a>
        <a href="https://www.google.com/maps/place/9+G.Mamo,+L-Imsida/@35.8931622,14.4855895,17z/data=!3m1!4b1!4m5!3m4!1s0x130e5ab3db842ecb:0xccec56d7ea9cbdfe!8m2!3d35.893157!4d14.487783">9 G.Mamo, Msida, Malta</a>
        <GroupRow>
          <Social img={ig} href="https://www.instagram.com/gebla.climb/" />
          <Social img={fb} href="https://www.facebook.com/gebla.climbing" />
        </GroupRow>

    </Foot>
  )
};



export default Footer;
