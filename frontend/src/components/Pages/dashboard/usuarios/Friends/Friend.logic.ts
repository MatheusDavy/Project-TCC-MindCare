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
    } = useQuery('user-friend-requests', async () => {
        return friendsRepository
            .getFriendsRequests()
            .then(({ data }) => data)
            .catch((err) => err);
    });

    const handleAcceptFriendRequest = async (nickname: string) => {
        setLoading(true);
        await friendsRepository
            .acceptFriendRequest(nickname)
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

    const handleCancelFriend = async (nickname: string) => {
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
        data: { loading, friendRequests, loadingFriendRequests },
        methods: { handleAcceptFriendRequest, handleCancelFriend },
    };
};
