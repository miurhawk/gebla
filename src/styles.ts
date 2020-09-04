import styled, { createGlobalStyle } from "styled-components";
import logo from "../assets/img/logo.png";
import "typeface-montserrat";
import liberatorHeavyURL from "../assets/fonts/Liberator-Heavy.ttf";
import liberatorMediumURL from "../assets/fonts/Liberator-Medium.ttf";
import liberatorLightURL from "../assets/fonts/Liberator-Light.ttf";


export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Liberator";
    src: url(${liberatorHeavyURL}) format("truetype");
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: "Liberator";
    src: url(${liberatorMediumURL}) format("truetype");
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: "Liberator";
    src: url(${liberatorLightURL}) format("truetype");
    font-weight: light;
    font-style: normal;
  }
`;


const Theme = {
  colors: {
    dark: `#1A1E1F`,
    light: `#EEEDF4`,
    a1: `#23E5BF`,
    a2: `#57D0FF`,
    a3: `#8888FF`,
    a4: `#FF8DEA`,

  },
  fonts: {
    body: `Montserrat, sans-serif`,
    heading: `Liberator, sans-serif`
  }
}

export const CenteredPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 100vh;
  height: 100%;
  background-color: ${Theme.colors.dark};
  h1 {color: ${Theme.colors.light}; font-family: ${Theme.fonts.heading}; font-size: 60pt;};
  h2 {color: ${Theme.colors.light}; font-family: ${Theme.fonts.heading}; font-size: 60pt;};
  h3 {color: ${Theme.colors.light}; font-family: ${Theme.fonts.heading}; font-size: 40pt;};
  h4 {color: ${Theme.colors.a4}; font-family: ${Theme.fonts.heading};};
  h5 {color: ${Theme.colors.dark}; font-family: ${Theme.fonts.heading};};
  h6 {color: ${Theme.colors.light}; font-family: ${Theme.fonts.body}; font-size: 24px; margin: 0;};
  h7 {color: ${Theme.colors.dark}; font-family: ${Theme.fonts.body}; font-size: 20px; margin: 0;};
  a {color: ${Theme.colors.light}; font-family: ${Theme.fonts.body}; font-size: 18px;};
  a:link {color: ${Theme.colors.a1}; text-decoration: none; padding: 0;};
  a:link:hover {color: ${Theme.colors.a3}; text-decoration: none;};
  a:link:active {color: ${Theme.colors.a4}; text-decoration: none;};
  a:link:visited {color: ${Theme.colors.a1}; text-decoration: none;};
  a:visited {color: ${Theme.colors.a1}; text-decoration: none;};
  a:visited:hover {color: ${Theme.colors.a3}; text-decoration: none;};
  a:visited:active {color: ${Theme.colors.a4}; text-decoration: none;};
  @media (max-width: 780px) {
    a {font-size: 24px;};
    h6 {font-size: 28px;};
    h7 {font-size: 26px;};
  }
`;

export const BrandA = styled.a`
  margin: 8px;
  top: 0;
  left: 45%;
  position: fixed;
  height: 70px;
  width: 200px;
  padding-right: 1rem;
  background-image: url(${logo});
  background-size: contain;
  justify-self: center;
  background-repeat: no-repeat;
  flex-grow: 1;
  -webkit-flex-grow: 1;
  href: ${props => props.href};
`;

export const BookButton = styled.button`
  background-color: ${Theme.colors.a1};
  height: 60px;
  margin: 150px 230px 150px 230px;
  width: 150px;
  align-self: center;
  a {
    padding: 0;
    margin: 0;
  }
  border: none;
  border-radius: 4px;
  :hover {
    h7 {
      font-weight: bold;
    };
    border: 2px solid ${Theme.colors.light};
  }
`;

export const Social = styled.a`
  min-height: 30px;
  min-width: 50px;
  background-image: url(${props => props.img});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  href: ${props => props.href};
`;
export const GroupRow = styled.div`
  min-height: 40px;
  min-width: 60px;
  justify-self: right;
  display: flex;
`;

export const PageTitle = styled.h2`
  padding-right: 2rem;
  padding-bottom: 0;
  padding-top: 0;
  height: 1rem;
`;

export const Headline = styled.h1`
  width: 100vw;
  padding-bottom: 1rem;
  padding-top: 1rem;
  margin: 0;
  text-align: center;
  flex-grow: 0;
`;

export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  height: 90px;
  width: 100vw;
  background: ${Theme.colors.dark};
  font-family: Montserrat;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex-wrap: nowrap;
  z-index: 1;
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  align-items: center;
  flex-grow: 0;
  -webkit-flex-grow: 0;
`;

export const Foot = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1rem;
  align-items: center;
  justify-content: space-around;
