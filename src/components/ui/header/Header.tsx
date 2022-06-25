import { FC } from "react";
import styled from "styled-components";

import { FiMoon, FiHeart, FiUser, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <Container>
      <LogoBlock>
        <Link to="/">
          <Logo>
            <LogoImage src="../../logo.png" alt="logo" />
            <LogoTitle>
              SIDE<b>SHEF</b>
            </LogoTitle>
          </Logo>
        </Link>
      </LogoBlock>
      <Search>
        <FiSearch />
        <Input placeholder="Seach 2M+ recipes" />
      </Search>
      <Nav>
        <Theme />
        <Favorites />
        <Profile />
      </Nav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1820px) {
    margin: 0px 150px;
  }

  @media (max-width: 1550px) {
    margin: 0px 215px;
  }
`;

const LogoBlock = styled.div`
  display: flex;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  margin-right: 10px;
`;

const LogoTitle = styled.p`
  letter-spacing: 2px;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  box-shadow: rgb(137 137 145 / 10%) 0px 0px 10px 0px;
  border-radius: 30px;
  width: 600px;
  padding: 15px;
`;

const Input = styled.input`
  border: none;
  color: #afafaf;
  margin-left: 15px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #afafaf;
  }
`;

const Nav = styled.div``;

const Theme = styled(FiMoon)`
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1.5em;
  margin-right: 20px;

  &:hover {
    color: #ff7b7b;
    transition: all 0.3s;
  }
`;

const Favorites = styled(FiHeart)`
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1.5em;
  margin-right: 20px;

  &:hover {
    color: #ff7b7b;
    transition: all 0.3s;
  }
`;

const Profile = styled(FiUser)`
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1.5em;

  &:hover {
    color: #ff7b7b;
    transition: all 0.3s;
  }
`;
