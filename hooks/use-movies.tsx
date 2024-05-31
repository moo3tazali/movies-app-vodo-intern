'use client';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useRef } from 'react';

import { AppDispatch, AppStore, RootState } from '@/store';
import { fetchMovies } from '@/store/moviesSlice';

// Custom hook to access the Redux dispatch function with proper types
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

// Custom hook to access the Redux store state with proper types
const useAppSelector = useSelector.withTypes<RootState>();

// Custom hook to access the Redux store with proper types
const useAppStore = useStore.withTypes<AppStore>();

// Custom hook to manage movie-related data
export const useMovies = () => {
  const store = useAppStore(); // Access the Redux store
  const initialized = useRef(false); // useRef to track initialization state

  // Select movie-related data from the Redux store state using useSelector
  const { movies, status, currentPage, totalPages } = useAppSelector(
    (state) => state.movies
  );

  // If the hook is not initialized yet, dispatch the fetchMovies action to load movies
  if (!initialized.current) {
    store.dispatch(fetchMovies(currentPage));
    initialized.current = true;
  }

  // Return movie-related data
  return { movies, status, currentPage, totalPages };
};
