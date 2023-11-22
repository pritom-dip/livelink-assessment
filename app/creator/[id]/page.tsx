'use client';
import { useGetCreatorByIdQuery } from '@/globalRedux/services/creatorApi';

export default function Creator({ params }: { params: { id: string } }) {
  const { id } = params;
  const { isLoading, data, error } = useGetCreatorByIdQuery({ id: id });

  console.log({ isLoading, data, error });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      Hello world
    </main>
  );
}
