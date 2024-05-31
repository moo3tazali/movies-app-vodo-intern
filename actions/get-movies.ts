import axios from 'axios';

import type { Genre } from '@/types';

// Function to fetch a list of movies with their genres to be added to redux thunk function
export const getMovies = async (page = 1) => {
  // Make a GET request to fetch a list of movies based on the specified page number
  const moviesResponse = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&page=${page}`
  );

  // Make a GET request to fetch a list of movie genres
  const genreResponse = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}`
  );

  // Map the movie data to a custom format
  const movies = moviesResponse.data.results.map((movie: any) => {
    return {
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      original_language: movie.original_language,
      vote_average: movie.vote_average,
      genres: movie.genre_ids.map(
        (id: number) =>
          genreResponse.data.genres.find((genre: Genre) => genre.id === id).name
        // Map genre IDs to genre names by finding the corresponding genre object in the genre list
      ),
    };
  });

  const totalPages = moviesResponse.data.total_pages; // Total number of pages of movies
  return { movies, totalPages }; // Return the list of movies and the total number of pages
};
