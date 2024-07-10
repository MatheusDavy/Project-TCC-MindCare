import axios from 'axios';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

export const useLogic = () => {
    const router = useRouter();

    // Requests
    const { data, isLoading, refetch } = useQuery(
        `content-description-${router.query.id}`,
        async () => {
            const filtered = await axios
                .get('/datas/learn.json')
                .then(async ({ data }) => {
                    return data.filter(
                        content => content.id == router.query.id
                    );
                })
                .catch(err => err);
            return filtered[0];
        }
    );

    return {
        data: {
            data,
            isLoading,
        },
        methods: {
            refetch,
        },
    };
};
