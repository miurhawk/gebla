import styled, { createGlobalStyle } from "styled-components";
import logo from "../assets/img/logo.svg";
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
// todo: H3 is overriden
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
  h6 {color: ${Theme.colors.light}; font-family: ${Theme.fonts.body}; font-size: 20pt; margin: 0;};
  h7 {color: ${Theme.colors.dark}; font-family: ${Theme.fonts.body}; font-size: 14pt; margin: 0;};
  a {color: ${Theme.colors.light}; font-family: ${Theme.fonts.body}; font-size: 14pt;};
  a:link {color: ${Theme.colors.a1}; text-decoration: none; padding: 0;};
  a:link:hover {color: ${Theme.colors.a3}; text-decoration: none;};
  a:link:active {color: ${Theme.colors.a4}; text-decoration: none;};
  a:link:visited {color: ${Theme.colors.a1}; text-decoration: none;};
  a:visited {color: ${Theme.colors.a1}; text-decoration: none;};
  a:visited:hover {color: ${Theme.colors.a3}; text-decoration: none;};
  a:visited:active {color: ${Theme.colors.a4}; text-decoration: none;};
  @media only screen and (max-width: 1028px) {
    a {font-size: 12pt;};
    h1 {font-size: 40pt;};
    h2 {font-size: 40pt;};
    h3 {font-size: 40pt;};
    h4 {font-size: 24pt;};
    h5 {font-size: 24pt;};
    h6 {font-size: 19pt;};
    h7 {font-size: 14pt;};
  }
  @media only screen and (max-width: 600px) {
    a {font-size: 14pt;};
    h1 {font-size: 40pt;};
    h2 {font-size: 40pt;};
    h3 {font-size: 27pt;};
    h4 {font-size: 24pt;};
    h5 {font-size: 24pt;};
    h6 {font-size: 19pt;};
    h7 {font-size: 14pt;};
  }
