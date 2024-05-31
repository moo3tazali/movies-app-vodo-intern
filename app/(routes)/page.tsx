import { Heading } from '@/components/ui/heading';
import { Movies } from '@/components/movies';
import { PagesButtons } from '@/components/pages-buttons';

// Home page component definition
export default function Home() {
  return (
    <main className='p-4 min-h-[calc(100vh-169px)] flex flex-col'>
      <Heading title='Movies List' description='Choose your best movie' />
      {/* Heading component with title and description props */}

      <PagesButtons />
      {/* PagesButtons component for pagination controls */}

      <Movies />
      {/* Movies component to display the list of movies */}
    </main>
  );
}
