import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import asigUnidsReducer from './features/asigUnids/asigUnidsSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  auth: authReducer,
  asigUnids: asigUnidsReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth','asigUnids'], // qué slices quieres guardar
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // <- Necesario para redux-persist
    }),
});


export const persistor = persistStore(store); // <- 🔥 Esto es lo que usarás en logout

//Agregan el type al estado global
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


//  El estado de autenticación persista al recargar la página (o al cerrar y volver a abrir).

//  Si cerramos sesión, borramos también ese estado persistido.