import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../recipes/recipes.types";

import { IUserState, Status, User } from "./user.types";

const initialState: IUserState = {
  user: null,
  status: Status.DEFAULT,
  message: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginPending: (state) => {
      state.status = Status.LOADING;
    },
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.status = Status.SUCCESS;
      state.message = null;
    },
    loginError: (state, action: any) => {
      state.user = null;
      state.message = action.payload;
      state.status = Status.ERROR;
    },
    registerPending: (state) => {
      state.status = Status.LOADING;
    },
    register: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.status = Status.SUCCESS;
      state.message = null;
    },
    registerError: (state, action: any) => {
      state.user = null;
      state.status = Status.ERROR;
      state.message = action.payload;
    },
    checkUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.status = Status.SUCCESS;
      state.message = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.message = [action.payload];
    },
    logout: (state) => {
      state.user = null;
      state.message = null;
      state.status = Status.DEFAULT;
    },
    addToFavorites: (
      state,
      action: PayloadAction<{ recipe: Recipe; id: string }>
    ) => {
      state.user?.favorites.push(action.payload.recipe);
    },
    deleteFromFavorites: (
      state,
      action: PayloadAction<{ idProduct: number; id: string }>
    ) => {
      if (state.user !== null) {
        state!.user.favorites = state!.user.favorites.filter(
          (item) => item.id !== action.payload.idProduct
        );
      }
    },
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;

export const {
  login,
  loginPending,
  loginError,
  register,
  registerPending,
  registerError,
  checkUser,
  setError,
  logout,
  addToFavorites,
  deleteFromFavorites,
} = userSlice.actions;
