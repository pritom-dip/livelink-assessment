'use client';

import Card from '@/components/Card';
import Loading from '@/components/Loading';
import { useGetCreatorsQuery } from '@/globalRedux/services/creatorApi';
import { ICreator } from '@/types/creator';

export default function Home() {
    const { isLoading, data, error } = useGetCreatorsQuery(null);

    if (isLoading) return <Loading />;

    if (!data || error) return <div>There is an error!</div>;

    return (
        <div className="conatiner mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {data &&
                    data.data?.map((creator: ICreator) => (
                        <Card key={creator?.id} creator={creator} />
                    ))}
            </div>
        </div>
    );
}
