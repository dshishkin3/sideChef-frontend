import { createSlice } from "@reduxjs/toolkit";

import { Status, Recipe, IRecipeState } from "../recipes.types";

import { fetchRecipe } from "./asyncActions";

const initialState: IRecipeState = {
  item: {} as Recipe,
  status: Status.LOADING,
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRecipe.pending, (state, action) => {
      state.status = Status.LOADING;
      state.item = {} as Recipe;
    });

    builder.addCase(fetchRecipe.fulfilled, (state, action) => {
      state.item = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchRecipe.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.item = {} as Recipe;
    });
  },
});

export const recipeReducer = recipeSlice.reducer;
export const recipeActions = recipeSlice.actions;

export const {} = recipeSlice.actions;
