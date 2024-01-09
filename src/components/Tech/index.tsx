import React from "react";
import {
  IconWrapper,
  Label,
  Logo,
  LogoWrapper,
  Title,
  Wrapper,
} from "./styled";
import { IconsList } from "./iconsList";

const Tech: React.FC = () => {
  return (
    <Wrapper>
      <Title>TECHS</Title>
      <IconWrapper>
        {IconsList.map((value) => {
          return (
            <LogoWrapper>
              <Label>{value.label}</Label>
              <Logo src={value.logo} />
            </LogoWrapper>
          );
        })}
      </IconWrapper>
    </Wrapper>
  );
};

export default Tech;
