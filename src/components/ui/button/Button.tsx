import React, { FC, ReactNode } from "react";
import styled from "styled-components";

interface IButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const Button: FC<IButtonProps> = ({ children, onClick }) => {
  return <Container onClick={onClick}>{children}</Container>;
};

const Container = styled.button`
  width: -webkit-fill-available;
  background: #1e232c;
  border-radius: 8px;
  color: #fff;
  padding: 19px 0px;
  margin-bottom: 30px;
  font-weight: 600;
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    transition: all 0.5s;
    box-shadow: 0px 0px 30px -15px #000000;
  }
`;

export default Button;
