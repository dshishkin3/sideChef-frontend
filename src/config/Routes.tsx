import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "../components/ui/layout/Layout";
import Auth from "../pages/Auth";
import Cuisine from "../pages/Cuisine";
import Favorites from "../pages/Favorites";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Recipe from "../pages/Recipe";
import Search from "../pages/Search";

export const AppRouter: FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:name" element={<Cuisine />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/search/:name" element={<Search />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
};
