'use client';

import { useEffect, useRef, useState } from 'react';
import axios, { Canceler } from 'axios';
import { Search as SearchIcon } from 'lucide-react';

import { useSearch } from '@/hooks/use-search';

export const Search = () => {
  const [searchInput, setSearchInput] = useState(''); // State to store the value of the search input
  const { setSearch } = useSearch(); // Custom hook to manage search state
  const cancelAxiosRequest = useRef<Canceler | null>(null); // Reference to cancel Axios requests

  useEffect(() => {
    const fetchData = async () => {
      try {
        cancelAxiosRequest.current && cancelAxiosRequest.current();
        // Cancel previous request if any

        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${searchInput}&api_key=${process.env.API_KEY}`,
          {
            cancelToken: new axios.CancelToken((c) => {
              cancelAxiosRequest.current = c;
            }),
          }
        );

        // Map the movie data to a custom format
        const movies = response.data.results.map((movie: any) => {
          return {
            id: movie.id,
            title: movie.title,
            overview: movie.overview,
            poster_path: movie.poster_path,
            release_date: movie.release_date,
            original_language: movie.original_language,
            vote_average: movie.vote_average,
            genres: [],
          };
        });

        setSearch({ data: movies, isSearching: true }); // Set search results using the custom hook
      } catch (error) {
        setSearch({ data: [], isSearching: false });
        // Clear search results in case of error
      }
    };

    // Call the fetchData function when the form value changes
    if (searchInput.length > 2) {
      fetchData();
    }

    // Clear the search results if the search query is less than 3 characters
    if (searchInput.length < 3) {
      setSearch({ data: [], isSearching: false });
    }

    return () => {
      cancelAxiosRequest.current && cancelAxiosRequest.current();
      // Cancel the request when component unmounts or form changes
    };
  }, [searchInput, setSearch]);

  // Function to handle changes in the search input
  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className='flex justify-center items-center mb-4'>
      <div className='relative  sm:max-w-[320px] w-full'>
        <div className='h-[48px] w-[48px] text-2xl absolute left-0 top-0 flex items-center justify-center'>
          <SearchIcon className='text-slate-900' />
        </div>
        <input
          value={searchInput}
          onChange={onChange}
          type='text'
          className='pl-16 pr-4 py-3 w-full bg-white rounded-md outline-none text-slate-900'
          placeholder='Search for your favorite movie'
        />
      </div>
    </div>
  );
};
