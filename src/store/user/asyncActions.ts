import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {
  login,
  loginError,
  loginPending,
  register,
  registerError,
  registerPending,
} from "./user.slice";

interface ILogin {
  email: string;
  password: string;
}

interface IRegister {
  username: string;
  email: string;
  password: string;
}

export const loginHandler = createAsyncThunk(
  "user/login",
  async ({ email, password }: ILogin, { dispatch }) => {
    try {
      dispatch(loginPending());
      const res = await axios.post(
        "https://side-shef.herokuapp.com/auth/login",
        {
          email,
          password,
        }
      );
      dispatch(login(res.data));
    } catch (error: any) {
      console.log(error.response.data.message);
      dispatch(loginError(error.response.data.message));
    }
  }
);

export const registerHandler = createAsyncThunk(
  "user/register",
  async ({ username, email, password }: IRegister, { dispatch }) => {
    try {
      dispatch(registerPending());
      const res = await axios.post(
        "https://side-shef.herokuapp.com/auth/registration",
        {
          username,
          email,
          password,
        }
      );
      dispatch(register(res.data));
    } catch (error: any) {
      console.log(error.response.data.message);
      dispatch(registerError(error.response.data.message));
    }
  }
);
