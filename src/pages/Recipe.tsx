import React, { FC } from "react";
import { FiHeart } from "react-icons/fi";
import styled from "styled-components";

const image = "../image.png";

const Recipe: FC = () => {
  return (
    <Container>
      <Basic>
        <Information>
          <Title>Oreo Cookies & Cream No-Bake Cheesecake</Title>
          <Details>
            <Detail>
              <span>4</span> Ingredients
            </Detail>
            <Detail>
              <span>40</span> Minutes
            </Detail>
            <Detail>
              <span>4</span> Servings
            </Detail>
          </Details>
          <Favorites>
            <Heart />
            Add recipe to favorites
          </Favorites>
        </Information>
        <Image alt="recipe image" src={image} />
      </Basic>
      <More>more</More>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 80px;
`;

const Basic = styled.div`
  border-bottom: 1px solid #e2e2e2;
  padding-bottom: 50px;
  display: flex;
  justify-content: space-between;
`;

const More = styled.div``;

const Information = styled.div``;

const Details = styled.div`
  display: flex;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #4a4a4a;
  border-right: 1px solid #ababab;
  padding: 10px 40px;

  &:last-child {
    border-right: none;
  }

  &:first-child {
    padding-left: 0px;
  }

  & span {
    font-size: 28px;
  }
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 26px;
  margin-bottom: 30px;
`;

const Favorites = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 30px;

  &:hover {
    color: #ff950a;
    transition: all 0.2s;
  }
`;

const Heart = styled(FiHeart)`
  cursor: pointer;
  transition: all 0.1s;
  font-size: 1.5em;
  margin-right: 15px;
  /* color: #ff950a; */

  &:hover {
    color: #ff950a;
    transition: all 0.1s;
  }
`;

const Image = styled.img``;

export default Recipe;
