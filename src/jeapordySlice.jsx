
import { createSlice } from '@reduxjs/toolkit';

const jeapordySlice = createSlice({
  name: 'thanemul',
  initialState: {
    question: '',
    answer: '',
    showAnswer: false,
    error: null,
  },
  reducers: {
    setQuestion: (state, action) => {
      state.question = action.payload;
    },
    setAnswer: (state, action) => {
      state.answer = action.payload;
    },
    setShowAnswer: (state, action) => {
      state.showAnswer = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setQuestion,
  setAnswer,
  setShowAnswer,
  setError,
} = jeapordySlice.actions;

export default jeapordySlice.reducer;