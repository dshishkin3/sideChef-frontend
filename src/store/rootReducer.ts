import { combineReducers } from "@reduxjs/toolkit";

import { cuisineReducer } from "./cuisine/cuisine.slice";
import { recipeReducer } from "./recipes/recipe/recipe.slice";
import { trendRecipesReducer } from "./recipes/trendRecipes/trendRecipes.slice";
import { veganRecipesReducer } from "./recipes/veganRecipes/veganRecipes.slice";
import { searchReducer } from "./search/search.slice";
import { userReducer } from "./user/user.slice";

export const rootReducer = combineReducers({
  veganRecipes: veganRecipesReducer,
  trendRecipes: trendRecipesReducer,
  recipe: recipeReducer,
  cuisine: cuisineReducer,
  search: searchReducer,
  user: userReducer,
});
