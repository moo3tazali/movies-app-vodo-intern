export const Error = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='text-center w-full flex-1 flex justify-center items-center gap-x-5 text-lg md:text-3xl'>
      {children}
    </div>
  );
};
