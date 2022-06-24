import React, { FC } from "react";

import Cuisines from "../components/cuisines/Cuisines";
import Trending from "../components/trending/Trending";
import Vegetarian from "../components/vegetarian/Vegetarian";

const Home: FC = () => {
  return (
    <div>
      <Cuisines />
      <Vegetarian />
      <Trending />
    </div>
  );
};

export default Home;
