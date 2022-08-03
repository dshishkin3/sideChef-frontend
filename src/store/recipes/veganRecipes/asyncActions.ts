import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { Recipe } from "../recipes.types";

export const fetchVegan = createAsyncThunk<{ recipes: Recipe[] }>(
  "recipes/fetchVeganRecipesStatus",
  async () => {
    const { data } = await axios.get<{ recipes: Recipe[] }>(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12&tags=vegetarian`
    );

    localStorage.setItem("vegetarian", JSON.stringify(data.recipes));
    return data;
  }
);
