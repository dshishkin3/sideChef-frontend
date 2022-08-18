import { createSlice } from "@reduxjs/toolkit";

import { fetchCuisine } from "./asyncActions";

import { ICuisineState, Status } from "./cuisine.types";

const initialState: ICuisineState = {
  items: [],
  status: Status.LOADING,
};

export const cuisineSlice = createSlice({
  name: "cuisine",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCuisine.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchCuisine.fulfilled, (state, action) => {
      state.items = action.payload.results;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchCuisine.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const cuisineReducer = cuisineSlice.reducer;
export const cuisineActions = cuisineSlice.actions;
