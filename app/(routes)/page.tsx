import { Heading } from '@/components/ui/heading';
import { Movies } from '@/components/movies';
import { PagesButtons } from '@/components/pages-buttons';

export default function Home() {
  return (
    <main className='p-4 min-h-[calc(100vh-169px)] flex flex-col'>
      <Heading title='Movies List' description='Choose your best movie' />
      <PagesButtons />
      <Movies />
    </main>
  );
}
