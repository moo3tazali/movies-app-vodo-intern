import { Metadata } from 'next';
import Link from 'next/link';

import { getMovie } from '@/actions/get-movie';
import { MovieDetails } from '@/components/overview/movie-details';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Error } from '@/components/ui/error';
import { Cast } from '@/components/overview/cast';
import { getCast } from '@/actions/get-cast';

// Interface defining the props for the page component
interface PageProps {
  params: { movieId: string };
}

// Function to dynamically generate metadata for the page
export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const fetchMovie = await getMovie(params.movieId); // Fetch movie data based on movieId

  return {
    title: fetchMovie?.title
      ? `Overview - ${fetchMovie.title}` // Set page title to movie title if available
      : 'Some thing went wrong 😥.', // Default title if movie data is unavailable
  };
};

// Default export for the Detail Page component
export default async function DetailPage({ params }: PageProps) {
  const fetchMovie = await getMovie(params.movieId); // Fetch movie data based on movieId
  const cast = await getCast(params.movieId); // Get cast data based on movieId

  return (
    <>
      <main className='p-0 sm:p-4 min-h-[calc(100vh-169px)] flex flex-col'>
        <Heading
          className='px-4'
          title='Overview'
          description={`Details information about ${
            fetchMovie?.title || '....'
          }`}
        />
        {/* Heading component with dynamic description based on movie title */}

        <Link href='/' className='mb-5 px-4'>
          <Button>Back</Button>
        </Link>
        {/* Button to navigate back to the home page */}

        {!fetchMovie && (
          <Error>
            Some thing went wrong.
            <br />
            Could not load the movie overview right now 😥
          </Error>
        )}
        {/* Error component displayed if movie data could not be fetched */}

        {fetchMovie && <MovieDetails data={fetchMovie} />}
        {/* MovieDetails component displayed if movie data is successfully fetched */}

        <h2 className='text-white text-2xl py-5 px-4'>Movie Cast</h2>
        {cast && (
          <div className='p-4 overflow-auto flex items-center gap-x-4'>
            {cast.map((cast) => (
              <Cast key={cast.id} cast={cast} />
            ))}
          </div>
        )}
        {/* Cast component displayed if cast data is successfully fetched */}
      </main>
    </>
  );
}
