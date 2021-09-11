import React from "react";
import { Button } from "react-scroll";
import {
  BtnWrp,
  Column1,
  Heading,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine
} from "./infoElements";

export default function InfoSection() {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>Topline</TopLine>
                <Heading>Heading</Heading>
                <Subtitle>Subtitle</Subtitle>
                <BtnWrp>
                  <Button></Button>
                </BtnWrp>
              </TextWrapper>
            </Column1>
            <ImgWrap></ImgWrap>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}
