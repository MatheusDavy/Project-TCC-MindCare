import * as Fetch from '../../../utils/fetch/Fetch.service';
import { IRepositoryRequirements } from '../../repositories.common';

export function ChatRepository ({ baseUrl }: IRepositoryRequirements) {
    const url = `${baseUrl}/chatbot`;

    function getMessages (nickname: string) {
        return Fetch.post({ url, data: nickname });
    }

    return {
        getMessages
    };
}
