import { useState } from 'react';
import { useQuery } from 'react-query';
import useDialogAlert from 'src/hooks/useDialogAlert';
import { useRepository } from 'src/repository';

export const useLogic = () => {
    const dialogAlert = useDialogAlert();

    const [loading, setLoading] = useState(false);
    const { friendsRepository } = useRepository();

    const {
        data: friendRequests,
        isLoading: loadingFriendRequests,
        refetch,
    } = useQuery('user-friends', async () => {
        return friendsRepository
            .getFriends()
            .then(({ data }) => data)
            .catch((err) => {
                console.error(err);
                return [];
            });
    });

    const handleRemoveFriend = async (nickname: string) => {
        setLoading(true);
        await friendsRepository
            .cancelFriend(nickname)
            .then(({ data }) => {
                dialogAlert.responseSuccess({
                    message: data.message,
                });
            })
            .catch(error => {
                dialogAlert.responseError(error.response.data);
            });
        setLoading(false);
        refetch();
    };

    return {
        data: {
            loading,
            friends: friendRequests || [],
            loadingFriendRequests
        },
        methods: {
            handleRemoveFriend
        },
    };
};
