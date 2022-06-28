import { createSlice } from "@reduxjs/toolkit";

import { IRecipesState, Status } from "../recipes.types";
import { fetchVegan } from "./asyncActions";

const initialState: IRecipesState = {
  items: [],
  status: Status.LOADING,
};

export const veganRecipesSlice = createSlice({
  name: "veganRecipes",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVegan.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchVegan.fulfilled, (state, action) => {
      state.items = action.payload.recipes;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchVegan.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const veganRecipesReducer = veganRecipesSlice.reducer;
export const veganRecipesActions = veganRecipesSlice.actions;

export const {} = veganRecipesSlice.actions;
