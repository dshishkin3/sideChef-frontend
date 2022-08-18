import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import CuisinesItems from "../components/cuisines/Cuisines";

import Cuisines from "../components/ui/cuisines/Cuisines";

import { fetchCuisine } from "../store/cuisine/asyncActions";
import { useAppDispatch } from "../store/store";

const CuisineBlock: FC = () => {
  const params = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    dispatch(fetchCuisine(String(params.name)));
  };

  return (
    <Conitainer>
      <Cuisines />
      <Title>{params.name} cuinines</Title>
      <CuisinesItems />
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

const Title = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  color: #000000;
  margin-bottom: 30px;
`;
