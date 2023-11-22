import { configureStore } from "@reduxjs/toolkit";
import cashReducer from "./cashSlice";
import pokemonReducer from './pokemonSlice';
import jeapordyReducer from './jeapordySlice'

export const store = configureStore({
  reducer: {
    cash: cashReducer,
    pokemon: pokemonReducer,
    jeapordy: jeapordyReducer,
  },
});
