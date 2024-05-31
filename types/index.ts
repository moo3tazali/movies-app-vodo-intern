export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  original_language: string;
  vote_average: number;
  genres: string[] | number[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieDetails {
  id: number;
  title: string;
  tagline: string;
  overview: string;
  release_date: string;
  background_path: string;
  poster_path: string;
  genres: string[];
  original_language: string;
  vote_average: number;
}
