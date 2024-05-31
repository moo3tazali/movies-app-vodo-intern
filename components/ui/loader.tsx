export const Loader = () => {
  return (
    <div className='text-center w-full flex-1 flex justify-center items-center gap-x-5'>
      <div className='w-12 h-12 rounded-full animate-spin border-4 border-solid border-white border-t-transparent' />
      <span className='text-white text-3xl'>Loading...</span>
    </div>
  );
};
