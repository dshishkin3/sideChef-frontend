import { FC } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FiHeart, FiMoon } from "react-icons/fi";
import { Link } from "react-router-dom";

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
          <Arrow />
          <Name>Dmitry</Name>
          <Image src="../../header/shef.png" />
        </Header>
        <NavItems>
          <Item>
            <Link
              to="/favorites"
              style={{ display: "flex" }}
              onClick={() => setIsOpen(false)}
            >
              <ItemName>Favorites</ItemName>
              <Favorites />
            </Link>
          </Item>
          <Item>
            <ItemName>Toggle theme</ItemName>
            <Moon />
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

const Arrow = styled(MdOutlineKeyboardArrowLeft)`
  font-size: 2em;
  color: #636363;
  margin-right: 20px;
`;

const Name = styled.p`
  font-weight: 600;
  margin-right: 15px;
`;

const Image = styled.img`
  width: 45px;
`;

const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding-right: 20px;
`;

const Item = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 20px;

  &:hover {
    color: #ff950a;
    transition: all 0.3s;
  }
`;

const ItemName = styled.p`
  margin-right: 15px;
  font-size: 18px;
`;

const Favorites = styled(FiHeart)`
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1.8em;
`;

const Moon = styled(FiMoon)`
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1.8em;
  margin-right: 30px;
`;
