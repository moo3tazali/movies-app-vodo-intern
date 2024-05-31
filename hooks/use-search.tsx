import { useContext } from 'react';

import { searchContext } from '@/providers/search-provider';

// Custom hook to access search context
export const useSearch = () => {
  const context = useContext(searchContext);
  if (context === null) {
    throw new Error('useSearch must be used within a SearchContext Provider');
  }
  return context;
};
