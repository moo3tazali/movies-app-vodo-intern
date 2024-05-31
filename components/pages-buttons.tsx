'use client';

import { useAppDispatch, useMovies } from '@/hooks/use-movies';
import { Button } from '@/components/ui/button';
import { fetchMovies, setPage } from '@/store/moviesSlice';

export const PagesButtons = () => {
  const { currentPage, status, totalPages } = useMovies();
  const dispatch = useAppDispatch();
  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
    dispatch(fetchMovies(page));
  };
  return (
    <div className='mb-5'>
      <div className='text-center w-full mb-2 flex justify-center items-center'>
        Page {currentPage} of {totalPages}
      </div>
      <div className='w-full flex items-center justify-center gap-x-5'>
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1 || status === 'loading'}
        >
          Previous
        </Button>
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages || status === 'loading'}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
