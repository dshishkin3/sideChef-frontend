import { FC, useRef, useState } from "react";
import styled from "styled-components";
import { CgMenuRight } from "react-icons/cg";
import { Link } from "react-router-dom";

import useOnClickOutside from "../../../hooks/onClickOutside";

import Drawer from "./drawer/Drawer";
import Nav from "./nav/Nav";
import Search from "./search/Search";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const node = useRef(null);

  useOnClickOutside(node, () => {
    if (isOpen) {
      setIsOpen(!isOpen);
    }
  });

  return (
    <header>
      <Container>
        <LogoBlock>
          <Link to="/">
            <Logo>
              <LogoImage src="../../logo.png" alt="logo" />
              <LogoTitle>
                SIDE<b>CHEF</b>
              </LogoTitle>
            </Logo>
          </Link>
        </LogoBlock>
        <BugerMenu onClick={() => setIsOpen(!isOpen)} />
        <Search />
        <NavBlock>
          <Nav />
        </NavBlock>
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen} node={node} />
      </Container>
    </header>
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
  width: 38px;
`;

const LogoTitle = styled.p`
  letter-spacing: 2px;
  opacity: 0.7;
`;

const NavBlock = styled.div`
  @media (max-width: 1300px) {
    display: none;
  }
`;

const BugerMenu = styled(CgMenuRight)`
  cursor: pointer;
  font-size: 1.8em;
  display: none;
  @media (max-width: 1300px) {
    display: block;
  }
`;
