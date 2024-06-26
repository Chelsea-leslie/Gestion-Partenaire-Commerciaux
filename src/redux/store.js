import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // Crée un répertoire reducers pour gérer les slices

const store = configureStore({
  reducer: rootReducer,
});

export default store;
