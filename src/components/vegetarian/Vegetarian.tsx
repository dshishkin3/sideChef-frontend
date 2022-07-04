import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../ui/card/Card";

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
                  <Card image={vegan.image} title={vegan.title} id={vegan.id} />
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
