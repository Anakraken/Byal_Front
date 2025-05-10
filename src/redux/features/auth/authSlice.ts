import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser } from './authThunks';
import { errorEquivalence } from '../../api/errorHandlers';

type AuthInitialStateProps = {
  email: string;
  username?: string;
  password: string;
  avatar?: string;
  rol: string | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
};

const authInitialState: AuthInitialStateProps = {
  email: '',
  username: '',
  password: '',
  avatar: '',
  rol: null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    clearAuthError: (state) => {
      state.error = null;
    },
    setUser: (state, action) => {
      const { email, username, rol, avatar } = action.payload;
      state.email = email;
      state.username = username;
      state.rol = rol;
      state.avatar = avatar;
      state.rol = action.payload.rol;
      state.isAuthenticated = true;
    },
    clearUser: (state) => {
      state.email = '';
      state.username = '';
      state.password = '';
      state.rol = null;
      state.isAuthenticated = false;
      state.avatar = '';
    },
  },
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
        Object.assign(state, action.payload);
      })
      .addCase(registerUser.rejected, (state, action) => {
        const fullError = errorEquivalence(action.payload as object | null);

        state.loading = false;
        state.error = fullError;
      })

    //Validaciones del login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        const { email, username, rol, avatar } = action.payload.data;
        authSlice.caseReducers.setUser(state, { payload: { email, username, rol, avatar }, type: 'auth/setUser' });
      })      
      .addCase(loginUser.rejected, (state, action) => {
        const fullError = errorEquivalence(action.payload as object | null);

        state.loading = false;
        state.error = fullError;
      })
      
      //Validaciones para el logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.email = '';
        state.username = '';
        state.password = '';
        state.rol = '';
        state.avatar = '';
        state.error = null;
        state.loading = false;
    });
  }
});

export const { clearAuthError, setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;