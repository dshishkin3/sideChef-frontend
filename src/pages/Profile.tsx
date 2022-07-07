import React, { FC, useState } from "react";
import styled from "styled-components";
import Auth from "../components/auth/Auth";
import MyProfile from "../components/myProfile/MyProfile";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Profile: FC = () => {
  const { user } = useTypedSelector((state) => state.user);

  return <Container>{user ? <MyProfile /> : <Auth />}</Container>;
};

export default Profile;

const Container = styled.div``;
