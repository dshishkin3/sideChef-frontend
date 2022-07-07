export interface IUserState {
  user: User | null;
  status: Status;
  message: null | string[];
}

export type User = {
  _id: string;
  username: string;
  email: string;
  password: string;
  favorites: [];
};

export enum Status {
  DEFAULT = "default",
  LOADING = "loading",
  SUCCESS = "completed",
  ERROR = "error",
}
