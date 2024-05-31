'use client';

import { useAppDispatch, useMovies } from '@/hooks/use-movies';
import { Button } from '@/components/ui/button';
import { fetchMovies, setPage } from '@/store/moviesSlice';
import { useSearch } from '@/hooks/use-search';

// PagesButtons component definition
export const PagesButtons = () => {
  const { currentPage, status, totalPages } = useMovies();
  const dispatch = useAppDispatch();
  const { search } = useSearch();

  // Function to handle page changes
  const handlePageChange = (page: number) => {
    dispatch(setPage(page)); // Dispatch action to set the current page
    dispatch(fetchMovies(page)); // Dispatch action to fetch movies for the new page
  };

  // Return the PagesButtons component if there is no search query
  if (search.isSearching) return null;
  return (
    <div className='mb-5'>
      <div className='text-center w-full mb-2 flex justify-center items-center'>
        Page {currentPage} of {totalPages}
      </div>
      {/* Div for holding the navigation buttons */}

      <div className='w-full flex items-center justify-center gap-x-5'>
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1 || status === 'loading'}
        >
          Previous
        </Button>
        {/* Button to go to the previous page, disabled if on the first page or loading */}

        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages || status === 'loading'}
        >
          Next
        </Button>
        {/* Button to go to the next page, disabled if on the last page or loading */}
      </div>
    </div>
  );
};
