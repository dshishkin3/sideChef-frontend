import { combineReducers } from "@reduxjs/toolkit";
import { trendRecipesReducer } from "./recipes/trendRecipes/trendRecipes.slice";
import { veganRecipesReducer } from "./recipes/veganRecipes/veganRecipes.slice";

export const rootReducer = combineReducers({
  veganRecipes: veganRecipesReducer,
  trendRecipes: trendRecipesReducer,
});
