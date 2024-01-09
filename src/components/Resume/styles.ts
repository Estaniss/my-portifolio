import styled from "styled-components";
import { getTheme } from "../../utils";

const tertiaryMain = getTheme("tertiary.main");

export const Wrapper = styled.div`
  margin-top: 10vh;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ImgDev = styled.img`
  width: 40%;
`;

export const TextTitle = styled.p`
  color: ${tertiaryMain};
  font-size: 30px;
`;

export const TextSubtitle = styled.p`
  color: ${tertiaryMain};
  font-size: 20px;
`;

export const PerspectiveContainer = styled.div`
  perspective: 1000px;
  width: 60%;
  z-index: 1;
`;
export const CardContainer = styled.div`
  margin: auto;
  transform-style: preserve-3d;
  transition: transform 0.05s linear;
  display: flex;
  justify-content: center;
`;

export const CardThumb = styled.img`
  border: 2px solid #2d9596;
  width: 40%;
  background-size: cover;
  border-radius: 150px;
  box-shadow: 10px 10px 23px -7px rgba(97, 97, 97, 1);
  margin-block: 16px;

  &:after {
    content: "";
    width: 100%;
    height: 108%;
    filter: blur(55px);
    background: inherit;
  }
`;
