import { createSlice } from "@reduxjs/toolkit";

import { IRecipesState, Status } from "../recipes.types";

import { fetchTrend } from "./asyncActions";

const initialState: IRecipesState = {
  items: [],
  status: Status.LOADING,
};

export const trendRecipesSlice = createSlice({
  name: "trendRecipes",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTrend.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchTrend.fulfilled, (state, action) => {
      state.items = action.payload.recipes;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchTrend.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const trendRecipesReducer = trendRecipesSlice.reducer;
export const trendRecipesActions = trendRecipesSlice.actions;
