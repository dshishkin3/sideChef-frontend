import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";

import RecipeBlock from "../components/recipe/RecipeBlock";
import RecipeSketelon from "../components/recipe/Sketelon";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchRecipe } from "../store/recipes/recipe/asyncActions";
import { useAppDispatch } from "../store/store";

const Recipe: FC = () => {
  const { status } = useTypedSelector((state) => state.recipe);

  const params = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRecipe(Number(params.id)));
  }, []);

  return status === "loading" ? <RecipeSketelon /> : <RecipeBlock />;
};

export default Recipe;
