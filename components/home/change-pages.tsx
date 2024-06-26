'use client';

import { useAppDispatch, useMovies } from '@/hooks/use-movies';
import { fetchMovies, setPage } from '@/store/moviesSlice';
import { useSearch } from '@/hooks/use-search';
import { PagesButtons } from '@/components/ui/pages-buttons';

export const ChangePages = () => {
  const movies = useMovies();
  const dispatch = useAppDispatch();
  const { search, setSearch } = useSearch();

  // Function to handle page changes for movies
  const handleMoviesPageChange = (page: number) => {
    dispatch(setPage(page)); // Dispatch action to set the current page
    dispatch(fetchMovies(page)); // Dispatch action to fetch movies for the new page
  };

  // Function to handle page changes for search
  const handleSearchPageChange = (page: number) => {
    setSearch((pre) => ({ ...pre, currentPage: page }));
  };

  return (
    <>
      {search.status === 'idle' && movies.status !== 'failed' && (
        <PagesButtons
          currentPage={movies.currentPage}
          totalPages={movies.totalPages}
          status={movies.status}
          handlePageChange={handleMoviesPageChange}
        />
      )}

      {search.status === 'searching' && search.data.length !== 0 && (
        <PagesButtons
          currentPage={search.currentPage}
          totalPages={search.totalPages}
          status={search.status}
          handlePageChange={handleSearchPageChange}
        />
      )}
    </>
  );
};
