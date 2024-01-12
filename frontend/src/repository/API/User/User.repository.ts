import { User } from 'src/types/users/usert.types';
import httpModule from '../../../utils/fetch/Fetch.service';
import { IRepositoryRequirements } from '../../repositories.common';


export function UserRepository ({ baseUrl }: IRepositoryRequirements) {
    const Fetch = httpModule;

    const url = `${baseUrl}/users`;

    function getMe () {
        return Fetch.get({ url: `${url}/` });
    }

    function updateMe (data: User) {
        return Fetch.patch({ url: `${url}/update-me`, data });
    }


    return {
        getMe,
        updateMe
    };
}
