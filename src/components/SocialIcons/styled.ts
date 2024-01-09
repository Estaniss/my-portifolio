import styled from "styled-components";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
  BsFacebook,
} from "..";
import { getTheme } from "../../utils";

const primaryContrastText = getTheme("primary.contrastText");

export const Ul = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FaceWrapper = styled.div`
  width: 100%;
  margin-right: 10px;

  :hover {
    box-shadow: 0 2px 5px #3b5998;
    text-decoration: none;
    color: #3b5998;
  }
`;

export const InstaWrapper = styled.div`
  width: 100%;
  margin-right: 10px;
  :hover {
    box-shadow: 0 2px 5px #e4405f;
    text-decoration: none;
    color: #e4405f;
  }
`;

export const GitWrapper = styled.div`
  width: 100%;
  margin-right: 10px;
  :hover {
    box-shadow: 0 2px 5px #6e5494;
    text-decoration: none;
    color: #6e5494;
  }
`;

export const LkdnWrapper = styled.div`
  width: 100%;
  margin-right: 10px;
  :hover {
    box-shadow: 0 2px 5px #007bb6;
    text-decoration: none;
    color: #007bb6;
  }
`;

export const BtnIcon = styled.a`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  text-decoration: none;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  transition: 0.5s;
`;

export const FaceIcon = styled(BsFacebook)`
  border-radius: 50%;
  line-height: calc(60px - 12px);
  font-size: 45px;
  color: ${primaryContrastText};
  transition: 0.5s;
`;

export const InstaIcon = styled(AiOutlineInstagram)`
  border-radius: 50%;
  line-height: calc(60px - 12px);
  font-size: 45px;
  color: ${primaryContrastText};
  transition: 0.5s;
`;

export const GitIcon = styled(AiFillGithub)`
  border-radius: 50%;
  line-height: calc(60px - 12px);
  font-size: 45px;
  color: ${primaryContrastText};
  transition: 0.5s;
`;

export const LkdnIcon = styled(AiFillLinkedin)`
  border-radius: 50%;
  line-height: calc(60px - 12px);
  font-size: 45px;
  color: ${primaryContrastText};
  transition: 0.5s;
`;
