import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import SearchRecipes from "../components/search/Search";
import Cuisines from "../components/ui/cuisines/Cuisines";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchSearch } from "../store/search/asyncActions";
import { useAppDispatch } from "../store/store";

const Search: FC = () => {
  const params = useParams();
  const dispatch = useAppDispatch();

  const { items, status } = useTypedSelector((state) => state.search);

  useEffect(() => {
    dispatch(fetchSearch(String(params.name)));
  }, []);

  return (
    <Conitainer>
      <Cuisines />
      <Title>
        {status === "loading" ? "∞" : items.length} suggested recipes '
        {params.name}'
      </Title>
      <SearchRecipes />
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

const Title = styled.p`
  text-align: center;
  margin-bottom: 40px;
  font-weight: 500;
  font-size: 18px;
  color: #6d6d6d;
`;

export default Search;
