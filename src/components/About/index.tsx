import React from "react";
import { AboutText, Title, Wrapper } from "./styles";

const About: React.FC = () => {
  return (
    <Wrapper>
      <Title>About Me</Title>
      <AboutText>
        I am a self-taught developer with experience in creating new features,
        from conception to production, transforming wireframes and design flows
        into high-performance applications. I always prioritize the user
        experience when writing efficient and reusable code. I have a passion
        for combining quality design, technology, and innovation in all my
        projects, and I enjoy following each one from the initial idea to the
        launch. Currently, I am focused on developing my skills in mobile
        development and acquiring new certifications.
      </AboutText>
    </Wrapper>
  );
};

export default About;
