import { configureStore } from '@reduxjs/toolkit';

import { modalReducer } from './modal/modalSlice';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from '../redux/authorization/authSlice';
import storage from 'redux-persist/lib/storage';
import { boardsReducer } from './cards/cardsSlice';
import { menuModeReducer } from './menu/menuSlice';

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const persistedAuthReducer = persistReducer(authConfig, authReducer);
export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    modal: modalReducer,
    dashboards: boardsReducer,
    menuMode: menuModeReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
