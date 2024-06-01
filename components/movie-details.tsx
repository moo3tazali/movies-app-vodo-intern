import Image from 'next/image';

import { MovieDetails as MovieType } from '@/types';
import { isImageUrl } from '@/actions/isImageUrl';
import noPoster from '@/public/no-poster.webp';

// Interface defining the props for the MovieDetails component
interface MovieDetailsProps {
  data: MovieType;
}

// MovieDetails component definition
export const MovieDetails: React.FC<MovieDetailsProps> = async ({ data }) => {
  const posterUrl = `${process.env.BASE_POSTER_URL}${data.poster_path}`;
  const backgroundImageUrl = `${process.env.BASE_POSTER_URL}${data.background_path}`;
  const checkPosterUrl = await isImageUrl(posterUrl);
  const checkBackgroundImage = await isImageUrl(backgroundImageUrl);
  return (
    <>
      <div
        className='bg-white/20 flex-1 bg-cover bg-center sm:rounded-lg overflow-hidden relative before:absolute before:w-full before:h-full before:bg-black/80'
        style={{
          backgroundImage: checkBackgroundImage
            ? `url(${backgroundImageUrl})`
            : 'none',
        }}
        // set background image
      >
        <div className='relative p-10 flex gap-4 flex-col md:flex-row items-center'>
          <div>
            <Image
              className='rounded-xl'
              priority
              src={checkPosterUrl ? posterUrl : noPoster.src}
              alt={data.title}
              width={300}
              height={450}
            />
          </div>
          {/* Image component for movie poster with styling, dimensions, and alt text */}

          <div className='flex-1 space-y-3'>
            <h1 className='font-bold text-lg sm:text-2xl '>
              {data.title}
              <span className='text-white/70'>
                {' '}
                ( {data.release_date.split('-').at(0)} )
              </span>
            </h1>
            {/* Movie title and release year */}

            <span className='text-sm text-white/70'>
              {data.release_date} ({data.original_language.toUpperCase()}) |{' '}
              {data.genres.join(', ')}
              <br />
              {data.vote_average
                ? `${data.vote_average.toFixed(1)}/10`
                : 'NA'}{' '}
              ⭐
            </span>
            {/* Release date, original language, genres, and vote average */}

            <h4 className='text-white/70'>{data.tagline}</h4>
            {/* Movie tagline */}
            <h4 className='text-xl font-semibold'>Overview</h4>
            {/* Overview heading */}
            <p className='text-white/80'>{data.overview}</p>
            {/* Movie overview */}
          </div>
        </div>
      </div>
    </>
  );
};
