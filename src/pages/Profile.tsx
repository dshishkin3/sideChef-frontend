import { motion } from "framer-motion";
import React, { FC } from "react";
import styled from "styled-components";
import Auth from "../components/auth/Auth";
import MyProfile from "../components/myProfile/MyProfile";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Profile: FC = () => {
  const { user } = useTypedSelector((state) => state.user);

  return (
    <Container
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {user ? <MyProfile /> : <Auth />}
    </Container>
  );
};

export default Profile;

const Container = styled(motion.div)``;
