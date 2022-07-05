import {
  ChangeEvent,
  FC,
  FormEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { CgMenu } from "react-icons/cg";
import { Link, useNavigate, useParams } from "react-router-dom";

import Drawer from "./drawer/Drawer";
import Nav from "./nav/Nav";
import useOnClickOutside from "../../../hooks/onClickOutside";
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
                SIDE<b>SHEF</b>
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
`;

// const Search = styled.div`
//   display: flex;
//   align-items: center;
//   border-radius: 30px;
//   width: 600px;
//   padding: 15px;
//   background: #f5f5f5;

//   @media (max-width: 1300px) {
//     width: 100%;
//     margin: 20px 0px 0px 0px;
//   }

//   @media (max-width: 700px) {
//     padding: 10px;
//   }
// `;

// const Input = styled.input`
//   border: none;
//   color: #afafaf;
//   margin-left: 15px;
//   width: 100%;

//   &:focus {
//     outline: none;
//   }

//   &::placeholder {
//     color: #afafaf;
//   }
// `;
const NavBlock = styled.div`
  @media (max-width: 1300px) {
    display: none;
  }
`;

const BugerMenu = styled(CgMenu)`
  cursor: pointer;
  font-size: 1.5em;
  display: none;
  @media (max-width: 1300px) {
    display: block;
  }
`;
