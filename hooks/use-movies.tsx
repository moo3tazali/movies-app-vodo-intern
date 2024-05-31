'use client';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useRef } from 'react';

import { AppDispatch, AppStore, RootState } from '@/store';
import { fetchMovies } from '@/store/moviesSlice';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
const useAppSelector = useSelector.withTypes<RootState>();
const useAppStore = useStore.withTypes<AppStore>();

export const useMovies = () => {
  const store = useAppStore();
  const initialized = useRef(false);
  const { movies, status, currentPage, totalPages } = useAppSelector(
    (state) => state.movies
  );

  if (!initialized.current) {
    store.dispatch(fetchMovies(currentPage));
    initialized.current = true;
  }

  return { movies, status, currentPage, totalPages };
};
