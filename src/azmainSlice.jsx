import { createSlice } from '@reduxjs/toolkit';

const azmainSlice = createSlice({
  name: 'azmain',
  initialState: {
    age: null,
    name: 'azmain',
    error: null,
  },
  reducers: {
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setAge, setName, setError } = azmainSlice.actions;

export default azmainSlice.reducer;