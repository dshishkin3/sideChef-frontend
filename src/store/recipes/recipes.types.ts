export interface IRecipesState {
  items: Recipe[];
  status: Status;
}

export interface IRecipeState {
  item: Recipe;
  status: Status;
}

export type Recipe = {
  id: number;
  title: string;
  image: string;
  instructions: string;
  diets: string[];
  dishTypes: string[];
  extendedIngredients: any[];
  readyInMinutes: number;
  servings: number;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "completed",
  ERROR = "error",
}
