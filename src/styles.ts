import styled, { createGlobalStyle } from "styled-components";
import indoorImg from "../assets/img/indoor.jpg";
import outdoorImg from "../assets/img/outdoor.jpg";
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
    /*
    font-family: 'Liberator';
    src: url(${liberatorHeavyURL});
    font-weight: 700;
    font-style: normal;
  }
`; */

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
  h1 {color: ${Theme.colors.light}; font-family: ${Theme.fonts.heading}; font-size: 40pt;};
  h2 {color: ${Theme.colors.light}; font-family: ${Theme.fonts.heading}; font-size: 30pt;};
  h3 {color: ${Theme.colors.dark}; font-family: ${Theme.fonts.heading}; font-size: 20pt;};
  h4 {color: ${Theme.colors.a4}; font-family: ${Theme.fonts.heading};};
  h5 {color: ${Theme.colors.dark}; font-family: ${Theme.fonts.heading};};
  h6 {color: ${Theme.colors.light}; font-family: ${Theme.fonts.heading};};
  a {color: ${Theme.colors.light}; font-family: ${Theme.fonts.body}; font-size: 16pt; padding-left: 1rem; padding-right: 1rem;};
  a:link {color: ${Theme.colors.a1}; text-decoration: none; padding: 0;};
  a:link:hover {color: ${Theme.colors.a3}; text-decoration: none;};
  a:link:active {color: ${Theme.colors.a4}; text-decoration: none;};
  a:link:visited {color: ${Theme.colors.a1}; text-decoration: none;};
  a:visited {color: ${Theme.colors.a1}; text-decoration: none;};
  a:visited:hover {color: ${Theme.colors.a3}; text-decoration: none;};
  a:visited:active {color: ${Theme.colors.a4}; text-decoration: none;};
`;

export const FlexColumnSpaceBetween = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${Theme.colors.light};
  font-family: ${Theme.fonts.body};
  a {color: ${Theme.colors.a1};};
`;

export const FlexColumnSpaceBetweenForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${Theme.colors.light};
  font-family: ${Theme.fonts.body};
`;


export const BrandA = styled.a`
  margin: 8px;
  padding-right: 1rem;
  background-image: url(${logo});
  background-size: contain;
  justify-self: left;
  background-repeat: no-repeat;
  flex-grow: 1;
  href: ${props => props.href};
`;

export const PageTitle = styled.h2`
  padding-right: 2rem;
  padding-bottom: 0;
  padding-top: 0;
  height: 1rem;
`;

export const Navbar = styled.nav`
  background: ${Theme.colors.dark};
  font-family: Montserrat;
  min-height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex-wrap: nowrap;
  h3 {margin: 0; flex-grow: 1; text-align: left; align-self: center;};
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  align-items: center;
  flex-grow: 0;
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
  width: 80vw;
  align-self: center;
  height: 2px;
  border-radius: 10px;
  background-color: ${Theme.colors.a1};
  :hover {
    background-color: ${Theme.colors.a4};
  }
`;

export const FlexRowSpaceBetween = styled.div`
  display: flex;
  padding-left: 1rem;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  background-image: url(${props => props.img});
  background-size: cover;
`;


export const FlexAColumnFill = styled.a`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-grow: 2;
  flex-wrap: wrap;
  min-width: 40vw;
  href: ${props => props.href};
  transition: flex-grow 0.5s;
  :hover {flex-grow: 3;};
`;


export const FlexRowFill = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
`;


export const FullPhoto = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-image: url(${props => props.img});
  background-size: cover;
  min-height: 10rem;
  :hover {min-height: 20rem;};
  transition: min-height 0.5s;
  text-align: center;
`;


export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-contents: stretch;
  justify-contents: stretch;
  flex-grow: 5;
  flex-wrap: wrap;
  href: ${props => props.href};
`;


export const DetailRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding-top: 1rem;
  padding-bottom: 1rem;
  flex-grow: 5;
  flex-wrap: wrap;
  href: ${props => props.href};
`;

export const FlexColSmaller = styled.div`
  display: flex;
  flex-grow: 1;
  max-width: 50vw;
  flex-direction: column;
  padding: 0;
  margin: 0;
  align-items: stretch;
  href: ${props => props.href};

`;
export const FlexCol = styled.div`
  display: flex;
  flex-shrink: 1;
  flex-direction: column;
  align-items: stretch;
  flex-shrink
  flex-wrap: wrap;
  font-family: ${Theme.fonts.body};
  color: ${Theme.colors.a4};
  href: ${props => props.href};
