import { Splide, SplideSlide } from "@splidejs/react-splide";
import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Card {
  id: number;
  title: string;
  image: string;
}

const Trending: FC = () => {
  const [trending, setTrending] = useState<Card[]>([]);

  useEffect(() => {
    getTrending();
  }, []);

  const getTrending = async () => {
    const check = localStorage.getItem("trending");

    if (check) {
      setTrending(JSON.parse(check));
    } else {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`
      );

      localStorage.setItem("trending", JSON.stringify(res.data.recipes));
      setTrending(res.data.recipes);
      console.log(res.data.recipes);
    }
  };

  return (
    <Container>
      <Title>Trending</Title>
      <Splide
        aria-label="My Favorite Images"
        options={{
          perPage: 5,
          pagination: false,
          type: "loop",
          drag: "free",
          gap: 50,
          arrows: false,
        }}
      >
        {trending.map((trend) => (
          <SplideSlide key={trend.id}>
            <Link to={`/recipe/${trend.id}`}>
              <Card>
                <Image src={trend.image} alt="" />
                <Name>{trend.title}</Name>
                <Gradient />
              </Card>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </Container>
  );
};

export default Trending;

const Container = styled.div`
  @media (max-width: 1550px) {
    margin: 0 auto;
    max-width: 1200px;
  }
`;

const Title = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
`;

const Card = styled.div`
  cursor: pointer;
  min-height: 15rem;
  width: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  @media (max-width: 1550px) {
    width: 200px;
    min-height: 200px;
  }
`;

const Image = styled.img`
  border-radius: 20px;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Name = styled.p`
  position: absolute;
  left: 50%;
  z-index: 10;
  bottom: 0%;
  transform: translate(-50%, 0%);
  font-weight: 600;
  color: #fff;
  font-size: 14px;
  letter-spacing: 1px;
  text-align: center;
  display: flex;
  justify-content: center;
  height: 40%;
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
