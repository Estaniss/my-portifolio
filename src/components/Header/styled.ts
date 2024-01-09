import styled from "styled-components";
import { getTheme } from "../../utils";

const tertiaryMain = getTheme("tertiary.main");
const secondaryMain = getTheme("secondary.main");

export const Wrapper = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  position: fixed;
  top: 0;
  box-shadow: 0px 0px 9px 3px ${tertiaryMain};
  z-index: 2;
`;

export const RightMenu = styled.div``;

export const LeftMenu = styled.div``;

export const Logo = styled.a`
  text-decoration: none;
  color: ${tertiaryMain};
  font-weight: bold;
`;

export const NavbarContainer = styled.nav`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const NavItem = styled.li`
  margin-right: 20px;

  @media (max-width: 750px) {
    margin-bottom: 10px;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: ${tertiaryMain};
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${tertiaryMain};
  font-size: 16px;

  @media (min-width: 751px) {
    display: none;
  }
`;
