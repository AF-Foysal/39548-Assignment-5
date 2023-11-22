import { configureStore } from "@reduxjs/toolkit";
import cashReducer from "./cashSlice";
import pokemonReducer from "./pokemonSlice";
import word_Reducer from "./wordSlice";
import jeapordyReducer from "./jeapordySlice";

export const store = configureStore({
	reducer: {
		cash: cashReducer,
		pokemon: pokemonReducer,
		word_: word_Reducer,
		jeapordy: jeapordyReducer,
	},
});
