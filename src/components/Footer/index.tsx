import React from "react";
import { Img, Wrapper } from "./styled";
import { HeartGif } from "../../assets";

const Footer: React.FC = () => {
  return (
    <Wrapper>
      Developed with {<Img src={HeartGif} />} by Thomas Estanislau.
    </Wrapper>
  );
};

export default Footer;
