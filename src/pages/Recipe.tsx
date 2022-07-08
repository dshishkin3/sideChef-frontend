import { motion } from "framer-motion";
import React, { FC, useEffect } from "react";
import { FiHeart, FiPlusCircle } from "react-icons/fi";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchRecipe } from "../store/recipes/recipe/asyncActions";
import { useAppDispatch } from "../store/store";
import { addToFavoritesHandler } from "../store/user/asyncActions";

const Recipe: FC = () => {
  const params = useParams();
  const dispatch = useAppDispatch();

  const { item, status } = useTypedSelector((state) => state.recipe);
  const { user } = useTypedSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchRecipe(Number(params.id)));
  }, []);

  const addToFavorites = () => {
    dispatch(addToFavoritesHandler({ recipe: item, id: user!._id }));
  };

  return (
    <>
      {status === "loading" ? (
        <h1>loading...</h1>
      ) : (
        <Container
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Basic>
            <Information>
              <Title>{item.title}</Title>
              <Details>
                <Detail>
                  <span>{item.extendedIngredients.length}</span> Ingredients
                </Detail>
                <Detail>
                  <span>{item.readyInMinutes}</span> Minutes
                </Detail>
                <Detail>
                  <span>{item.servings}</span> Servings
                </Detail>
              </Details>
              <Favorites onClick={addToFavorites}>
                <Heart />
                <p>Add recipe to favorites</p>
              </Favorites>
              <Desc dangerouslySetInnerHTML={{ __html: item.instructions }} />
            </Information>
            <Image alt="recipe image" src={item.image} />
          </Basic>
          <More>
            <Subtitle>Ingredients</Subtitle>
            <Ingredients>
              {item.extendedIngredients.map((ingredient, index) => (
                <Ingredient key={ingredient.id + index}>
                  <Plus />
                  <p>{ingredient.name}</p>
                </Ingredient>
              ))}
            </Ingredients>
            <Subtitle>Diets</Subtitle>
            <Diets>
              {item.diets.map((diet) => (
                <Diet key={diet}>{diet}</Diet>
              ))}
            </Diets>
            <Subtitle>Dish Types</Subtitle>
            <DishTypes>
              {item.dishTypes.map((type) => (
                <DishType key={type}>{type}</DishType>
              ))}
            </DishTypes>
          </More>
        </Container>
      )}
    </>
  );
};

const Container = styled(motion.div)`
  margin-top: 80px;

  @media (max-width: 1450px) {
    margin: 100px 20px 0px 20px;
  }

  @media (max-width: 1100px) {
    margin: 40px 20px 0px 20px;
  }
`;

const Basic = styled.div`
  border-bottom: 1px solid #e2e2e2;
  padding-bottom: 50px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1100px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const Information = styled.div`
  max-width: 410px;
  align-items: center;
  flex-direction: column;
  display: flex;
`;

const Details = styled.div`
  display: flex;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #4a4a4a;
  border-right: 1px solid #ababab;
  padding: 10px 50px;

  &:last-child {
    border-right: none;
    padding-right: 0px;
  }

  &:first-child {
    padding-left: 0px;
  }

  & span {
    font-size: 28px;
  }

  @media (max-width: 500px) {
    padding: 10px 30px;
  }

  @media (max-width: 370px) {
    padding: 10px 20px;
  }
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 26px;
  margin-bottom: 30px;
`;

const Desc = styled.p``;

const Favorites = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  margin: 30px 0px;
  border-bottom: 1px solid #e5e5e5;
  border-radius: 30%;
  padding: 10px;

  & p {
    transition: all 0.3s;
    font-weight: 500;

    &:hover {
      color: #ff950a;
      transition: all 0.3s;
    }
  }

  & svg {
    color: #ff950a;

    &:hover {
      color: #ff950a;
      transition: all 0.3s;
    }
  }
`;

const Heart = styled(FiHeart)`
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1.5em;
  margin-right: 15px;
`;

const Image = styled.img`
  width: 600px;
  max-height: 400px;
  border-radius: 20px;

  @media (max-width: 1100px) {
    margin-bottom: 30px;
    width: 500px;
  }

  @media (max-width: 700px) {
    width: 400px;
  }

  @media (max-width: 450px) {
    width: 350px;
  }

  @media (max-width: 450px) {
    width: 350px;
  }

  @media (max-width: 370px) {
    width: 300px;
  }
`;

const More = styled.div``;

const Ingredients = styled.div``;

const Ingredient = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  & p {
    color: #4d4d4d;
  }
`;

const Plus = styled(FiPlusCircle)`
  margin-right: 10px;
  color: green;
  font-size: 1.5em;
`;

const Subtitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 30px;
`;

const Diets = styled.ul``;

const Diet = styled.li`
  margin-left: 18px;
  margin-bottom: 15px;
`;

const DishTypes = styled.div``;

const DishType = styled.button`
  background-color: #fff;
  border: 1px solid #4d4d4d;
  border-radius: 20px;
  padding: 8px 25px;
  margin-right: 10px;
  margin-bottom: 10px;
  color: #4d4d4d;
`;

export default Recipe;
