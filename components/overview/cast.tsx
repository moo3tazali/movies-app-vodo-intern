import Image from 'next/image';

import { Cast as CastType } from '@/types';
import { isImageUrl } from '@/actions/isImageUrl';
import noAvatar from '@/public/Cast-no-avatar.webp';

// Define the interface for the Cast component's props
interface CastProps {
  cast: CastType;
}

// Cast component definition
export const Cast: React.FC<CastProps> = async ({ cast }) => {
  // Construct the profile image URL using an environment variable
  const profileUrl = `${process.env.BASE_POSTER_URL}${cast.profile_path}`;

  // Check if the constructed URL points to a valid image
  const checkUrl = await isImageUrl(profileUrl);

  return (
    <div className='bg-white shadow-md rounded-lg p-4 flex flex-col items-center space-y-4 text-slate-900 min-w-[180px] min-h-[300px] max-h-[300px] overflow-hidden'>
      <Image
        priority={false}
        src={checkUrl ? profileUrl : noAvatar}
        alt={cast.name}
        className='rounded-full'
        width={128}
        height={192}
      />
      {/* Render the profile image or the placeholder image */}

      <div className='text-center flex-1 flex flex-col justify-between items-center'>
        <h3 className='text-lg font-semibold flex-1'>{cast.name}</h3>
        <div>
          <p className='text-sm text-gray-600'>{cast.character}</p>
          <p className='text-sm text-gray-600'>{cast.known_for_department}</p>
        </div>
      </div>
      {/* Render the cast details */}
    </div>
  );
};
