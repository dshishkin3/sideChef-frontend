import { combineReducers } from "@reduxjs/toolkit";
import { cuisineReducer } from "./cuisine/cuisine.slice";
import { trendRecipesReducer } from "./recipes/trendRecipes/trendRecipes.slice";
import { veganRecipesReducer } from "./recipes/veganRecipes/veganRecipes.slice";
import { searchReducer } from "./search/search.slice";

export const rootReducer = combineReducers({
  veganRecipes: veganRecipesReducer,
  trendRecipes: trendRecipesReducer,
  cuisine: cuisineReducer,
  search: searchReducer,
});
