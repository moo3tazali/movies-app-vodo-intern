import Link from 'next/link';

import { getMovie } from '@/actions/get-movie';
import { MovieDetails } from '@/components/movie-details';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Error } from '@/components/ui/error';
import { Metadata } from 'next';

interface PageProps {
  params: { movieId: string };
}

// DYNAMIC TITLE
export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const fetchMovie = await getMovie(params.movieId);

  return {
    title: fetchMovie?.title
      ? `Overview - ${fetchMovie.title}`
      : 'Some thing went wrong 😥.',
  };
};

export default async function DetailPage({ params }: PageProps) {
  const fetchMovie = await getMovie(params.movieId);

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
        <Link href='/' className='mb-5 px-4'>
          <Button>Back</Button>
        </Link>
        {!fetchMovie && (
          <Error>
            Some thing went wrong.
            <br />
            Could not load the movie overview right now 😥
          </Error>
        )}
        {fetchMovie && <MovieDetails data={fetchMovie} />}
      </main>
    </>
  );
}
