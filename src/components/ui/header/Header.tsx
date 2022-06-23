import { FC } from "react";
import styled from "styled-components";

import { FiMoon, FiHeart, FiUser } from "react-icons/fi";

const Header: FC = () => {
  return (
    <Container>
      <LogoBlock>
        <Logo>
          <LogoImage src="./logo.png" alt="logo" />
          <LogoTitle>
            SIDE<b>SHEF</b>
          </LogoTitle>
        </Logo>
      </LogoBlock>
      <Search>
        <SearchIcon src="./header/search.png" alt="search" />
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
  margin: 40px 280px 0px 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoBlock = styled.div`
  display: flex;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
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
  box-shadow: rgba(137, 137, 145, 0.1) 0px 3px 3px 0px;
  border-radius: 30px;
  width: 600px;
  padding: 15px;
`;

const SearchIcon = styled.img`
  margin-right: 15px;
`;

const Input = styled.input`
  border: none;
  color: #afafaf;

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
