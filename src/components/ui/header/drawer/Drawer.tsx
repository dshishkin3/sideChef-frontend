import React, { FC } from "react";
import styled from "styled-components";
import { CgMenu } from "react-icons/cg";

const Drawer: FC = () => {
  return (
    <Container>
      <BugerMenu />
    </Container>
  );
};

export default Drawer;

const Container = styled.div`
  display: none;

  @media (max-width: 1300px) {
    display: block;
  }
`;

const BugerMenu = styled(CgMenu)`
  cursor: pointer;
  font-size: 1.5em;
`;
