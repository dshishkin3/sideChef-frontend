import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface ICardProps {
  image: string;
  title: string;
  id: number;
}

const Card: FC<ICardProps> = ({ image, title, id }) => {
  return (
    <Link to={`/recipe/${id}`}>
      <Container>
        <Image src={image} alt="" />
        <Name>{title}</Name>
        <Gradient />
      </Container>
    </Link>
  );
};

const Container = styled.div`
  cursor: pointer;
  display: inline-block;
  min-height: 15rem;
  width: 21rem;
  overflow: hidden;
  position: relative;
  border-radius: 2rem;
  margin-bottom: 15px;

  @media (max-width: 1400px) {
    width: 20rem;
  }

  @media (max-width: 1035px) {
    width: 19rem;
  }

  @media (max-width: 990px) {
    min-height: 13rem;
    width: 16rem;
  }
  @media (max-width: 650px) {
    min-height: 9rem;
    width: 12rem;
  }

  @media (max-width: 445px) {
    min-height: 7rem;
    width: 10rem;
  }
`;

const Image = styled.img`
  border-radius: 20px;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Name = styled.p`
  position: absolute;
  left: 50%;
  z-index: 10;
  bottom: 0%;
  transform: translate(-50%, 0%);
  font-weight: 600;
  color: #fff;
  font-size: 14px;
  letter-spacing: 1px;
  text-align: center;
  display: flex;
  justify-content: center;
  height: 40%;

  @media (max-width: 650px) {
    font-size: 10px;
    height: 50%;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Card;
