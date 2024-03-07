import * as Fetch from '../../../utils/fetch/Fetch.service';
import { IRepositoryRequirements } from '../../repositories.common';

export function FriendsRepository ({ baseUrl }: IRepositoryRequirements) {
    const url = `${baseUrl}/friends`;

    function getUserFriends () {
        return Fetch.get({ url: url });
    }

    function getUsers (text: string) {
        const params = url + `/search?user=${text}`;
        return Fetch.get({ url: params });
    }

    function cancelFriendRequest (nickname: string) {
        const newUrl = `${url}/cancel-friend?user=${nickname}`;
        return Fetch.get({ url: newUrl });
    }

    return {
        getUserFriends,
        getUsers,
        cancelFriendRequest
    };
}
