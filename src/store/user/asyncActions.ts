import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Recipe } from "../recipes/recipes.types";

import {
  addToFavorites,
  checkUser,
  deleteFromFavorites,
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

export interface IUpdate {
  _id: string;
  username?: string;
  email?: string;
  password?: string;
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

export const updateHandler = createAsyncThunk(
  "user/update",
  async ({ form }: { form: IUpdate }) => {
    try {
      await axios.post(`https://side-shef.herokuapp.com/users/change`, {
        ...form,
      });
      fetchUser(form._id);
      alert("User data updated");
    } catch (error: any) {
      console.log(error);
    }
  }
);

export const fetchUser = createAsyncThunk(
  "user/auth",
  async function (id: string, { dispatch }) {
    try {
      const res = await axios.post(
        `https://side-shef.herokuapp.com/users/check`,
        { _id: id }
      );
      dispatch(checkUser(res.data));
    } catch (error: any) {
      console.log(error);
    }
  }
);

export const addToFavoritesHandler = createAsyncThunk(
  "user/addToFavorites",
  async function (
    { recipe, id }: { recipe: Recipe; id: string },
    { dispatch }
  ) {
    try {
      await axios.post(`https://side-shef.herokuapp.com/users/addToFavorites`, {
        recipe: recipe,
        _id: id,
      });
      dispatch(addToFavorites({ recipe, id }));
      alert("Recipe added to favorites!");
    } catch (error: any) {
      console.log(error);
    }
  }
);

export const deleteFromFavoritesHandler = createAsyncThunk(
  "user/deleteFromFavorites",
  async function (
    { idProduct, id }: { idProduct: number; id: string },
    { dispatch }
  ) {
    try {
      await axios.post(
        `https://side-shef.herokuapp.com/users/deleteFromFavorites`,
        {
          idProduct: idProduct,
          _id: id,
        }
      );
      dispatch(deleteFromFavorites({ idProduct, id }));
      alert("Recipe deleted from favorites!");
    } catch (error: any) {
      console.log(error);
    }
  }
);
