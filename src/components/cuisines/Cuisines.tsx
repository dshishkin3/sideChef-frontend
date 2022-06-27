import React, { FC } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";

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
            breakpoints: {
              1100: {
                width: 800,
                perPage: 5,
              },
              935: {
                width: 700,
              },
              800: {
                perPage: 4,
                width: 500,
              },
              600: {
                perPage: 3,
                width: 320,
              },
              400: {
                perPage: 3,
                width: 300,
              },

              350: {
                perPage: 2,
                width: 250,
              },
            },
          }}
        >
          {cuisines.map((cuisine) => (
            <SplideSlide key={cuisine.id}>
              <Link to={`/cuisine/${cuisine.name}`}>
                <Pointer>
                  <ImageSlide src={cuisine.src} />
                  <TitleSlide>{cuisine.name}</TitleSlide>
                </Pointer>
              </Link>
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

  @media (max-width: 1550px) {
    margin-top: 40px;
  }

  @media (max-width: 700px) {
    margin-top: 25px;
  }
`;

const Subtitle = styled.p`
  color: #afafaf;
  font-size: 14px;
  margin-bottom: 10px;

  @media (max-width: 700px) {
    font-size: 12px;
  }
`;

const Title = styled.p`
  color: #4d4d4d;
  font-size: 28px;

  @media (max-width: 700px) {
    font-size: 18px;
  }
`;

const Slider = styled.div`
  margin-top: 25px;
`;

const Pointer = styled.div`
  cursor: pointer;
  display: inline-block;
`;

const ImageSlide = styled.img`
  @media (max-width: 400px) {
    width: 90px;
  }
`;

const TitleSlide = styled.p`
  position: relative;
  top: -60px;
  color: #fff;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 500;

  @media (max-width: 400px) {
    top: -55px;
    font-size: 12px;
  }
`;
