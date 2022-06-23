import { FC, ReactNode } from "react";
import styled from "styled-components";

import Header from "../header/Header";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <Container>
      <FruitLeft src="./header/leftFruit.png" alt="left fruit" />
      <FruitRight src="./header/rightFruit.png" alt="right fruit" />
      <Header />
      {children}
    </Container>
  );
};

export default Layout;

const Container = styled.div``;

const FruitLeft = styled.img`
  position: absolute;
  left: 0;
  top: 0;
`;

const FruitRight = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;
