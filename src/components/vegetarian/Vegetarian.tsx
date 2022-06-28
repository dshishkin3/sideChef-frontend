import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import VeganSkeleton from "./Skeleton";

interface Card {
  id: number;
  title: string;
  image: string;
}

const Vegetarian: FC = () => {
  // const { items, status } = useTypedSelector((state) => state.veganRecipes);

  const [items, setItems] = useState<Card[]>([]);
  const [status, setStatus] = useState<"loading" | "error" | "completed">(
    "loading"
  );

  useEffect(() => {
    getVegan();
  }, []);

  const getVegan = async () => {
    const check = localStorage.getItem("vegetarian");
    if (check) {
      setItems(JSON.parse(check));
      setStatus("completed");
    }
  };

  const skeletons = [...new Array(4)].map((_, index) => (
    <VeganSkeleton key={index} />
  ));

  return (
    <Container>
      <Title>Our Vegetarian Picks</Title>
      <Slider>
        <Splide
          aria-label="My Favorite Images"
          options={{
            perPage: 4,
            width: 1400,
            breakpoints: {
              1320: {
                perPage: 3,
                width: 1350,
              },
              820: {
                perPage: 2,
              },
              340: {
                perPage: 1,
              },
            },
            pagination: false,
            type: "loop",
            drag: "free",
            gap: 20,
            arrows: false,
          }}
        >
          {status === "loading"
            ? skeletons
            : items.map((vegan) => (
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
      </Slider>
    </Container>
  );
};

export default Vegetarian;

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

const Slider = styled.div``;

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
  width: 21rem;
  overflow: hidden;
  position: relative;
  border-radius: 2rem;

  @media (max-width: 1400px) {
    width: 20rem;
  }

  @media (max-width: 1035px) {
    width: 19rem;
  }

  @media (max-width: 990px) {
    min-height: 13rem;
    width: 16rem;
  }
  @media (max-width: 650px) {
    min-height: 9rem;
    width: 12rem;
  }

  @media (max-width: 445px) {
    min-height: 7rem;
    width: 10rem;
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
    height: 50%;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
