import { useState } from 'react';
import useDialogAlert from 'src/hooks/useDialogAlert';
import { useRepository } from 'src/repository';

export const useLogic = ({ nickname, refetch }) => {
    const dialogAlert = useDialogAlert();
    const [loading, setLoading] = useState(false);
    const { friendsRepository } = useRepository();

    const handleCancelFriendRequest = async () => {
        setLoading(true);
        await friendsRepository
            .cancelFriendRequest(nickname)
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

    const handleCancelFriend = async () => {
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

    const handleAddFriend = async () => {
        setLoading(true);
        await friendsRepository
            .addFriend(nickname)
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

    const handleAcceptFriendRequest = async () => {
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

    return {
        data: {
            loading,
        },
        methods: {
            handleCancelFriendRequest,
            handleAddFriend,
            handleCancelFriend,
            handleAcceptFriendRequest
        },
    };
};
