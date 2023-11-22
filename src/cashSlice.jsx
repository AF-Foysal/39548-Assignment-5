import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  curr: 'USD',
};

export const cashSlice = createSlice({
  name: "cash",
  initialState,
  reducers: {
    changeCurrency: (state, action) => {
        state.curr = action.payload
    },
  },
});

export const { changeCurrency } = cashSlice.actions

export default cashSlice.reducer
