import styled from "styled-components";
import { getTheme } from "../../utils";

const tertiaryMain = getTheme("tertiary.main");

export const Wrapper = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 12px;
  margin-bottom: 12px;
  min-height: 50vh;
  color: ${tertiaryMain};
`;

export const AboutWrapper = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  margin-bottom: 16px;
`;

export const AboutText = styled.p`
  text-align: justify;
`;
