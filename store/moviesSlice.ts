import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Movie } from '@/types';
import { getMovies } from '@/actions/get-movies';

// Define the shape of the movies state
interface MoviesState {
  movies: Movie[]; // Array of movies
  status: 'idle' | 'loading' | 'succeeded' | 'failed'; // Status of the async operation
  error: string | undefined; // Error message if fetch fails
  currentPage: number; // Current page of fetched movies
  totalPages: number; // Total number of pages
}

// Initial state of the movies slice
const initialState: MoviesState = {
  movies: [], // Empty array of movies
  status: 'idle', // Initial status is 'idle'
  error: undefined, // No initial error message
  currentPage: 1, // Initial page is 1
  totalPages: 1, // Initial total pages is 1
};

// Async thunk for fetching movies
export const fetchMovies = createAsyncThunk('movies/fetchMovies', getMovies);

// Create a movies slice using createSlice function from Redux Toolkit
const moviesSlice = createSlice({
  name: 'movies', // Name of the slice
  initialState, // Initial state
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload; // Update currentPage based on action payload
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle pending (loading) state of fetchMovies
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      // Handle fulfilled (success) state of fetchMovies
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload.movies; // Update movies array
        state.totalPages = action.payload.totalPages; // Update totalPages
      })
      // Handle rejected (failure) state of fetchMovies
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message; // Set error message
      });
  },
});

// Export actions from the movies slice
export const { setPage } = moviesSlice.actions;

// Export reducer function from the movies slice
export default moviesSlice.reducer;
