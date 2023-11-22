import { configureStore } from "@reduxjs/toolkit";
import cashReducer from "./cashSlice";
import pokemonReducer from './pokemonSlice';

export const store = configureStore({
  reducer: {
    cash: cashReducer,
    pokemon: pokemonReducer,
  },
});