`;

export const BrandA = styled.a`
  margin: auto;
  height: 70px;
  width: 200px;
  background-image: url(${logo});
  background-size: contain;
  align-self: center;
  justify-self: center;
  background-repeat: no-repeat;
  background-position: center;
  flex-grow: 1;
  -webkit-flex-grow: 1;
  href: ${props => props.href};
  @media only screen and (max-width: 600px) {
    margin: 8px;
    margin-left: 20px;
    background-position: left;
  }
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
  box-shadow: -4px 4px 0px ${Theme.colors.light};
  :hover {
    box-shadow: none;
    h7 {
      font-weight: bold;
    };
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
  z-index: 2;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
  transition: min-width 0.5s;
  -webkit-transition: min-width 0.5s;
  -moz-transition: min-width 0.5s;
  -o-transition: min-width 0.5s;
  :hover {min-width: 55vw;};
`;

export const FlexRowFill = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 450px;
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
    transition: font-size 0.5s;

  }
  :hover {
    h3 {
      font-size: 55pt;
    }
  }
  @media only screen and (max-width: 600px) {
    min-height: 30vh;
    :hover {
      h3 {
        font-size: 30pt;
      }
    }
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
  background-position: center;
  min-height: 20rem;
  width: 100%;
  text-align: left;
  h1 {
    margin: 0 60vw 0 0;
    padding: 0 0 0 3rem;
  }
  h1:nth-child(2) {
    padding: 0.5rem 0 0 3rem;
  }
  h2 {
    margin: 0 60vw 0 0;
    justify-self: left;
    padding: 2rem 0 0 3rem;
  }
  h2:nth-child(2) {
    padding: 0.5rem 0 0 3rem;
  }
  button {
    align-self: flex-start;
    margin: 0 0 0 3rem;
    width: 250px;
  }

`;


export const DetailRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-contents: space-evenly;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 100vw;
  flex-grow: 5;
  -webkit-flex-grow: 5;
  flex-wrap: nowrap;
  href: ${props => props.href};
  @media only screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

export const DetailCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-contents: flex-start;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 100vw;
  flex-grow: 5;
  -webkit-flex-grow: 5;
  flex-wrap: wrap;
  href: ${props => props.href};
  h3 {
    margin: 0;
    padding-bottom: 20px;
  }
  a {
    padding: 1rem 20vw 1rem 20vw;
    text-align: center;
  };
  @media only screen and (max-width: 600px) {
    a {
      padding: 10px;
    };
  }
`;

export const TC = styled.div`
  position: fixed;
  bottom: 0;
  height: ${props => props.show ? `10vh` : `0vh`};
  width: 100vw;
  overflow: auto;
  background: ${Theme.colors.light};
  font-family: Montserrat;
  display: ${props => props.show ? `flex` : `none`};
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  z-index: 2;
  a {
    font-size: 12pt;
    padding: 5px 10px 0 20px;
    color: ${Theme.colors.dark};
  }
  div {
    width: auto;
    flex-grow: 0;
    margin: 0 0 0 auto;
    padding: 0;
    justify-content: flex-end;
  }
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  button {
    font-weight: bold;
    box-shadow: -4px 4px 0px ${Theme.colors.dark};
    height: 40px;
    width: 75px;
    margin: 10px;
  }
  @media only screen and (max-width: 600px) {
    a {
      font-size: 11pt;
      padding: 0 0 0 5px;
    }
    button {
      margin: 5px;
    }
  }
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
  button {
    margin: 0;
    height: 30px;
    width: 100px;
  }
  @media only screen and (max-width: 600px) {
    max-width: 100vw;
    a {
      padding: 10px;
    }
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 600px;
  align-items: stretch;
  justify-content: space-evenly;
  align-self: center;
  h6 {
    color: ${Theme.colors.a1};
  };
  label {
    font-family: ${Theme.fonts.body};
    h6 {
      font-size: 18pt;
    }
  };
  select {
    background-color: ${Theme.colors.light};
    border: none;
  };
  input {
    background-color: ${Theme.colors.light};
    border: none;
    font-size: 14pt;
    font-family: ${Theme.fonts.body};
    min-height: 30px;
  };
  .input__submit {
    border: none;
    box-shadow: -4px 4px 0px ${Theme.colors.light};
    :hover {
      box-shadow: none;
      h7 {
        font-weight: bold;
      };
      font-weight: bold;
    }
  }
  select {
    background-color: ${Theme.colors.light};
    border: none;
    font-size: 14pt;
    font-family: ${Theme.fonts.body};
    min-height: 30px;
  };

  label {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    select {
      flex-grow: 1;
      margin-left: 10px;
    };
    input {
      flex-grow: 1;
      margin-left: 10px;
    };

  };
  @media only screen and (max-width: 600px) {
    max-width: 90vw;
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
    padding: 1rem 2rem 0 2rem;
  };
  h1 {
    text-align: ${props => props.right ? `left` : `right`};
    margin: 0;
    padding: ${props => props.right ? `2rem 0 0 2rem` : `2rem 2rem 0 0`};
  }
  h1:nth-child(2) {
    padding: 0.5rem 2rem 0 2rem;
  }
  h2 {
    text-align: ${props => props.right ? `left` : `right`};
    margin: 0;
    padding: ${props => props.right ? `2rem 0 0 2rem` : `2rem 2rem 0 0`};
  }
  h2:nth-child(2) {
    padding-top: 0.5rem 2rem 0 2rem;
  }
  button {
    align-self: ${props => props.right ? `flex-start` : `flex-end`};
    margin: 0 2rem 0 2rem;

  }
  @media only screen and (max-width: 600px) {
    width: 100vw;
    h2 {
      text-align: center;
      padding: 2rem 2rem 0 2rem;
    }
    h1 {
      text-align: center;
      padding: 2rem 2rem 0 2rem;
    }
    a {
      text-align: center;
    }
    button {
      align-self: center;
    }
  }

`;


export const HalfImageText = styled.div`
  display: flex;
  width: 48vw;
  margin: ${props => props.right ? `0 0 0 2vw` : `0 2vw 0 0`};
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
  @media only screen and (max-width: 600px) {
    width: 100vw;
    min-height: 400px;
    margin: 0;
    h2 {
      padding: 2rem 2rem 0 2rem;
    }
    h3 {
      padding: 2rem 2rem 0 2rem;
    }
    order: 1;
  }

`;

export const StyledGallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 50vw;
  flex-wrap: wrap;
  font-family: ${Theme.fonts.body};
  color: ${Theme.colors.a4};
  href: ${props => props.href};
  position: relative;

  button {
    z-index: 1;
    border: none;
    position: fixed;
    flex-direction: row;
    display: flex;
    align-items: center;
    -webkit-align-items: center;
    height: 100%;
    width: 150px;
    outline: none;
    background-color: transparent;
    position: absolute;
    top: 0%;
    padding: ${props => props.right ? `0 2vw 0 4vw` : `0 4vw 0 2vw`};
    div {
      width: 15px;
      height: 15px;
      border-radius: 15px;
      background-color: ${Theme.colors.a1};
    }
    :hover {
      div {
        background-color: ${Theme.colors.a4};
      }
    }
  }
  button:nth-child(1) {
    align-self: flex-start;
  };
  button:nth-child(2) {
    align-self: flex-end;
    justify-content: flex-end;
  };
  @media only screen and (max-width: 600px) {
    button {
      margin: 0 2vw 0 2vw;
      height: 400px;

    }
    width: 100vw;
    order: 1;
  };
`;


export const StyledMenu = styled.nav<{ open: boolean }>`
  top: 0;
  right: 0;
  height: 520px;
  flex-wrap: nowrap;
  position: fixed;
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4);
  background-color: ${Theme.colors.dark};
  z-index: 2;
  width: 300px;
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
      font-size: 18px;
      color: ${Theme.colors.light};
      :hover {color: ${Theme.colors.a1};};
      transition: transform 0.5s;
      -webkit-transition: transform 0.5s;
      -moz-transition: transform 0.5s;
      -o-transition: transform 0.5s;
      :visited {color: ${Theme.colors.light}};
    };
    :hover {transform: translate(25px, 0);};
    :visited {
      color: ${Theme.colors.light};
      :hover {color: ${Theme.colors.a1};};
    };
  };
  @media only screen and (max-width: 600px) {
    width: 100vw;
    height: 100vh;
    a {
      :link {
        font-size: 18pt;
        padding: 10px 0 0 0;
      };
    }
    align-items: center;

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
  background-color: transparent;
  outline: none;
  border: none;
  z-index: 3;
  transition: right 0.5s ease-in-out;
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
  @media only screen and (max-width: 600px) {
    right: ${({ open }) => open ? `80vw` : `5px` };
  };
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
    background-color: ${({props}) => props.isActive ? Theme.colors.light : props.darkenHover ? Theme.colors.dark : Theme.colors.a1};
    padding: 0 5vw 0 5vw;
    a {color: ${Theme.colors.dark};};
  };
  opacity: ${({ props }) => props.img ? props.isActive ? 0.5 : 1 : 1};
  background-image: url(${({ props }) => props.img});
  align-items: center;
  background-size: cover;
  background-position: left;
  background-color: ${({ props }) => props.color ? props.color : props.isActive ? Theme.colors.light : Theme.colors.dark};
  flex-grow: 1;
  -webkit-flex-grow: 1;
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
  transition: padding 1s;
  -webkit-transition: padding 1s;
  -moz-transition: padding 1s;
  -o-transition: padding 1s;
  padding-top: 8px;
  padding-bottom: 8px;

  margin: 0;
  a {
    font-weight: bold;
    font-size: 18pt;
    padding: 15px 5px 15px 5px;
    color: ${({ props.isActive }) => isActive ? Theme.colors.dark : Theme.colors.light};
  };
  h3 {
    padding: 0 10px 0 10px;
  }
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
    transform: rotate(45deg);
  }
  div:nth-child(1) {
    transform: rotate(-45deg);
  }
  div:nth-child(3) {
    transform: rotate(-45deg);

  };
  @media only screen and (max-width: 600px) {
    a {
      font-size: 10pt;
    }
  };
`;


export const InfoDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-grow: 1;
  -webkit-flex-grow: 1;
  flex-direction: column;
  min-height: 500px;
  padding: 0;
  text-align: center;
  padding-top: ${props => props.padding};
  background-image: url(${props => props.img});
  background-size: cover;
  margin: ${props => props.right ? `0 0 0 2vw` : `0 2vw 0 0`};
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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
  align-self: center;
  th {color: ${Theme.colors.a1}; font-family: ${Theme.fonts.body}; padding-top: 1rem; padding-right: 1rem; min-width: 10vw; text-align: left; border-bottom: 2px dashed ${Theme.colors.a3};};
  tr {color: ${Theme.colors.a3}; font-family: ${Theme.fonts.body}; padding-top: 1rem; padding-right: 1rem; min-width: 10vw; text-align: left;};
  @media only screen and (max-width: 600px) {
    th {
      font-size: 7pt;
      
    }
    tr {
      font-size: 7pt;
    }
  };
  
`;
