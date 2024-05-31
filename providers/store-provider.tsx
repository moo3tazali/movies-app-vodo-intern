'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';

import { AppStore, makeStore } from '@/store';
import { fetchMovies } from '@/store/moviesSlice';

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    storeRef.current.dispatch(fetchMovies());
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
