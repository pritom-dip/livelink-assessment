import { ICreator } from '@/types/creator';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
    creator: ICreator;
    showDescription?: boolean;
}

const Card = ({ creator, showDescription = false }: IProps) => {
    const { id, name, topic, image, description } = creator || {};
    return (
        <Link href={`/creator/${id}`}>
            <figure className="flex bg-slate-100 p-4 gap-3 border-2 rounded-lg border-black">
                <div className="min-w-max">
                    <Image
                        width={72}
                        height={72}
                        className="rounded-full"
                        alt={name}
                        src={image}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <h2 className="font-bold capitalize">{name}</h2>
                    <h4 className="text-bold">{topic}</h4>
                    {showDescription && <p className="my-4">{description}</p>}
                </div>
            </figure>
        </Link>
    );
};

export default Card;
