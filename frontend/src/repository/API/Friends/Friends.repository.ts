import * as Fetch from '../../../utils/fetch/Fetch.service';
import { IRepositoryRequirements } from '../../repositories.common';

export function FriendsRepository ({ baseUrl }: IRepositoryRequirements) {
    baseUrl = `${baseUrl}/friends`;

    function getUserFriends () {
        return Fetch.get({ url: baseUrl });
    }

    function cancelFriendRequest (nickname: string) {
        const url = baseUrl + '/cancel-friend-request';
        return Fetch.post({ url, data: {nickname} });
    }

    function cancelFriend(nickname: string){
        const url = baseUrl + '/cancel-friend';
        return Fetch.post({ url, data: {nickname} });
    }

    function addFriend (nickname: string){
        const url =  baseUrl + '/add-friend';
        return Fetch.post({ url, data: {nickname} });
    };

    function acceptFriendRequest (nickname: string) {
        const url =  baseUrl + '/accept-friend';
        return Fetch.post({ url, data: {nickname} });
    };

    function getFriendsRequests (){
        const url =  baseUrl + '/friend-requests';
        return Fetch.get({ url });
    }

    return {
        getUserFriends,
        cancelFriendRequest,
        cancelFriend,
        addFriend,
        acceptFriendRequest,
        getFriendsRequests
    };
}
