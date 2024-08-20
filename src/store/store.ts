import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './dashboarSlice';

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
});