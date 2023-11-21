'use client';

import { useAppSelector } from '@/globalRedux/hooks';
import { useGetCreatorsQuery } from '@/globalRedux/services/creatorApi';

export default function Home() {
  const creators = useAppSelector(state => state.creators);
  const { isLoading, data, error } = useGetCreatorsQuery(null);

  console.log({ creators, isLoading, data, error });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      Hello world
    </main>
  );
}
