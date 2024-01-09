import React from "react";
import {
  BtnIcon,
  FaceIcon,
  FaceWrapper,
  GitIcon,
  GitWrapper,
  InstaIcon,
  InstaWrapper,
  LkdnIcon,
  LkdnWrapper,
  Ul,
} from "./styled";

const SocialIcons: React.FC = () => {
  return (
    <Ul>
      <FaceWrapper>
        <BtnIcon href="https://www.facebook.com/profile.php?id=100004516692587">
          <FaceIcon />
        </BtnIcon>
      </FaceWrapper>
      <InstaWrapper>
        <BtnIcon href="https://www.instagram.com/thomas_estanislau/">
          <InstaIcon />
        </BtnIcon>
      </InstaWrapper>
      <GitWrapper>
        <BtnIcon href="https://github.com/Estaniss">
          <GitIcon />
        </BtnIcon>
      </GitWrapper>
      <LkdnWrapper>
        <BtnIcon href="https://www.linkedin.com/in/thomas-estanislau-45ab05124/">
          <LkdnIcon />
        </BtnIcon>
      </LkdnWrapper>
    </Ul>
  );
};

export default SocialIcons;
