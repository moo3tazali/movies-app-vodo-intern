'use client';

import { createContext, useState } from 'react';

import { Movie } from '@/types';

// Define the type for the state value
interface SearchStateType {
  data: Movie[];
  status: 'searching' | 'failed' | 'idle';
  currentPage: number;
  totalPages: number;
}

// Define the type for the context value
interface SearchContextType {
  search: SearchStateType;
  setSearch: React.Dispatch<React.SetStateAction<SearchStateType>>;
}

// Create the context with an initial value
export const searchContext = createContext<SearchContextType>({
  search: { data: [], status: 'idle', currentPage: 1, totalPages: 1 },
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
    status: 'idle',
    currentPage: 1,
    totalPages: 1,
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
