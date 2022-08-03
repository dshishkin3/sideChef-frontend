import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { Cuisine } from "./cuisine.types";

export const fetchCuisine = createAsyncThunk(
  "cuisine/fetchCuisine",
  async (name: string) => {
    const { data } = await axios.get<{ results: Cuisine[] }>(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=
        ${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=12`
    );
    // localStorage.setItem("cuisine", JSON.stringify(data.results));
    return data;
  }
);
