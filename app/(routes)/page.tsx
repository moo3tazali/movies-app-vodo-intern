import { Heading } from '@/components/ui/heading';
import { Movies } from '@/components/home/movies';
import { Search } from '@/components/home/search';
import { ChangePages } from '@/components/home/change-pages';

// Home page component definition
export default function Home() {
  return (
    <main className='p-4 min-h-[calc(100vh-169px)] flex flex-col'>
      <Heading title='Movies List' description='Choose your best movie' />
      {/* Heading component with title and description props */}

      <Search />
      {/* Search component for searching movies */}

      <ChangePages />
      {/* ChangePages component for pagination controls */}

      <Movies />
      {/* Movies component to display the list of movies */}
    </main>
  );
}
