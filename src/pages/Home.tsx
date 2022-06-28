import React, { FC, useEffect } from "react";

import Cuisines from "../components/cuisines/Cuisines";
import Trending from "../components/trending/Trending";
import Vegetarian from "../components/vegetarian/Vegetarian";
import { fetchTrend } from "../store/recipes/trendRecipes/asyncActions";
import { fetchVegan } from "../store/recipes/veganRecipes/asyncActions";
import { useAppDispatch } from "../store/store";

const Home: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    dispatch(fetchTrend());
    dispatch(fetchVegan());
  };

  return (
    <div>
      <Cuisines />
      <Vegetarian />
      <Trending />
    </div>
  );
};

export default Home;
