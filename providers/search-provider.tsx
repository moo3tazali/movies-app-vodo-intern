'use client';

import { createContext, useState } from 'react';

import { Movie } from '@/types';

// Define the type for the state value
interface SearchStateType {
  data: Movie[];
  isSearching: boolean;
}

// Define the type for the context value
interface SearchContextType {
  search: SearchStateType;
  setSearch: React.Dispatch<React.SetStateAction<SearchStateType>>;
}

// Create the context with an initial value
export const searchContext = createContext<SearchContextType>({
  search: { data: [], isSearching: false },
  setSearch: () => {},
});

// Create the provider component
export default function SearchProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // State to manage search data
  const [search, setSearch] = useState<SearchStateType>({
    data: [],
    isSearching: false,
  });

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
