import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className='p-0 sm:p-4 min-h-[calc(100vh-169px)] text-lg sm:text-2xl flex flex-col gap-y-3 items-center justify-center'>
      Page not found 🤷‍♂️.
      <Link href='/' className=' underline text-center space-y-3'>
        Have some Popcorn <span className='text-4xl'>🍿</span>
        <br />
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
