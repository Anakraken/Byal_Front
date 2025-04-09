import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerRequest, loginRequest} from '../../api/auth';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData: { email: string; username?: string; password: string }, thunkAPI) => {
    try {
      const response = await registerRequest(userData);
      return {
        data: response.data,
        status: response.status
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await loginRequest(userData);
      return {
        data: response.data,
        status: response.status
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);