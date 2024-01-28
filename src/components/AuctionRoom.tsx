import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface AuctionRoom {
    id: number;
    name: string;
    imageUrl: string;
}

interface PageProps {
    auctionRooms: AuctionRoom[];
}

const Page: FC<PageProps> = ({ auctionRooms }) => {
    return (
        <div className="page">
            <div className="auction-room-container">
                {auctionRooms.map(room => (
                    <div key={room.id} className="auction-room-card relative">
                        <Image
                            src={room.imageUrl}
                            alt={room.name}
                            width={500}
                            height={500}
                            className="object-cover w-full h-full rounded-md m-2"
                        />
                        <div className="absolute inset-0 flex flex-col justify-end p-4">
                            <h2 className="text-white text-lg font-semibold">{room.name}</h2>
                            <Link className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600" href={`rooms/${room.id}`}>Enter Room</Link>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default Page;
