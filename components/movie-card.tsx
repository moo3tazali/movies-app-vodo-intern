'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import type { Movie } from '@/types';
import { isImageUrl } from '@/actions/isImageUrl';
import noPoster from '@/public/no-poster.webp';
import posterPlaceholder from '@/public/poster-placeholder.webp';

// Interface defining the props for MovieCard component
interface MovieCardProps {
  data: Movie;
}

// MovieCard component definition
export const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const [imgSrc, setImgSrc] = useState(posterPlaceholder.src);

  useEffect(() => {
    if (data.poster_path) {
      const posterUrl = `${process.env.BASE_POSTER_URL}${data.poster_path}`;

      // Check if the image URL is valid
      const checkImageUrl = async (url: string) => {
        const isImageUrlValid = await isImageUrl(url);
        if (isImageUrlValid) {
          setImgSrc(posterUrl);
        } else {
          setImgSrc(noPoster.src);
        }
      };
      checkImageUrl(posterUrl);
    } else {
      setImgSrc(noPoster.src);
    }
  }, [data.poster_path]);

  return (
    <div className='bg-white overflow-hidden rounded-md shadow-md flex flex-col gap-y-3'>
      <div className='xl:max-h-[450px]'>
        <Link href={`/movies/${data.id}`} as={`/movies/${data.id}`}>
          <Image
            priority
            width={600}
            height={900}
            className='w-full h-full cursor-pointer object-cover'
            src={imgSrc}
            alt={data.title}
          />
        </Link>
        {/* Link to movie detail page */}
      </div>
      <div className='px-4 pb-4 flex-1 flex flex-col gap-y-2 justify-between'>
        <Link href={`/movies/${data.id}`} as={`/movies/${data.id}`}>
          <h3 className='font-bold text-slate-800 cursor-pointer hover:text-blue-800 transition-colors'>
            {data.title}
          </h3>
          {/* Movie title with styling */}
        </Link>
        {/* Link to movie detail page */}
        <div>
          <div className='text-gray-500 text-sm flex justify-between items-center'>
            <span>
              {data.release_date} ({data.original_language?.toUpperCase()})
            </span>
            {/* Release date and original language */}

            <span>{data.vote_average?.toFixed(2)}/10 ⭐</span>
            {/* Average vote rating */}
          </div>
          {/* Div for movie metadata */}

          <div className='flex items-center gap-3 flex-wrap mt-2 text-slate-900 text-sm'>
            {data.genres.join(' | ')}
          </div>
          {/* List of genres */}
        </div>
      </div>
    </div>
  );
};
