import React, { useState } from "react";
import {
  LeftMenu,
  Logo,
  NavButton,
  NavItem,
  NavLink,
  NavMenu,
  NavbarContainer,
  RightMenu,
  Wrapper,
} from "./styled";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Wrapper>
      <LeftMenu>
        <Logo href="/">{"<Estanis/>"}</Logo>
      </LeftMenu>
      <RightMenu>
        <NavbarContainer>
          <NavMenu style={{ display: menuOpen ? "flex" : "none" }}>
            <NavItem>
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Contact</NavLink>
            </NavItem>
          </NavMenu>
          <NavButton onClick={toggleMenu}>Menu</NavButton>
        </NavbarContainer>
      </RightMenu>
    </Wrapper>
  );
};

export default Header;
