import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { trendRecipesActions } from "../store/recipes/trendRecipes/trendRecipes.slice";
import { veganRecipesActions } from "../store/recipes/veganRecipes/veganRecipes.slice";

const allActions = {
  ...veganRecipesActions,
  ...trendRecipesActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};
