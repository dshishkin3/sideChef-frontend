import { motion } from "framer-motion";
import React, { FC } from "react";
import styled from "styled-components";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import Card from "../ui/card/Card";

import CuisinesSkeleton from "./Skeleton";

const CuisinesItems: FC = () => {
  const { items, status } = useTypedSelector((state) => state.cuisine);

  const skeletons = [...new Array(8)].map((_, index) => (
    <CuisinesSkeleton key={index} />
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
        : items.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              image={item.image}
              id={item.id}
            />
          ))}
    </Container>
  );
};

export default CuisinesItems;

const Container = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
