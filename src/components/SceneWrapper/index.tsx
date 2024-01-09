import React from "react";
import { Wrapper } from "./styles";
import { Header } from "..";

type Props = {
  children: JSX.Element;
};

const SceneWrapper: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

export default SceneWrapper;
