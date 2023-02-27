import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlide';

export const store = configureStore({
  reducer: {
    user: userReducer,
  }
});
