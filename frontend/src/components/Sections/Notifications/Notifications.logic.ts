import { useQuery } from 'react-query';
import useDialogAlert from 'src/hooks/useDialogAlert';
import { useRepository } from 'src/repository';

export const useLogic = () => {
    const { userRepository, friendsRepository } = useRepository();
    const dialogAlert = useDialogAlert();
    const {
        data: notifications,
        isLoading: loadingNotifications,
        refetch,
    } = useQuery('user-notifications', async () => {
        return userRepository
            .getNotifications()
            .then(({ data }) => data.notifications)
            .catch(() => []);
    });

    const handleAcceptFriendRequest = async (nickname: string) => {
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

        refetch();
    };

    const handleCancelFriend = async (nickname: string) => {
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
        refetch();
    };

    return {
        data: {
            notifications,
            loadingNotifications,
        },
        methods: {
            handleAcceptFriendRequest,
            handleCancelFriend
        },
    };
};
