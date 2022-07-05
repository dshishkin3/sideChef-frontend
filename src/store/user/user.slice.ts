import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUserState, Status, User } from "./user.types";

const initialState: IUserState = {
  user: null,
  status: Status.LOADING,
  message: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.message = "Вы успешно вошли!";
    },
    loginError: (state, action: any) => {
      state.user = null;
      state.message = action.payload;
    },
    register: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.message = "Вы успешно зарегистрировались!";
    },
    registerError: (state, action: any) => {
      state.user = null;
      state.message = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;

export const { login, loginError, register, registerError } = userSlice.actions;
