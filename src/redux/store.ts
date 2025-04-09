// configureStore permite dividir el estado en multiples archivos
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// tipo del estado global
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;