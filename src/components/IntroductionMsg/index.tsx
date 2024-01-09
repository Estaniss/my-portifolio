import React from "react";
import { LoopMsg, Wrapper } from "./styles";

const IntroductionMsg: React.FC = () => {
  return (
    <Wrapper>
      <LoopMsg
        steps={["Front End 💻", 2000, "Back End👨🏿‍💻", 2000, "Mobile📱", 2000]}
        loop={Infinity}
      />
    </Wrapper>
  );
};

export default IntroductionMsg;