`;

export const Divider = styled.div`
  width: 100vw;
  align-self: center;
  height: 2px;
  border-radius: 10px;
  background-color: ${Theme.colors.a1};
  :hover {
    background-color: ${Theme.colors.a4};
  }
`;

export const FlexAColumnFill = styled.a`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-grow: 1;
  -webkit-flex-grow: 1;
  flex-wrap: wrap;
  min-width: 40vw;
  href: ${props => props.href};
  transition: min-width 0.5s ease 0s;
  -webkit-transition: min-width 0.5s ease 0s;
  -moz-transition: min-width 0.5s;
  -o-transition: min-width 0.5s;
  :hover {min-width: 55vw;};
`;

export const HalfImageText = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  minheight: 30vw;
  align-items: ${props => props.right ? `flex-start` : `flex-end`};
  flex-wrap: wrap;
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  text-align: ${props => props.right ? `left` : `right`};
  h2 {
    padding: ${props => props.right ? `2rem 0 0 2rem` : `2rem 2rem 0 0` };
    margin: 0;
  };
  h3 {
    padding: ${props => props.right ? `2rem 0 0 2rem` : `2rem 2rem 0 0` };
    margin: 0;
  };
  a {
    margin: 0;
  };
  @media (max-width: 780px) {
    width: 100vw;
  }

`;
export const FlexRowFill = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  -webkit-flex-grow: 1;
  align-items: ${props => props.right ? `flex-start` : `flex-end`};
  justify-content: top;
  flex-wrap: wrap;
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  h2 {
    padding: ${props => props.right ? `2rem 0 0 2rem` : `2rem 2rem 0 0` };
    margin: 0;
  };
  h3 {
    align-self: center;

  }
`;


export const FullPhoto = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  -webkit-flex-grow: 1;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  background-image: url(${props => props.img});
  background-size: cover;
  min-height: 20rem;
  text-align: left;
  h1 {
    margin: 0;
    padding: 0 0 0 3rem;
  }
  h1:nth-child(2) {
    padding: 0.5rem 0 0 3rem;
  }
  h2 {
    margin: 0;
    justify-self: left;
    padding: 2rem 0 0 3rem;
  }
  h2:nth-child(2) {
    padding: 0.5rem 0 0 3rem;
  }
`;


export const DetailRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-contents: space-evenly;
  padding-top: 1rem;
  padding-bottom: 1rem;
  flex-grow: 5;
  -webkit-flex-grow: 5;
  flex-wrap: wrap;
  href: ${props => props.href};
`;

export const DetailCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-contents: flex-start;
  padding-top: 1rem;
  padding-bottom: 1rem;
  flex-grow: 5;
  -webkit-flex-grow: 5;
  flex-wrap: wrap;
  href: ${props => props.href};
  a {
    padding: 1rem 20vw 1rem 20vw;
    text-align: center;
  };
`;

export const SmallDetailCol = styled.div`
  display: flex;
  max-width: 600px;
  flex-direction: column;
  align-items: stretch;
  justify-contents: flex-start;
  padding-top: 1rem;
  padding-bottom: 1rem;
  flex-grow: 1;
  -webkit-flex-grow: 5;
  flex-wrap: wrap;
  href: ${props => props.href};
  a {
    padding: 1rem 3rem 1rem 3rem;
    text-align: center;
  };
  @media (max-width: 780px) {
    max-width: 100vw;
  }
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 50vw;
  flex-wrap: wrap;
  font-family: ${Theme.fonts.body};
  color: ${Theme.colors.a4};
  href: ${props => props.href};
  a {
    text-align: ${props => props.right ? `left` : `right`};
    padding: 1rem 3rem 0 3rem;
  };
  h1 {
    text-align: ${props => props.right ? `left` : `right`};
    margin: 0;
    padding: ${props => props.right ? `2rem 3rem 0 0` : `2rem 0 0 3rem`};
  }
  h1:nth-child(2) {
    padding: 0.5rem 3rem 0 3rem;
  }
  h2 {
    text-align: ${props => props.right ? `left` : `right`};
    margin: 0;
    padding: ${props => props.right ? `2rem 3rem 0 0` : `2rem 0 0 3rem`};
  }
  h2:nth-child(2) {
    padding: 0.5rem 3rem 0 3rem;
  }
  @media (max-width: 780px) {
    width: 100vw;
  }
`;


