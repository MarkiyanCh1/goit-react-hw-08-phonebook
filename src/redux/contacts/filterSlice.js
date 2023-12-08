import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'contacts',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
})

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
