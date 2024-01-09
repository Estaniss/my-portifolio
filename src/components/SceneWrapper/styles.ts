import styled from "styled-components";
import { px2rem } from "../../utils";

export const Wrapper = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 16px;
`;

export const ResumeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TextTitle = styled.h1`
  font-size: ${px2rem(60)};
`;
