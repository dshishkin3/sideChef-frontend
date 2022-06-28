import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { rootReducer } from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type TypeRootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
