import { motion } from "framer-motion";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Card from "../components/ui/card/Card";
import Cuisines from "../components/ui/cuisines/Cuisines";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchCuisine } from "../store/cuisine/asyncActions";
import { Cuisine } from "../store/cuisine/cuisine.types";
import { useAppDispatch } from "../store/store";

const CuisineBlock: FC = () => {
  const [items, setItems] = useState<Cuisine[]>([]);
  const [status, setStatus] = useState<"loading" | "error" | "completed">(
    "loading"
  );

  // const { items, status } = useTypedSelector((state) => state.cuisine);

  const params = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    // getRecipes();
    getCuisine();
  }, []);

  // const getRecipes = async () => {
  //   dispatch(fetchCuisine(String(params.name)));
  //   localStorage.setItem("cuisine", JSON.stringify(items));
  // };

  const getCuisine = async () => {
    const check = localStorage.getItem("cuisine");
    if (check) {
      setItems(JSON.parse(check));
      setStatus("completed");
    }
  };

  return (
    <Conitainer>
      <Cuisines />
      <Items
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {" "}
        {status === "loading" ? (
          <h1>loading...</h1>
        ) : (
          items.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              image={item.image}
              id={item.id}
            />
          ))
        )}
      </Items>
    </Conitainer>
  );
};

export default CuisineBlock;

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

const Items = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
