import { User } from 'src/types/users/usert.types';
import httpModule from '../../../utils/fetch/Fetch.service';
import { IRepositoryRequirements } from '../../repositories.common';

export function UserRepository({ baseUrl }: IRepositoryRequirements) {
    const Fetch = httpModule;

    baseUrl = `${baseUrl}/users`;

    function getMe() {
        return Fetch.get({ url: baseUrl });
    }

    function updateMe(data: User) {
        const url = baseUrl + '/update-me';
        return Fetch.patch({ url, data: data });
    }

    function verifyNickname(nickname: string) {
        const url = baseUrl + '/nickname';
        return Fetch.post({ url, data: { nickname } });
    }

    function findManyUsers(search: string) {
        const url = baseUrl + '/find-users';
        return Fetch.post({ url, data: { search } });
    }

    function findUser(nickname: string) {
        const url = baseUrl + '/find-user';
        return Fetch.post({ url, data: { nickname } });
    }

    function getNotifications(){
        const url = baseUrl + '/notifications';
        return Fetch.get({ url });
    };

    return {
        getMe,
        updateMe,
        verifyNickname,
        findManyUsers,
        findUser,
        getNotifications
    };
}
