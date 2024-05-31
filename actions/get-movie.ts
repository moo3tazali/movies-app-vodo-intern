import { Genre, MovieDetails } from '@/types';
import axios from 'axios';

export const getMovie = async (id: string) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
    );

    const movie: MovieDetails = {
      id: response.data.id,
      background_path: response.data.backdrop_path,
      genres: response.data.genres.map((genre: Genre) => genre.name),
      original_language: response.data.original_language,
      tagline: response.data.tagline,
      title: response.data.title,
      overview: response.data.overview,
      poster_path: response.data.poster_path,
      release_date: response.data.release_date,
      vote_average: response.data.vote_average.toFixed(2),
    };
    return movie;
  } catch (error) {
    return null;
  }
};
