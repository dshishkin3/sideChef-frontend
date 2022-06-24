import React, { FC } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import { cuisines } from "./data";

import "@splidejs/react-splide/css";

const Cuisines: FC = () => {
  return (
    <Container>
      <Subtitle>PERSONALIZE YOUR EXPERIENCE</Subtitle>
      <Title>What are your favorite cuisines?</Title>
      <Slider>
        <Splide
          aria-label="My Favorite Images"
          options={{
            perPage: 7,
            pagination: false,
            type: "loop",
            drag: "free",
            width: 1000,
          }}
        >
          {cuisines.map((cuisine) => (
            <SplideSlide key={cuisine.id}>
              <Pointer>
                <ImageSlide src={cuisine.src} />
                <TitleSlide>{cuisine.name}</TitleSlide>
              </Pointer>
            </SplideSlide>
          ))}
        </Splide>
      </Slider>
    </Container>
  );
};

export default Cuisines;

const Container = styled.div`
  margin-top: 80px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled.p`
  color: #afafaf;
  font-size: 14px;
  margin-bottom: 10px;
`;

const Title = styled.p`
  color: #4d4d4d;
  font-size: 28px;
`;

const Slider = styled.div`
  margin-top: 25px;
`;

const Pointer = styled.div`
  cursor: pointer;
  display: inline-block;
`;

const ImageSlide = styled.img``;

const TitleSlide = styled.p`
  position: relative;
  top: -60px;
  color: #fff;
  font-size: 14px;
  letter-spacing: 1px;
`;
