import { FC } from "react";
import { FiHeart, FiMoon, FiUser } from "react-icons/fi";
import styled from "styled-components";

const Nav: FC = () => {
  return (
    <Container>
      <Theme />
      <Favorites />
      <Profile />
    </Container>
  );
};

export default Nav;

const Container = styled.div``;

const Theme = styled(FiMoon)`
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1.5em;
  margin-right: 20px;

  &:hover {
    color: #ff950a;
    transition: all 0.3s;
  }
`;

const Favorites = styled(FiHeart)`
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1.5em;
  margin-right: 20px;

  &:hover {
    color: #ff950a;
    transition: all 0.3s;
  }
`;

const Profile = styled(FiUser)`
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1.5em;

  &:hover {
    color: #ff950a;
    transition: all 0.3s;
  }
`;
