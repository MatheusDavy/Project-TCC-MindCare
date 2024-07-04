import axios from 'axios';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { useRepository } from 'src/repository';

export const useLogic = () => {
    const router = useRouter();
    const { learnRepository } = useRepository();

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

    const { data: friends, isLoading: isLoadingFriends } = useQuery(
        `friends-who-watched-video-${router.query.id}`,
        async () => {
            await learnRepository
                .getFriendsWhoWatched(router.query.id as 'string' | 'number')
                .then()
                .catch();
        }
    );

    return {
        data: {
            data,
            isLoading,
            friends,
            isLoadingFriends,
        },
        methods: {
            refetch,
        },
    };
};
