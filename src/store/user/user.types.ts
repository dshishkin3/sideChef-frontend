import { Recipe } from "../recipes/recipes.types";

export interface IUserState {
  user: User | null;
  status: Status;
  error: null | string[];
  message: null | string[];
}

export type User = {
  _id: string;
  username: string;
  email: string;
  password: string;
  favorites: Recipe[];
};

export enum Status {
  DEFAULT = "default",
  LOADING = "loading",
  SUCCESS = "completed",
  ERROR = "error",
}
