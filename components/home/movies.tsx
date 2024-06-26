'use client';

import { useMovies } from '@/hooks/use-movies';
import { MovieCard } from '@/components/home/movie-card';
import { Loader } from '@/components/ui/loader';
import { Error } from '@/components/ui/error';
import { useSearch } from '@/hooks/use-search';

export const Movies = () => {
  const { movies, status } = useMovies();
  const { search } = useSearch();

  return (
    <>
      {status === 'loading' && <Loader />}
      {/* Show loader component if status is loading */}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {status === 'succeeded' &&
          search.status === 'idle' &&
          movies.map((movie) => <MovieCard key={movie.id} data={movie} />)}

        {search.status === 'searching' &&
          search.data.map((movie) => <MovieCard key={movie.id} data={movie} />)}
      </div>
      {/* Render a MovieCard component for each movie */}

      {status === 'failed' && (
        <Error>
          Some thing went wrong.
          <br />
          Could not load the movies right now 😥
        </Error>
      )}
      {/* Show error message if movies status is failed */}

      {search.status === 'searching' && search.data.length === 0 && (
        <Error>No Results found 🤷‍♂️</Error>
      )}
      {/* Show error message if search status is failed */}
    </>
  );
};
