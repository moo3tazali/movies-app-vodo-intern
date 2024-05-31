import { Search } from '@/components/search';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className='h-24 flex justify-between items-center px-2 sm:px-4 lg:px-6'>
      <Link href='/' className='text-2xl font-bold '>
        <span className='text-5xl'>🍿</span>Movie APP
      </Link>
      <Search />
    </header>
  );
};
