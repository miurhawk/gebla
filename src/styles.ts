import styled from "styled-components";
import indoorImg from "../assets/img/indoor.jpg";
import outdoorImg from "../assets/img/outdoor.jpg";
import logo from "../assets/img/logo.png";


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
    heading: `Montserrat, sans-serif`
  }
}

export const CenteredPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100vh;
  background-color: ${Theme.colors.light};
  font-family: ${Theme.fonts.body};
  a {color: ${Theme.colors.a4};};
  h1 {color: ${Theme.colors.a1};};
  h2 {color: ${Theme.colors.a2};};
  h3 {color: ${Theme.colors.a3};};
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

export const HomeTable = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  align-items: stretch;
  justify-content: space-evenly;
  background-color: ${Theme.colors.light};
  font-family: ${Theme.fonts.body};
  a {color: ${Theme.colors.a4};};
  h1 {color: ${Theme.colors.a1};};
  h2 {color: ${Theme.colors.a2};};
  h3 {color: ${Theme.colors.a3};};
`;

export const BrandA = styled.a`
  margin: 8px;
  padding-right: 1rem;
  background-image: url(${logo});
  background-size: contain;
  background-color: transparent;
  background-repeat: no-repeat;
  flex-grow: 1;
  href: ${props => props.href};
`;

export const Navbar = styled.nav`
  background: ${Theme.colors.dark};
  font-family: Montserrat;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

export const Li = styled.li`
  flex: 0 0 auto;
  align-items: center;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  display: flex;
  font-size: 18px;
  height: 50px;
  justify-content: center;
  line-height: 16px;
  margin: 0 10px ;
  text-decoration: none;
  white-space: nowrap;
  a:link {color: ${Theme.colors.a2}; text-decoration: none;};
  a:hover {color: ${Theme.colors.a3}; text-decoration: none;};
  a:active {color: ${Theme.colors.a4}; text-decoration: none;};
  h1 {background: ${Theme.colors.light};};
  h1:hover {color: ${Theme.colors.a3}; text-decoration: none;};
  h1:active {color: ${Theme.colors.a4}; text-decoration: none;};

`;

export const Foot = styled.div`
  background-color: ${Theme.colors.dark};
  columns: 2;
  padding-bottom: 2rem;
  padding-left: 1rem;
  margin-top: auto;
`;

export const FlexRowSpaceBetween = styled.div`
  display: flex;
  padding-left: 1rem;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  font-family: ${Theme.fonts.body};
  a {color: ${Theme.colors.a4};};
  h1 {color: ${Theme.colors.a1};};
  h2 {color: ${Theme.colors.a2};};
  h3 {color: ${Theme.colors.a3};};
  background-image: url(${props => props.img});
  background-size: cover;
`;


export const FlexARowFill = styled.a`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-grow: 1;
  flex-wrap: wrap;
  font-family: ${Theme.fonts.body};
  color: ${Theme.colors.a4};
  href: ${props => props.href};
`;

export const FlexRowFill = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-wrap: wrap;
  font-family: ${Theme.fonts.body};
  a {color: ${Theme.colors.a4};};
  h1 {color: ${Theme.colors.a1}; background: ${Theme.colors.light};};
  h2 {color: ${Theme.colors.a2};};
  h3 {color: ${Theme.colors.a3};};
  background-image: url(${props => props.img});
  background-size: cover;
`;


export const StyledMenu = styled.nav<{ open: boolean }>`
  top: 0;
  right: 0;
  height: 100vh;
  width: 35vw;
  position: fixed;
  background-color: ${Theme.colors.light};
  z-index: 1;
  padding: 10rem 0;
  flex-direction: column;
  display: ${({ open }) => (open ? "flex" : "none")};
`;

export const StyledLink = styled.a`
  padding: 0 2rem;
  font-size: 2rem;
  color: ${Theme.colors.a1};
  text-decoration: none;

  :hover {
    color: ${Theme.colors.a2};
    cursor: pointer;
  }
`;

export const StyledHamburger = styled.button<{ open: boolean }>`
  position: fixed;
  left: 3vw;
  top: 3vw;
  width: 2rem;
  height: 2rem;
  padding: 0;
  background: transparent;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: none;
  cursor: pointer;
  outline: none;
  z-index: 1;
  div {
    position: relative;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background-color: ${({ open }) =>
      open ? Theme.colors.light : Theme.colors.dark};
  }
`;

export const InfoTable = styled.div`
  flex-direction: column;
  rows: 2;
  display: flex;
  flex-grow: 1;
`;

export const InfoItems = styled.div`
  flex-direction: row;
  display: flex;
  align-content: stretch;
  columns: 4;
  flex-grow: 1;
  flex: 1 0 auto;
  justify-content: space-evenly;
`;

export const InfoItem = styled.div`
  background-image: url(${props => props.img});
  align-items: stretch;
  background-size: cover;
  flex-grow: 1;
  flex-wrap: no-wrap;
  justify-content: center;
  display: flex;
  padding: 0;
  margin: 0;
  h1 {background: ${Theme.colors.dark};};
`;

export const InfoDetail = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 4;
  background-image: url(${props => props.img});
  background-size: cover;
  h2 {background: ${Theme.colors.dark};};
  h3 {background: ${Theme.colors.dark}; padding: 10px;};
`;

export const TextDetail = styled.div`
  padding = 10px;
`;
