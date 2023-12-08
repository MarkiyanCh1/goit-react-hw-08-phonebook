import { createSlice } from '@reduxjs/toolkit';
import {
  operationUserLogin,
  operationUserLogout,
  operationUserRegiser,
  operationRefreshUser,
} from './operations';

const INITIAL_STATE = {
  token: null,
  user: { email: null, name: null },
  isLoading: false,
  error: null,
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,

  extraReducers: builder => {
    builder

      .addCase(operationUserRegiser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(operationUserRegiser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuth = true;
      })
      .addCase(operationUserRegiser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(operationUserLogin.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(operationUserLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuth = true;
      })
      .addCase(operationUserLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(operationUserLogout.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(operationUserLogout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isAuth = false;
      })
      .addCase(operationUserLogout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(operationRefreshUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(operationRefreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuth = true;
        state.isLoading = false;
      })
      .addCase(operationRefreshUser.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
