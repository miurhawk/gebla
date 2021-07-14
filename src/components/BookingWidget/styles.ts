import styled, { createGlobalStyle } from "styled-components";
import * as React from "react";


const Theme = {
  colors: {
    // blue: `#205478`,
    // black: `#1A1E1F`,
    // light: `#EEEDF4`,
    // orange: `#23E5BF`,
    // darkgrey: `#8888FF`,
    // a3: `#D7FFAB`,
    // grey: `#E3E3E3`,
    blue: `#205478`,
    black: `#161615`,
    light: `#FFFFFF`,
    orange: `#F89C1A`,
    darkgrey: `#B3BFCD`,
    a3: `#D7FFAB`,
    grey: `#E3E3E3`,

  },
  fonts: {
    body: `Raleway, sans-serif`,
    heading: `Russo One, sans-serif`,
  }
}

export const CenteredPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-radius: 15px;
  height: 500px;
  overflow-y: scroll;
  background-color: ${Theme.colors.light};
  h1 {text-transform: uppercase; color: ${Theme.colors.black}; font-family: ${Theme.fonts.heading}; font-size: 40pt;};
  h2 {text-transform: uppercase; color: ${Theme.colors.black}; font-family: ${Theme.fonts.heading}; font-size: 30pt; margin: 0;};
  h3 {text-transform: uppercase; color: ${Theme.colors.black}; font-family: ${Theme.fonts.heading}; font-size: 40pt; text-shadow: 2px 2px ${Theme.colors.black};};
  h4 {text-transform: uppercase; color: ${Theme.colors.black}; font-family: ${Theme.fonts.heading}; font-size: 14pt; padding: 0; margin: 0;};
  h5 {text-transform: lowercase; color: ${Theme.colors.darkgrey}; font-family: ${Theme.fonts.heading}; font-size: 12pt; margin: 0; padding: 0;};
  h6 {text-transform: lowercase; color: ${Theme.colors.black}; font-family: ${Theme.fonts.heading}; font-size: 12pt; line-height: 36pt; margin: 0;};
  a {color: ${Theme.colors.black}; font-family: ${Theme.fonts.body}; font-size: 10pt;};
  a:link {color: ${Theme.colors.black}; text-decoration: none; padding: 0;};
  a:link:hover {color: ${Theme.colors.grey}; text-decoration: none;};
  a:link:active {color: ${Theme.colors.orange}; text-decoration: none;};
  a:link:visited {color: ${Theme.colors.orange}; text-decoration: none;};
  a:visited {color: ${Theme.colors.orange}; text-decoration: none;};
  a:visited:hover {color: ${Theme.colors.grey}; text-decoration: none;};
  a:visited:active {color: ${Theme.colors.orange}; text-decoration: none;};
`;

export const SmallButton = styled.button`
  background-color: ${Theme.colors.grey};
  height: 30px;
  width: 30px;
  display: block;
  margin: auto;
  border-radius: 15px;
  border: 2px solid ${Theme.colors.darkgrey};
  :hover {
    border: none;
    background-color: ${Theme.colors.darkgrey};
    h5 {
      color: ${Theme.colors.black};
    };
  }
`;

export const ReallySmallButton = styled.button`
  height: 14px;
  width: 14px;
  border-radius: 7px;
  background-color: ${Theme.colors.light};
  border: 2px solid ${Theme.colors.darkgrey};
  a {
    position: relative;
    left: -3px;
    top: -5px;
    font-size: 8pt;
  }
  :hover {
    background-color: ${Theme.colors.grey};
    a {
      font-weight: 800;
    }
  }
`;

export const StyledPriceCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  border: 2px solid ${Theme.colors.grey};
  border-radius: 15px;
  margin: 10px;
  text-align: left;
  div {
    padding: 20px;
  }
  > :nth-child(odd) {
    width: 40%;
  }
  > :nth-child(even) {
    width: 60%;
  }
`;

export const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background-color: ${Theme.colors.black};
  h4 {color: ${Theme.colors.light};
`;

export const AgileButton = styled.button`
  background-color: ${Theme.colors.light};
  height: 30px;
  display: block;
  margin: 10px;
  border-radius: 15px;
  border: 5px solid ${Theme.colors.light};
  h5 {color: ${Theme.colors.black};}
  a {font-weight: 600;}
  :hover {
    h5 {font-weight: 150;}
    a {font-weight: 300;}

  }
`;

export const ChunkyButton = styled.button<{active: boolean}>`
  background-color: ${(props) => props.active ? Theme.colors.grey : Theme.colors.light};
  height: 30px;
  width: 160px;
  margin-top: 10px;
  align-self: center;
  border-radius: 15px;
  border: 5px solid ${Theme.colors.grey};
  h5 {color: ${Theme.colors.black};}
  a {font-weight: bold;}
  :hover {
    h5 {font-weight: 150;}
    border: ${(props) => !props.active ? `5px solid ${Theme.colors.grey}` : `5px solid ${Theme.colors.orange}`};

  }
`;

export const CartDiv = styled.div`
  padding: 20px;
`;


export const Foot = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 1rem;
  align-items: center;
  justify-content: space-around;
`;

export const Divider = styled.div`
  align-self: center;
  width: 100%;
  margin: 0 0 10px 0;
  height: 2px;
  border-radius: 5px;
  background-color: ${Theme.colors.orange};
  :hover {
    background-color: ${Theme.colors.blue};
  }
`;


export const DetailRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  flex-wrap: nowrap;
`;


export const DetailCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem;
  margin: auto;
  flex-grow: 5;
  -webkit-flex-grow: 5;
  flex-wrap: wrap;
`;



export const FlexCol = styled.div`
  display: flex;
  position: relative;
  padding: 20px;
  flex-direction: column;
  align-items: stretch;
  justify-contents: center;
  margin: auto;
  flex-grow: 5;
  `;



export const StyledForm = styled.form`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 10px 10vw;
  min-width: 300px;
  align-items: stretch;
  justify-content: space-evenly;
  select {
    border: none;
  };
  input {
    background-color: ${Theme.colors.black};
    border-bottom: 1px solid ${Theme.colors.grey};
    border-left: none;
    border-right: none;
    color: ${Theme.colors.light};
    border-top: none;
    font-size: 10pt;
    font-family: ${Theme.fonts.body};
    min-height: 30px;
  };
  
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active
  {
   -webkit-box-shadow: 0 0 0 30px ${Theme.colors.black} inset !important;
  }
  input:-webkit-autofill
  {
  -webkit-text-fill-color: ${Theme.colors.light} !important;
  }
  select {
    background-color: ${Theme.colors.light};
    border: none;
    font-size: 14pt;
    font-family: ${Theme.fonts.body};
    min-height: 30px;
  };

  label {
    h6 {color: ${Theme.colors.light};}
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


`;


export const StyledTable = styled.table`
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  align-self: center;
  tr:hover {
    background-color: ${Theme.colors.grey};
  }
  th {background-color: ${Theme.colors.grey}; color: ${Theme.colors.black}; text-transform: uppercase; font-family: ${Theme.fonts.heading}; font-size: 10pt; padding: 15px; text-align: left; min-width: 2vw;};
  td {color: ${Theme.colors.black}; font-family: ${Theme.fonts.body}; padding: 5px; text-align: left; min-width: 2vw; font-size: 10pt;}
`;
