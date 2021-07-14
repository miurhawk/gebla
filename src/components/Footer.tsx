import * as React from "react"
import styled from "styled-components";
import { Foot, Social, GroupRow } from "../styles.ts";
import ig from "../../assets/img/ig.png";
import fb from "../../assets/img/fb.png";

const Footer = () => {

  return (
    <Foot>
        <a href="mailto:info@gebla.mt">info@gebla.mt</a>
        <a href="tel:+35677779687">+356 7777 9687</a>
        <a href="https://www.google.com/maps/@35.8880084,14.4687859,20.34z">Triq In-Negozju, Mriehel, Malta</a>
        <GroupRow>
          <Social img={ig} href="https://www.instagram.com/gebla.climb/" />
          <Social img={fb} href="https://www.facebook.com/gebla.climbing" />
        </GroupRow>

    </Foot>
  )
};



export default Footer;
