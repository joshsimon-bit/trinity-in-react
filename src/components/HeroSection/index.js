import React from "react";
import ReactPlayer from "react-player";
import { Button } from "../buttonElements";

import {
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg
} from "./heroElements";

export default function Hero() {
  return (
    <HeroContainer>
      <HeroBg>
        <ReactPlayer
          autoPlay
          loop
          url="https://www.youtube.com/watch?v=e04cAAeaTu4 "
          type="video.mp4"
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>The Master's Way</HeroH1>
        <HeroP>
          <p>
            We are a non-profit broadcast organization that films multiple video
            series and TV shows at Trinity World Christian Center in
            Douglasville, Georgia. The Master’s Way has a simple mission: to
            help our community grow in and through the word of God.
          </p>
        </HeroP>
        <HeroBtnWrapper>
          <Button to="prayer" primary="true" dark="true">
            Prayer
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}
