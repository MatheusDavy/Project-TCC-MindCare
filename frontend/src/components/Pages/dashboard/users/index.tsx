import { useEffect, useState } from 'react';
import { Search } from './Search/Search';
import User from './User/User';
import { useRouter } from 'next/router';

export function Structure() {
    const router = useRouter();
    const [params, setParams] = useState('');

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const searchParam = urlParams.get('search');
        setParams(searchParam!);
    }, [router.asPath]);

    return (
        <div className="grid grid-cols-[400px_1fr] w-full">
            <Search />
            {params && (
                <User nickname={params} />
            )}
        </div>
    );
}
