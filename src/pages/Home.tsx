import React, { FC, useEffect } from "react";
import { motion } from "framer-motion";

import Trending from "../components/trending/Trending";
import Vegetarian from "../components/vegetarian/Vegetarian";
import { fetchTrend } from "../store/recipes/trendRecipes/asyncActions";
import { fetchVegan } from "../store/recipes/veganRecipes/asyncActions";
import { useAppDispatch } from "../store/store";

const Home: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // getRecipes();
  }, []);

  const getRecipes = async () => {
    dispatch(fetchTrend());
    dispatch(fetchVegan());
  };

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Vegetarian />
      <Trending />
    </motion.div>
  );
};

export default Home;
