import { FC } from 'react'

interface pageProps {
    params: {
        roomId: string;
    };
}

const page: FC<pageProps> = ({ params }) => {
    return <div>
        Details about the room {params.roomId}
    </div>
}

export default page