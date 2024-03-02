import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useQuery } from 'react-query';

export const useLogic = () => {
    const router = useRouter();
    const {data: user, isLoading: loading, refetch} = useQuery('user-data', async () => {
        
    });

    useEffect(() => {
        refetch();
    }, [router.query.nickname]);

    return {
        data: {
            user,
            loading
        },
    };
};
