import { createSlice } from "@reduxjs/toolkit";

import { fetchSearch } from "./asyncActions";

import { ISearchState, Status } from "./search.types";

const initialState: ISearchState = {
  items: [],
  status: Status.LOADING,
};

export const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearch.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      state.items = action.payload.results;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchSearch.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const searchReducer = searchSlice.reducer;
export const searchActions = searchSlice.actions;

export const {} = searchSlice.actions;
