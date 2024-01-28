import { FC } from 'react';
import Page from '../../components/AuctionRoom';

const AuctionPage: FC = () => {
    const dummyAuctionRooms = [
        { id: 1, name: 'Auction Room 1', imageUrl: 'https://images.pexels.com/photos/10287305/pexels-photo-10287305.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 2, name: 'Auction Room 2', imageUrl: 'https://images.pexels.com/photos/14943827/pexels-photo-14943827.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 3, name: 'Auction Room 3', imageUrl: 'https://images.pexels.com/photos/9258243/pexels-photo-9258243.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 4, name: 'Auction Room 4', imageUrl: 'https://images.pexels.com/photos/1334897/pexels-photo-1334897.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 5, name: 'Auction Room 5', imageUrl: 'https://images.pexels.com/photos/5724587/pexels-photo-5724587.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 6, name: 'Auction Room 6', imageUrl: 'https://images.pexels.com/photos/7859483/pexels-photo-7859483.jpeg?auto=compress&cs=tinysrgb&w=600' },
    ];

    return <Page auctionRooms={dummyAuctionRooms} />;
};

export default AuctionPage;
