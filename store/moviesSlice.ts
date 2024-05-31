import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import type { Movie } from '@/types';
import { getMovies } from '@/actions/get-movies';

interface MoviesState {
  movies: Movie[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | undefined;
  currentPage: number;
  totalPages: number;
}

const initialState: MoviesState = {
  movies: [],
  status: 'idle',
  error: undefined,
  currentPage: 1,
  totalPages: 1,
};

export const fetchMovies = createAsyncThunk('movies/fetchMovies', getMovies);

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload.movies;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setPage } = moviesSlice.actions;

export default moviesSlice.reducer;
