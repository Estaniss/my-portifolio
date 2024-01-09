import styled from "styled-components";
import { getTheme } from "../../utils";

const tertiaryMain = getTheme("tertiary.main");
const primaryDark = getTheme("secondary.main");

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: ${tertiaryMain};
  padding-block: 16px;
  border-radius: 55% 45% 50% 50% / 13% 76% 24% 87%;
`;

export const IconWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  margin-bottom: 16px;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

export const Label = styled.p`
  margin-bottom: 12px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 16px;
  :hover {
    transform: scale(1.3);
  }
`;
