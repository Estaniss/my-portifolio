import React, { useState } from "react";
import {
  Wrapper,
  TextTitle,
  TextSubtitle,
  PerspectiveContainer,
  CardContainer,
  CardThumb,
} from "./styles";
import IntroductionMsg from "../IntroductionMsg";
import { DevImg } from "../../assets/images";
import { SocialIcons } from "..";

const Resume: React.FC = () => {
  //const [weather, setWeather] = useState<string>();
  /* const [backgroud, setBackgroud] = useState();

  const changeBack = () => {
    switch (weather) {
      case "Clear":
        setBackgroud(CleandBack);
        break;
      case "Rain":
        setBackgroud(RainBack);
        break;
      case "Clouds":
        setBackgroud(CloudBack);
        break;
      default:
        setBackgroud(CloudBack);
    }
  };

  const getCity = async () => {
    try {
      if ("geolocation" in navigator) {
        const position: GeolocationPosition = await new Promise(
          (resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          }
        );
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

        const response = await fetch(apiUrl);
        const data = await response.json();
        const city = data.address.city_district;

        await getWeather(city);
      } else {
        console.error("Geolocalização não está disponível no navegador.");
      }
    } catch (error) {
      console.error("Erro ao obter informações de localização:", error);
    }
  };

  const getWeather = async (city: string) => {
    console.log(city);
    try {
      const data = await WeatherApi.getWeather(city);
      setWeather(data.weather[0].main);
      console.log(data.weather[0].main);
    } catch (error) {
      if (error instanceof ResponseError) {
        console.log(error);
      }
    }
  }; */

  ////////////////

  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const eX = -(window.innerWidth / 2 - e.pageX) / 30;
    const eY = (window.innerHeight / 2 - e.pageY) / 10;
    setRotation({ x: eX, y: eY });
  };

  /////////////////

  /////////////////
  /* 
  useEffect(() => {
    getCity();
  }, []);

  useEffect(() => {
    changeBack();
  }, [weather]);
 */

  return (
    <Wrapper>
      <PerspectiveContainer>
        <CardContainer
          onMouseMove={handleMouseMove}
          style={{
            transform: `rotateY(${rotation.x}deg) rotateX(${rotation.y}deg)`,
          }}
        >
          <CardThumb src={DevImg} />
        </CardContainer>
      </PerspectiveContainer>
      <TextTitle>{"Hi i'm Thomas"}</TextTitle>
      <TextSubtitle>{"Developer"}</TextSubtitle>
      <IntroductionMsg />
      <SocialIcons />
    </Wrapper>
  );
};

export default Resume;
