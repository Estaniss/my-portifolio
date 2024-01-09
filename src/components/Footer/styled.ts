import styled from "styled-components";
import { getTheme } from "../../utils";

const tertiaryMain = getTheme("tertiary.main");

export const Wrapper = styled.div`
  color: ${tertiaryMain};
`;

export const Img = styled.img`
  width: 32px;
`;
