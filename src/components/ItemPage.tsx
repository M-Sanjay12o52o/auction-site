"use client"

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentBid, setLastBidder } from '../features/room/roomSlice';
import { RootState } from "../lib/store"

const ItemPage = ({ item }: any) => {
    const dispatch = useDispatch();
    const currentBid = useSelector((state: RootState) => state.room.currentBid);
    const lastBidder = useSelector((state: RootState) => state.room.lastBidder)

    const session = useSession();
    const userEmail = session.data?.user?.email;

    const handleBid = () => {
        if (userEmail) {
            dispatch(setLastBidder(userEmail))
        }

        const newBid = currentBid !== null ? (currentBid >= 500 ? currentBid + 100 : currentBid + 50) : 50
        dispatch(setCurrentBid(newBid))
    };

    return (
        <div>
            {item ? (
                <>
                    <h1 className='text-4xl font-bold'>Current Bid: {currentBid}</h1>
                    <br />
                    <h1 className='text-4xl font-bold'>Raising By: {
                        currentBid! >= 500 ? 100 : 50
                    }</h1>
                    <div>
                        <h2>{item.title}</h2>
                        {item.image && <Image src={item.image} alt={item.title} width={500} height={500} />}
                        <p>Description: {item.description}</p>
                        <p>Base Price: ${item.baseprice}</p>
                    </div>

                    <button
                        className={`w-full bg-blue-500 h-12 rounded-lg mt-4 ${lastBidder === userEmail ? 'blur-sm' : ''}`}
                        onClick={handleBid}
                        disabled={lastBidder === userEmail ? true : false}
                    >
                        Raise
                    </button>
                </>
            ) : (
                <p>Loading item details...</p>
            )
            }

        </div >
    );
};

export default ItemPage;
