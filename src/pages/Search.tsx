import { motion } from "framer-motion";
import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/ui/card/Card";
import Cuisines from "../components/ui/cuisines/Cuisines";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchSearch } from "../store/search/asyncActions";
import { useAppDispatch } from "../store/store";

const Search: FC = () => {
  const params = useParams();
  const dispatch = useAppDispatch();

  const { items, status } = useTypedSelector((state) => state.search);

  useEffect(() => {
    console.log(params.name);
    dispatch(fetchSearch(String(params.name)));
  }, []);

  return (
    <Conitainer>
      <Cuisines />
      <Title>133,526 suggested recipes</Title>
      <Recipes
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {status === "loading" ? (
          <h1>loading...</h1>
        ) : (
          items.map((recipe) => (
            <Card
              key={recipe.id}
              title={recipe.title}
              image={recipe.image}
              id={recipe.id}
            />
          ))
        )}
      </Recipes>
    </Conitainer>
  );
};

const Conitainer = styled.div`
  margin-top: 50px;

  @media (max-width: 1450px) {
    margin: 50px 20px;
  }

  @media (max-width: 500px) {
    margin: 50px 20px;
  }
  @media (max-width: 350px) {
    justify-content: center;
  }
`;

const Recipes = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Title = styled.p`
  text-align: center;
  margin-bottom: 40px;
  font-weight: bold;
  font-size: 18px;
`;

export default Search;
