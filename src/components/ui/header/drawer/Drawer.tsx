import { FC } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiUser } from "react-icons/bi";

interface IDrawerProps {
  isOpen: boolean;
  setIsOpen: (arg0: boolean) => void;
  node: any;
}

interface IContainerProps {
  isOpen: boolean;
}

const Drawer: FC<IDrawerProps> = ({ isOpen, setIsOpen, node }) => {
  return ReactDOM.createPortal(
    <>
      <Blur isOpen={isOpen} />
      <Container isOpen={isOpen} ref={node}>
        <Header to="/profile" onClick={() => setIsOpen(false)}>
          <Image src="../../logo.png" />
          <LogoTitle>
            SIDE<b>SHEF</b>
          </LogoTitle>
        </Header>
        <NavItems>
          <Item
            to="/profile"
            style={{ display: "flex", alignItems: "center" }}
            onClick={() => setIsOpen(false)}
          >
            <MdOutlineKeyboardArrowLeft size={20} color="#424242" />
            <ItemName>Profile</ItemName>
            <BiUser size={22} color="#424242" />
          </Item>
          <Item
            to="/favorites"
            style={{ display: "flex", alignItems: "center", marginRight: 20 }}
            onClick={() => setIsOpen(false)}
          >
            <MdOutlineKeyboardArrowLeft size={20} color="#424242" />
            <ItemName>Favorites</ItemName>
            <IoMdHeartEmpty size={22} color="#424242" />
          </Item>
        </NavItems>
      </Container>
    </>,
    document.body
  );
};

export default Drawer;

const Container = styled.div<IContainerProps>`
  position: fixed;
  width: 100%;
  height: 100%;
  right: 0;
  top: 0;
  z-index: 5;
  background: #fff;
  transform: ${(props) =>
    props.isOpen ? "translate(30%)" : "translate(100%)"};
  transition: all 0.45s;
  display: flex;
  flex-direction: column;
  padding-left: 25%;

  @media (max-width: 830px) {
    padding-left: 20%;
  }

  @media (max-width: 600px) {
    padding-left: 10%;
  }

  @media (max-width: 450px) {
    padding-left: 5%;
  }
`;

const Blur = styled.div<IContainerProps>`
  left: 0;
  top: 0;
  width: ${(props) => (props.isOpen ? "100vw" : "0")};
  height: 100vh;
  backdrop-filter: ${(props) => (props.isOpen ? "blur(2px)" : "blur(0px)")};
  position: absolute;
  transition: all 0.45s;
  right: ${(props) => (props.isOpen ? "100%" : "")};
  z-index: 5;
`;

const Header = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 40px;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 20px;
  justify-content: center;
  cursor: pointer;
  padding: 20px;
  padding-right: 40px;
`;

const Image = styled.img`
  margin-right: 10px;
  width: 38px;
`;

const LogoTitle = styled.p`
  letter-spacing: 2px;
  opacity: 0.7;
`;

const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
`;

const Item = styled(Link)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 20px 0px 10px 0px;

  &:hover {
    background-color: #fbfbfb;
    transition: all 0.3s;
  }
`;

const ItemName = styled.p`
  margin-right: 15px;
  font-size: 18px;
  font-weight: 500;
  color: #424242;
  margin-left: 15px;
`;
