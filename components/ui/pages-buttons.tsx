'use client';

import { Button } from '@/components/ui/button';

// Interface defining the props for the PageButtons component
interface PageButtonsProps {
  currentPage: number;
  totalPages: number;
  status: 'idle' | 'loading' | 'succeeded' | 'failed' | 'searching';
  handlePageChange: (page: number) => void;
}

// PagesButtons component definition
export const PagesButtons: React.FC<PageButtonsProps> = ({
  currentPage,
  totalPages,
  status,
  handlePageChange,
}) => {
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
