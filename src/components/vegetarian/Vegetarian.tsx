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

const Vegetarian: FC = () => {
  const [vegetarians, setVegetarians] = useState<Card[]>([]);

  useEffect(() => {
    getVegetarian();
  }, []);

  const getVegetarian = async () => {
    const check = localStorage.getItem("vegetarian");

    if (check) {
      setVegetarians(JSON.parse(check));
    } else {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12&tags=vegetarian`
      );

      localStorage.setItem("vegetarian", JSON.stringify(res.data.recipes));
      setVegetarians(res.data.recipes);
      console.log(res.data.recipes);
    }
  };

  return (
    <Container>
      <Title>Our Vegetarian Picks</Title>
      <Splide
        aria-label="My Favorite Images"
        options={{
          perPage: 4,
          breakpoints: {
            // 1550: {
            //   perPage: 3,
            // },
          },
          pagination: false,
          type: "loop",
          drag: "free",
          gap: 20,
          arrows: false,
        }}
      >
        {vegetarians.map((vegan) => (
          <SplideSlide key={vegan.id}>
            <Link to={`/recipe/${vegan.id}`}>
              <Card>
                <Image src={vegan.image} alt="" />
                <Name>{vegan.title}</Name>
                <Gradient />
              </Card>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </Container>
  );
};

export default Vegetarian;

const Container = styled.div`
  @media (max-width: 1550px) {
    margin: 60px auto;
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
  width: 21rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  @media (max-width: 1550px) {
    width: 280px;
    /* height: 160px; */
    min-height: 180px;
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
