'use client';

import { useMovies } from '@/hooks/use-movies';
import { MovieCard } from '@/components/movie-card';
import { Loader } from '@/components/ui/loader';
import { Error } from '@/components/ui/error';

export const Movies = () => {
  const { movies, status } = useMovies();

  return (
    <>
      {status === 'loading' && <Loader />}

      {status === 'succeeded' && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {movies.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div>
      )}

      {status === 'failed' && (
        <Error>
          Some thing went wrong.
          <br />
          Could not load the movies right now 😥
        </Error>
      )}
    </>
  );
};
