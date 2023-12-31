'use client';

import Card from '@/components/Card';
import Loading from '@/components/Loading';
import { useGetCreatorByIdQuery } from '@/globalRedux/services/creatorApi';

export default function Creator({ params }: { params: { id: string } }) {
    const { id } = params;
    const { isLoading, data } = useGetCreatorByIdQuery({ id: id });

    if (isLoading) return <Loading />;

    if (!data) return <div>No Data found</div>;

    return (
        <div className="mx-auto max-w-2xl">
            <div className="grid grid-cols-1 gap-4 mx-3">
                <Card creator={data?.data} showDescription />
            </div>
        </div>
    );
}
