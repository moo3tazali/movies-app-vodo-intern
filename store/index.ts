import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '@/store/moviesSlice';

// Function to create the Redux store
export const makeStore = () => {
  return configureStore({
    reducer: {
      movies: moviesReducer, // Register moviesReducer under the 'movies' slice
    },
  });
};

// Infer the type of makeStore function and export it as AppStore
export type AppStore = ReturnType<typeof makeStore>;

// Infer the RootState type from the store's state
export type RootState = ReturnType<AppStore['getState']>;

// Infer the AppDispatch type from the store's dispatch function
export type AppDispatch = AppStore['dispatch'];
