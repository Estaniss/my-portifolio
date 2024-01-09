import styled from "styled-components";
import Typical from "react-typical";
import { getTheme } from "../../utils";

const tertiaryMain = getTheme("tertiary.main");

export const Wrapper = styled.div`
  margin-bottom: 12px;
  color: ${tertiaryMain};
`;

export const LoopMsg = styled(Typical)`
  font-size: 20px;
`;
