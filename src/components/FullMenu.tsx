import * as React from "react";
import styled from "styled-components";
import { Navbar, BrandA, Ul, Li, StyledMenu, StyledLink } from "../styles.ts";

import Hamburger from "./Hamburger";

const FullMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const close = () => setOpen(false);
  return (
    <div>
      <StyledMenu open={open}>
        <StyledLink onClick={() => close()}>Link 1</StyledLink>
        <StyledLink onClick={() => close()}>Link 2</StyledLink>
        <StyledLink onClick={() => close()}>Link 3</StyledLink>
      </StyledMenu>
      <Hamburger open={open} setOpen={setOpen} />
     </div>
   );
};

export default FullMenu;
