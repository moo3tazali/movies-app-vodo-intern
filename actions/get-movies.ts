import axios from 'axios';

import type { Genre } from '@/types';

export const getMovies = async (page = 1) => {
  const moviesResponse = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&page=${page}`
  );

  const genreResponse = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}`
  );

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
      ),
    };
  });

  const totalPages = moviesResponse.data.total_pages;
  return { movies, totalPages };
};
