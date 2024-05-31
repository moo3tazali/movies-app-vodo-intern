import Image from 'next/image';

import { MovieDetails as MovieType } from '@/types';

interface MovieDetailsProps {
  data: MovieType;
}

export const MovieDetails: React.FC<MovieDetailsProps> = ({ data }) => {
  return (
    <>
      <div
        className='bg-white/20 flex-1 bg-cover bg-center sm:rounded-lg overflow-hidden relative before:absolute before:w-full before:h-full before:bg-black/80'
        style={{
          backgroundImage: `url(${process.env.BASE_POSTER_URL}${data.background_path})`,
        }}
      >
        <div className='relative p-10 flex gap-4 flex-col md:flex-row items-center'>
          <div>
            <Image
              className='rounded-xl'
              priority
              src={`${process.env.BASE_POSTER_URL}${data.poster_path}` || ''}
              alt={data.title}
              width={300}
              height={450}
            />
          </div>
          <div className='flex-1 space-y-3'>
            <h1 className='font-bold text-lg sm:text-2xl '>
              {data.title}
              <span className='text-white/70'>
                {' '}
                ( {data.release_date.split('-').at(0)} )
              </span>
            </h1>
            <span className='text-sm text-white/70'>
              {data.release_date} ({data.original_language.toUpperCase()}) |{' '}
              {data.genres.join(', ')} <br /> {data.vote_average}/10 ⭐
            </span>

            <h4 className='text-white/70'>{data.tagline}</h4>
            <h4 className='text-xl font-semibold'>Overview</h4>
            <p className='text-white/80'>{data.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};
