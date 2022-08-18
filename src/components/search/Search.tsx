import { motion } from "framer-motion";
import React, { FC } from "react";
import styled from "styled-components";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import Card from "../ui/card/Card";

import SearchSkeleton from "./Sketelon";

const SearchRecipes: FC = () => {
  const { items, status } = useTypedSelector((state) => state.search);

  const skeletons = [...new Array(8)].map((_, index) => (
    <SearchSkeleton key={index} />
  ));

  return (
    <Container
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {status === "loading"
        ? skeletons
        : items.map((recipe) => (
            <Card
              key={recipe.id}
              title={recipe.title}
              image={recipe.image}
              id={recipe.id}
            />
          ))}
    </Container>
  );
};

export default SearchRecipes;

const Container = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
