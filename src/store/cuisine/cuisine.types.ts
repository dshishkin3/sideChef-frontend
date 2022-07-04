export interface ICuisineState {
  items: Cuisine[];
  status: Status;
}

export type Cuisine = {
  id: number;
  title: string;
  image: string;
  imageType: string;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "completed",
  ERROR = "error",
}
