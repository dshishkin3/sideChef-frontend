import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { Recipe } from "../recipes.types";

export const fetchTrend = createAsyncThunk<{ recipes: Recipe[] }>(
  "recipes/fetchTrendRecipesStatus",
  async () => {
    const { data } = await axios.get<{ recipes: Recipe[] }>(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`
    );

    localStorage.setItem("trending", JSON.stringify(data.recipes));
    return data;
  }
);
