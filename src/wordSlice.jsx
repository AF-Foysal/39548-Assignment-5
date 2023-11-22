import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	word: "mechanic",
};

export const wordSlice = createSlice({
	name: "word_",
	initialState,
	reducers: {
		changeWord: (state, action) => {
			state.word = action.payload;
		},
	},
});

export const { changeWord } = wordSlice.actions;

export default wordSlice.reducer;
