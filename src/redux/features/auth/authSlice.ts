import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser } from './authThunks';
import { errorEquivalence } from '../../../lib/form-validations';

type AuthInitialStateProps = {
  email: string;
  username?: string;
  password: string;
  loading: boolean;
  error: string | null;
};

const authInitialState: AuthInitialStateProps = {
  email: '',
  username: '',
  password: '',
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    //Validaciones del registro
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        // guardar datos del usuario registrado:
        // Object.assign(state, action.payload);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = errorEquivalence(action.payload as string);
      })

    //Validaciones del login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = errorEquivalence(action.payload as string);
      });
  }
});

export default authSlice.reducer;