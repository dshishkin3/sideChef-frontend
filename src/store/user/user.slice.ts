import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Recipe } from "../recipes/recipes.types";

import { IUserState, Status, User } from "./user.types";

const initialState: IUserState = {
  user: null,
  status: Status.DEFAULT,
  error: null,
  message: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    // login
    loginPending: (state) => {
      state.status = Status.LOADING;
    },
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.status = Status.SUCCESS;
      state.message = ["You have successfully logged in!"];
    },
    loginError: (state, action: any) => {
      state.user = null;
      state.message = null;
      state.error = action.payload;
      state.status = Status.ERROR;
    },
    // register
    registerPending: (state) => {
      state.status = Status.LOADING;
    },
    register: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.status = Status.SUCCESS;
      state.error = null;
      state.message = ["You have successfully registered!"];
    },
    registerError: (state, action: any) => {
      state.user = null;
      state.status = Status.ERROR;
      state.error = action.payload;
      state.message = null;
    },
    // check user
    checkUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.status = Status.SUCCESS;
      state.error = null;
    },
    // notofications
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = [action.payload];
    },
    setError: (state, action: PayloadAction<string>) => {
      state.message = [action.payload];
    },
    // logout
    logout: (state) => {
      state.user = null;
      state.message = null;
      state.status = Status.DEFAULT;
    },
    // favorites
    addToFavorites: (
      state,
      action: PayloadAction<{ recipe: Recipe; id: string }>
    ) => {
      state.user?.favorites.push(action.payload.recipe);
      state.message = ["Recipe added to favorites!"];
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
      state.message = ["Recipe removed from favorites!"];
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
  setMessage,
  setError,
  logout,
  addToFavorites,
  deleteFromFavorites,
} = userSlice.actions;
