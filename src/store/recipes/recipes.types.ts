export interface IRecipesState {
  items: Recipe[];
  status: Status;
}

export type Recipe = {
  id: number;
  title: string;
  image: string;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "completed",
  ERROR = "error",
}
