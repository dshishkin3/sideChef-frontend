import { AnimatePresence } from "framer-motion";
import { FC } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Layout from "../components/ui/layout/Layout";
import NotificationError from "../components/ui/notification/NotificationError";
import NotificationSuccess from "../components/ui/notification/NotificationSuccess";
import { useTypedSelector } from "../hooks/useTypedSelector";

import Cuisine from "../pages/Cuisine";
import Favorites from "../pages/Favorites";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Recipe from "../pages/Recipe";
import Search from "../pages/Search";

export const AppRouter: FC = () => {
  const location = useLocation();

  const { message, error } = useTypedSelector((state) => state.user);

  return (
    <AnimatePresence exitBeforeEnter>
      <Layout>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:name" element={<Cuisine />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/search/:name" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Routes>
        {error && <NotificationError />}
        {message && <NotificationSuccess />}
      </Layout>
    </AnimatePresence>
  );
};
