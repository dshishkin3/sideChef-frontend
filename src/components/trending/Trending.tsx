import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import TrendSkeleton from "./Skeleton";

interface Card {
  id: number;
  title: string;
  image: string;
}

const Trending: FC = () => {
  // const { items, status } = useTypedSelector((state) => state.trendRecipes);

  const [items, setItems] = useState<Card[]>([]);
  const [status, setStatus] = useState<"loading" | "error" | "completed">(
    "loading"
  );

  useEffect(() => {
    getTrending();
  }, []);

  const getTrending = async () => {
    const check = localStorage.getItem("trending");
    if (check) {
      setItems(JSON.parse(check));
      setStatus("completed");
    }
  };

  const skeletons = [...new Array(5)].map((_, index) => (
    <TrendSkeleton key={index} />
  ));

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
          width: 1400,
          breakpoints: {
            1400: {
              gap: 0,
            },
            1170: {
              perPage: 4,
            },
            820: {
              perPage: 3,
            },
            340: {
              perPage: 2,
            },
          },
        }}
      >
        {status === "loading"
          ? skeletons
          : items.map((trend) => (
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
  margin: 40px auto;
  text-align: center;

  @media (max-width: 1450px) {
    margin: 40px 20px;
  }

  @media (max-width: 820px) {
    margin: 40px 0px;
  }

  @media (max-width: 500px) {
    margin: 20px 0px;
  }
`;

const Title = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
  text-align: start;

  @media (max-width: 820px) {
    margin-left: 25px;
  }
`;

const Card = styled.div`
  cursor: pointer;
  display: inline-block;
  min-height: 15rem;
  width: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  @media (max-width: 1400px) {
    width: 13rem;
  }

  @media (max-width: 1035px) {
    width: 11rem;
  }

  @media (max-width: 990px) {
    min-height: 13rem;
    width: 9rem;
  }
  @media (max-width: 650px) {
    min-height: 9rem;
    width: 8rem;
  }

  @media (max-width: 445px) {
    min-height: 8rem;
    width: 7rem;
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

  @media (max-width: 650px) {
    font-size: 10px;
    height: 60%;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
