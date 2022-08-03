import { motion } from "framer-motion";
import React, { FC } from "react";
import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";

import Card from "../components/ui/card/Card";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useAppDispatch } from "../store/store";
import { deleteFromFavoritesHandler } from "../store/user/asyncActions";

const Favorites: FC = () => {
  const { user } = useTypedSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const deleteFromFavorites = (id: number) => {
    dispatch(deleteFromFavoritesHandler({ idProduct: id, id: user!._id }));
  };

  return (
    <Container
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title>Featured Recipes</Title>
      {/* user not found */}
      {!user && (
        <Error>
          You must be logged in <br /> to add a product to your favorites :(
        </Error>
      )}
      {/* favorites array empty */}
      {user && user.favorites.length < 1 && (
        <Error>Your favorites list is empty :(</Error>
      )}
      <Recipes>
        {user?.favorites.map((fav) => (
          <Recipe key={fav.id}>
            <Card image={fav.image} title={fav.title} id={fav.id} />
            <Delete onClick={() => deleteFromFavorites(fav.id)}>
              <TrashIcon />
              <p>Remove recipe from favorites</p>
            </Delete>
          </Recipe>
        ))}
      </Recipes>
    </Container>
  );
};

const Container = styled(motion.div)`
  margin-top: 80px;
`;

const Title = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 32px;
`;

const Error = styled.p`
  text-align: center;
  margin-top: 80px;
  font-size: 20px;
  font-weight: bold;
  color: #545454;
`;

const Recipes = styled.div`
  margin-top: 20px;
  display: flex;

  & div {
    margin-right: 20px;
  }
`;

const Recipe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Delete = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  & p {
    font-size: 14px;
    font-weight: 700;
    color: #4b4b4b;
    margin-left: 5px;
    transition: all 0.3s;
  }

  &:hover p {
    color: #e23c3c;
    transition: all 0.3s;
  }

  &:hover svg {
    color: #e23c3c;
    transition: all 0.3s;
  }
`;

const TrashIcon = styled(AiOutlineDelete)`
  font-size: 1.3em;
  transition: all 0.3s;
  color: #4b4b4b;
`;

export default Favorites;
