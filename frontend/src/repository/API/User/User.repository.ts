import httpModule from '../../../utils/fetch/Fetch.service';
import { IRepositoryRequirements } from '../../repositories.common';


export function UserRepository ({ baseUrl }: IRepositoryRequirements) {
    const Fetch = httpModule;

    const url = `${baseUrl}/users`;

    function getMe () {
        return Fetch.get({ url: `${url}/` });
    }


    return {
        getMe
    };
}
