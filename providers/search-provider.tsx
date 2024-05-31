'use client';

import { createContext, useState } from 'react';

import { Movie } from '@/types';

// Define the type for the context value
interface SearchContextType {
  search: Movie[] | [];
  setSearch: React.Dispatch<React.SetStateAction<Movie[] | []>>;
}

// Create the context with an initial value
export const searchContext = createContext<SearchContextType>({
  search: [],
  setSearch: () => {},
});

// Create the provider component
export default function SearchProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // State to manage search data
  const [search, setSearch] = useState<Movie[] | []>([]);

  // Construct the context value
  const contextValue: SearchContextType = {
    search,
    setSearch,
  };

  // Render the provider with the provided context value
  return (
    <searchContext.Provider value={contextValue}>
      {children}
    </searchContext.Provider>
  );
}
