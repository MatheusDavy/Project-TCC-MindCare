import * as Fetch from '../../../utils/fetch/Fetch.service';
import { IRepositoryRequirements } from '../../repositories.common';

export function LearnRepository ({ baseUrl }: IRepositoryRequirements) {
    baseUrl = `${baseUrl}/learn/`;

    function getFriendsWhoWatched (id: number | string) {
        const url = `${baseUrl}/get-friends-who-wacthed?idVideo=${id}`;
        return Fetch.get({ url });
    }

    function markVideoAsWacthed (id: number | string) {
        const url = `${baseUrl}/mark-as-wacthed?idVideo=${id}`;
        return Fetch.get({ url });
    }

    function markOffVideoAsWacthed (id: number | string) {
        const url = `${baseUrl}/markoff-as-wacthed?idVideo=${id}`;
        return Fetch.get({ url });
    }

    function verifyVideoWasWacthed (id: number | string) {
        const url = `${baseUrl}/verify-video-was-wacthed?idVideo=${id}`;
        return Fetch.get({ url });
    }

    return {
        getFriendsWhoWatched,
        markOffVideoAsWacthed,
        markVideoAsWacthed,
        verifyVideoWasWacthed
    };
}
