import { Search } from '@/components/search';
import Link from 'next/link';

// Header component definition
export const Header = () => {
  return (
    <header className='h-24 flex justify-between items-center px-2 sm:px-4 lg:px-6'>
      <Link href='/' as='/' className='text-2xl font-bold '>
        <span className='text-5xl'>🍿</span>Movie APP
      </Link>
      {/* Link to navigate to the home page with text styling */}

      <Search />
      {/* Search component for searching movies */}
    </header>
  );
};
