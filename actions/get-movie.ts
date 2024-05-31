import type { Genre, MovieDetails } from '@/types';
import axios from 'axios';

// Function to fetch movie details by ID
export const getMovie = async (id: string) => {
  try {
    // Make a GET request to the API endpoint with the provided movie ID and API key

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
    );

    // Extract relevant data from the response and map it to the MovieDetails type
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
    return movie; // Return the movie details object
  } catch (error) {
    return null; // Return null if an error occurs during the API request
  }
};
