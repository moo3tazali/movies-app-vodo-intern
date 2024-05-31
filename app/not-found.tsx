import Link from 'next/link';

// NotFoundPage component definition
const NotFoundPage = () => {
  return (
    <div className='p-0 sm:p-4 min-h-[calc(100vh-169px)] text-lg sm:text-2xl flex flex-col gap-y-3 items-center justify-center'>
      Page not found 🤷‍♂️.
      {/* Message indicating the page was not found */}
      <Link href='/' as='/' className=' underline text-center space-y-3'>
        Have some Popcorn <span className='text-4xl'>🍿</span>
        <br />
        Go Home
      </Link>
      {/* Link to navigate back to the home page with underline and centered text */}
    </div>
  );
};

export default NotFoundPage;
