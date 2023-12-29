import * as Fetch from '../../../utils/fetch/Fetch.service';
import { IRepositoryRequirements } from '../../repositories.common';

export function ChatbotRepository ({ baseUrl }: IRepositoryRequirements) {
    const url = `${baseUrl}/chatbot`;

    function getResponse (data: string) {
        const payload = {
            question: data
        };

        return Fetch.post({ url: `${url}/get-response`, data: payload });
    }

    return {
        getResponse
    };
}
