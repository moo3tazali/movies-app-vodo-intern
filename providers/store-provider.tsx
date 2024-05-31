'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';

import { AppStore, makeStore } from '@/store';
import { fetchMovies } from '@/store/moviesSlice';

// StoreProvider component definition
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>(); // useRef hook to hold a reference to the Redux store

  // If the store instance is not created yet, initialize it
  if (!storeRef.current) {
    // Create the store instance using the makeStore function from the store module
    storeRef.current = makeStore();
    // Dispatch the fetchMovies action to load movies into the store
    storeRef.current.dispatch(fetchMovies());
  }

  // Return the Provider component with the initialized store and children elements
  return <Provider store={storeRef.current}>{children}</Provider>;
}
