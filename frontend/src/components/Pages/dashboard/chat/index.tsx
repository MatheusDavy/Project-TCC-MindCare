import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Chat } from './chat/Chat';

export function Structure() {
    const router = useRouter();
    const [params, setParams] = useState(true);

    useEffect(() => {
        // const urlParams = new URLSearchParams(window.location.search);
        // const searchParam = urlParams.get('search');
        // setParams(searchParam!);
    }, [router.asPath]);

    return (
        <div className="grid grid-cols-[400px_1fr] w-full h-full max-h-full gap-4">
            Lista
            {params && (
                <Chat />
            )}
        </div>
    );
}
