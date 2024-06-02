import { isImageUrl } from '@/actions/isImageUrl';
import { Cast as CastType } from '@/types';
import Image from 'next/image';
import noAvatar from '@/public/Cast-no-avatar.webp';

interface CastProps {
  cast: CastType;
}

export const Cast: React.FC<CastProps> = async ({ cast }) => {
  const profileUrl = `${process.env.BASE_POSTER_URL}${cast.profile_path}`;
  const checkUrl = await isImageUrl(profileUrl);
  return (
    <div className='bg-white shadow-md rounded-lg p-4 flex flex-col items-center space-y-4 text-slate-900 min-w-[180px] min-h-[300px] max-h-[300px] overflow-hidden'>
      <Image
        src={checkUrl ? profileUrl : noAvatar}
        alt={cast.name}
        className='rounded-full'
        width={100}
        height={100}
      />
      <div className='text-center flex-1 flex flex-col justify-between items-center'>
        <h3 className='text-lg font-semibold flex-1'>{cast.name}</h3>
        <div>
          <p className='text-sm text-gray-600'>{cast.character}</p>
          <p className='text-sm text-gray-600'>{cast.known_for_department}</p>
        </div>
      </div>
    </div>
  );
};
