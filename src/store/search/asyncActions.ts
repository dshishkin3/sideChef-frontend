import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Recipe } from "./search.types";

export const fetchSearch = createAsyncThunk(
  "cuisine/fetchCuisine",
  async (name: string) => {
    const { data } = await axios.get<{ results: Recipe[] }>(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=12`
    );
    // localStorage.setItem("cuisine", JSON.stringify(data.results));
    return data;
  }
);
