import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  userRegiser,
  userLogin,
  userLogout,
  refreshUser,
  setToken,
} from 'services/api';

export const operationUserLogin = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const response = await userLogin(userData);
      return response;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const operationUserRegiser = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const response = await userRegiser(userData);
      return response;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const operationRefreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (token === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setToken(token);
      const response = await refreshUser();
      return response;

    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const operationUserLogout = createAsyncThunk(
  'auth/logOut',
  async (_, thunkAPI) => {
    try {
      await userLogout();
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


