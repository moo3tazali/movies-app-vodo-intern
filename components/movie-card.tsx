'use client';
import type { Movie } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

interface MovieCardProps {
  data: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  return (
    <div className='bg-white overflow-hidden rounded-md shadow-md flex flex-col gap-y-3'>
      <div className='xl:max-h-[450px]'>
        <Link href={`/movies/${data.id}`}>
          <Image
            priority
            width={600}
            height={900}
            className='w-full h-full cursor-pointer object-cover'
            src={`${process.env.BASE_POSTER_URL}${data.poster_path}` || ''}
            alt={data.title}
          />
        </Link>
      </div>
      <div className='px-4 pb-4 flex-1 flex flex-col gap-y-2 justify-between'>
        <Link href={`/movies/${data.id}`}>
          <h3 className='font-bold text-slate-800 cursor-pointer hover:text-blue-800 transition-colors'>
            {data.title}
          </h3>
        </Link>
        <div>
          <div className='text-gray-500 text-sm flex justify-between items-center'>
            <span>
              {data.release_date} ({data.original_language?.toUpperCase()})
            </span>
            <span>⭐ {data.vote_average?.toFixed(2)}/10</span>
          </div>
          <div className='flex items-center gap-3 flex-wrap mt-2 text-slate-900 text-sm'>
            {data.genres.join(' | ')}
          </div>
        </div>
      </div>
    </div>
  );
};