export const StyledMenu = styled.nav<{ open: boolean }>`
  top: 0;
  right: 0;
  height: 26rem;
  flex-wrap: nowrap;
  position: fixed;
  display: flex;
  background-color: ${Theme.colors.light};
  z-index: 2;
  width: 18rem;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  transition: transform 0.5s ease-in-out;
  -webkit-transition: -webkit-transform 0.5s ease-in-out;
  -moz-transition: transform 0.5s ease-in-out;
  -o-transition: transform 0.5s ease-in-out;
  transform: ${({ open }) => open ? "translateX(0)" : "translateX(100%)"};
  -webkit-transform: ${({ open }) => open ? "translateX(0)" : "translateX(100%)"};
  a {
    :link {padding-left: 2rem;
      padding-top: 1rem;
      font-size: 16px;
      color: ${Theme.colors.dark};
      :hover {color: ${Theme.colors.a1};};
      transition: transform 0.5s;
      -webkit-transition: transform 0.5s;
      -moz-transition: transform 0.5s;
      -o-transition: transform 0.5s;
      :visited {color: ${Theme.colors.dark}};
    };
    :hover {transform: translate(25px, 0);};
    :visited {
      color: ${Theme.colors.dark};
      :hover {color: ${Theme.colors.a1};};
    };
  };
`;

export const MenuButton = styled.button<{ open: boolean, right: boolean }>`
  width: 40px;
  position: fixed;
  top: 10px;
  right: ${({ open }) => open ? `200px` : `20px` };
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 2rem;
  margin-left: 1rem;
  margin-top: 1rem;
  background-color: ${({ open }) => open ? Theme.colors.light : Theme.colors.dark };
  outline: none;
  border: none;
  z-index: 3;
  transition: right 0.5s ease-in-out 0.2s;
  div {
    position: ${({ open }) => open ? `fixed` : `relative` };
    top: ${({ open }) => open ? `50px`: `0` };
    width: 40px;
    height: 2px;
    border-radius: 10px;
    background-color: ${Theme.colors.a1};
    transition: transform 0.5s ease;
    z-index: 4;
    }
  :hover {
    div {
      background-color: ${Theme.colors.a4};
    }
  }
  div:nth-child(2) {
    transform: ${({ open }) => open ? `rotate(45deg)` : `` };
  };
  div:nth-child(1) {
    transform: ${({ open }) => open ? `rotate(-45deg)` : `` };
  }
  div:nth-child(3) {
    transform: ${({ open }) => open ? `rotate(-45deg)` : `` };
  }
`;

export const InfoItems = styled.div`
  flex-direction: row;
  display: flex;
  width: 100vw;
  flex-grow: 0;
  -webkit-flex-grow: 0;
  align-content: stretch;
  height: ${props => props.height};
  justify-content: center;
`;

export const GalleryDots = styled.div`
  flex-direction: column;
  display: flex;
  position: relative;
  right: 40px;
  z-index: 0;
  justify-content: space-evenly;
  padding-bottom: 1rem;
`;

export const InfoItem = styled.div`
  :hover {
    background-color: ${({props.isActive, props.darkenHover, props.color}) => isActive ? Theme.colors.light : darkenHover ? Theme.colors.dark : Theme.colors.a1};
    padding: 0 5vw 0 5vw;
    a {color: ${Theme.colors.dark};};
  };
  background-image: url(${({ props.isActive, props.img }) => isActive ? "" : img});
  align-items: center;
  background-size: cover;
  background-position: left;
  background-color: ${({ props.isActive }) => isActive ? Theme.colors.light : Theme.colors.dark};
  flex-grow: 1;
  -webkit-flex-grow: 1;
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
  transition: padding 1s;
  -webkit-transition: padding 1s;
  -moz-transition: padding 1s;
  -o-transition: padding 1s;
  padding: 0;
  margin: 0;
  a {
    font-weight: bold;
    font-size: 18pt;
    padding: 1rem;
    color: ${({ props.isActive }) => isActive ? Theme.colors.dark : Theme.colors.light};
  };
  h3 {
    padding: 0 3rem 0 3rem;
  }
`;


export const InfoDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-grow: 1;
  -webkit-flex-grow: 1;
  flex-direction: column;
  min-height: 30vh;
  padding: 0;
  text-align: center;
  padding-top: ${props => props.padding};
  background-image: url(${props => props.img});
  background-size: cover;
`;

export const GalleryDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-grow: 1;
  -webkit-flex-grow: 1;
  flex-direction: column;
  height: 30vw;
  text-align: center;
  background-image: url(${props => props.img});
  background-size: cover;
  z-index: 0;
`;

export const GalleryDot = styled.div`
  width: 15px;
  height: 15px;
  align-self: center;
  position: relative;
  border-radius: 15px;
  z-index: 0;
  background-color: ${(props) => props.isActive ? Theme.colors.dark : Theme.colors.light};
  :hover {
    background-color: ${(props) => props.color };
}
`;

export const LRGalleryButtons = styled.div`
  width: 20%;
  height: 100%;
  z-index: 1;
  left: 0;
  background-color: #999;
`;

export const StyledTable = styled.table`
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  align-self: center;
  th {color: ${Theme.colors.a1}; padding-top: 1rem; padding-right: 1rem; text-align: left; border-bottom: 2px dashed ${Theme.colors.a3};};
`;
