import { FC } from "react";
import styled from "styled-components";

import { FiMoon, FiHeart, FiUser, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import Drawer from "./drawer/Drawer";
import Nav from "./nav/Nav";

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
      <Drawer />
      <Search>
        <FiSearch size={18} />
        <Input placeholder="Seach 2M+ recipes" />
      </Search>
      <NavBlock>
        <Nav />
      </NavBlock>
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
    margin: 0px 225px;
    flex-wrap: wrap;
  }

  @media (max-width: 700px) {
    margin: 0px 20px;
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
  /* box-shadow: rgb(137 137 145 / 10%) 0px 0px 10px 0px; */
  border-radius: 30px;
  width: 600px;
  padding: 15px;
  background: #f5f5f5;

  @media (max-width: 1300px) {
    width: 100%;
    margin: 20px 0px 0px 0px;
  }

  @media (max-width: 700px) {
    padding: 10px;
  }
`;

const Input = styled.input`
  border: none;
  color: #afafaf;
  margin-left: 15px;
  width: 100%;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #afafaf;
  }
`;
const NavBlock = styled.div`
  @media (max-width: 1300px) {
    display: none;
  }
`;