`;


export const StyledMenu = styled.nav<{ open: boolean }>`
  top: 0;
  right: 0;
  height: 100vh;
  flex-wrap: nowrap;
  position: fixed;
  display: flex;
  background-color: ${Theme.colors.light};
  z-index: 2;
  width: 30vw;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  transition: transform 0.5s ease-in-out;
  transform: ${({ open }) => open ? "translateX(0)" : "translateX(100%)"};
  a {
    :link {padding-left: 3rem;
      padding-top: 1rem;
      font-size: 2rem;
      color: ${Theme.colors.dark};
      font-family: ${Theme.fonts.heading};
      :hover {color: ${Theme.colors.a1};};
      transition: transform 0.5s;
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
  background-size: contain;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 2rem;
  margin-left: 1rem;
  margin-top: 1rem;
  background-color: ${({ open }) => open ? Theme.colors.light : Theme.colors.dark };
  border: none;
  background-position: center;
  z-index: 2;
  div {
    position: relative;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background-color: ${Theme.colors.a1};
    }
  div:hover {
    background-color: ${Theme.colors.a4};
  }
`;

//indoor home types
export const InfoTable = styled.div`
  flex-direction: column;
  display: flex;
  flex-grow: 1;
`;

export const InfoItems = styled.div`
  flex-direction: row;
  display: flex;
  flex-grow: 0;
  align-content: stretch;
  height: ${props => props.height};
  justify-content: center;
`;

export const InfoItemsSmall = styled.div`
  flex-direction: row;
  display: flex;
  align-content: stretch;
  height: ${props => props.height};
  justify-content: space-evenly;
  padding-bottom: 1rem;
`;

export const GalleryDots = styled.div`
  flex-direction: row;
  display: flex;
  position: relative;
  bottom: 30px;
  z-index: 1;
  justify-content: space-evenly;
  padding-bottom: 1rem;
`;

export const InfoItem = styled.div`
  :hover {
    background-color: ${({props.isActive, props.darkenHover, props.color}) => isActive ? Theme.colors.light : darkenHover ? Theme.colors.dark : color};
    flex-grow: 2;
  };
  background-image: url(${({ props.isActive, props.img }) => isActive ? "" : img});
  align-items: center;
  background-size: cover;
  background-color: ${({ props.isActive, props.color }) => isActive ? Theme.colors.light : color};
  flex-grow: 1;
  flex-wrap: no-wrap;
  justify-content: center;
  display: flex;
  transition: flex-grow 1s;
  padding: 0;
  margin: 0;
  h3 {
    padding: 1rem; color: ${({ props.isActive }) => isActive ? Theme.colors.dark : Theme.colors.light};
    background: ${({ props.isActive, props.color, props.img }) => isActive ? Theme.colors.light :  img ? "" : Theme.colors.dark};
  };
  h3:hover {color: ${Theme.colors.dark}; background: ${({ props.isActive, props.color }) => isActive ? color : Theme.colors.light};};
`;

export const InfoDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-grow: 1;
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
  flex-direction: column;
  min-height: 60vh;
  text-align: center;
  background-image: url(${props => props.img});
  background-size: cover;
`;

export const GalleryDot = styled.div`
  width: 15px;
  height: 15px;
  align-self: center;
  border-radius: 15px;
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

export const TextDetail = styled.div`
  padding = 10px;
`;

// calendar types
export const StyledCalendar = styled.div`
  display: flex;
  flex-direction: column;
  rows: 3;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: ${Theme.colors.dark};
  flex-grow: 1;
  align-items: stretch;
  h1 {padding-left: 2rem;};
`;

export const StyledWeek = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  columns: 7;
  justify-content: flex-start;
`;

export const StyledDay = styled.div`
  display: flex;
  border-color: ${Theme.colors.a1};
  border-style: dotted dashed dotted dashed;
  width: 14%;
  flex-direction: column;
  a {padding: 5px; font-weight: bold;};
  a:link {color: ${Theme.colors.a2}; font-weight: normal;};
  a:active {color: ${Theme.colors.a4}; text-decoration: none;};

`;

export const StyledTable = styled.table`
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  align-self: center;
  th {color: ${Theme.colors.a1}; padding-top: 1rem; padding-right: 1rem; text-align: left; border-bottom: 2px dashed ${Theme.colors.a3};};
`;
