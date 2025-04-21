import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerRequest, loginRequest, logoutRequest} from '../../api/auth';
import { RegisterFormDataProps, LoginFormDataProps} from '../../../lib/types/authType';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData: RegisterFormDataProps, thunkAPI) => {
    try {
      const response = await registerRequest(userData);
      return {
        data: response.data,
        status: response.status
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData: LoginFormDataProps, thunkAPI) => {
    try {
      const response = await loginRequest(userData);
      return {
        data: response.data,
        status: response.status
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, thunkAPI) => {
    try {
      const response = await logoutRequest();
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || "Error al cerrar seción");
    }
  }
);