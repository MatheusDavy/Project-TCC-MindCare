import { useEffect, useState } from 'react';
import { useRepository } from '../../../../../repository';

export const useLogic = () => {
    const { friendsRepository } = useRepository();
    const [friends, setFriends] = useState<Array<any>>([]);
    const [loading, setLoading] = useState(true);

    const loadFriends = async () => {
        await friendsRepository
            .getUserFriends()
            .then(({ data }) => {
                // setFriends(data);
                setFriends([
                    {
                        name: 'Davys',
                        nickname: 'MatheusDavy01',
                        avatar: '123',
                        isOnline: 'true',
                    }
                ]);
            })
            .catch(err => console.log(err));
        setLoading(false);
    };

    useEffect(() => {
        loadFriends();
    }, []);

    return {
        data: {
            loading,
            friends,
        },
        methods: {},
    };
};
