import type { Cast } from '@/types';
import axios from 'axios';

// Function to fetch movie details by ID
export const getCast = async (id: string) => {
  try {
    // Make a GET request to the API endpoint with the provided movie ID and API key

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.API_KEY}`
    );

    // Extract relevant data from the response and map it to the MovieDetails type
    const cast: Cast[] = response.data.cast.map((cast: Cast) => {
      return {
        id: cast.id,
        profile_path: cast.profile_path,
        name: cast.name,
        character: cast.character,
        known_for_department: cast.known_for_department,
      };
    });
    return cast; // Return the movie details object
  } catch (error) {
    return null; // Return null if an error occurs during the API request
  }
};
