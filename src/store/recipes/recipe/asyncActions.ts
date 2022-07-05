import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { Recipe } from "../recipes.types";

export const fetchRecipe = createAsyncThunk(
  "recipe/fetchRecipe",
  async (id: number) => {
    const { data } = await axios.get<Recipe>(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );

    return data;
  }
);
