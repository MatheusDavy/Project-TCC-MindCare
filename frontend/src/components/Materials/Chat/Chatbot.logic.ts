import { useRepository } from '../../../repository';

export const useLogic = () => {

    const { chatbotRepository } = useRepository();

    const handleSubmit = async (value: string) => {
        return new Promise((resolve, reject) => {
            chatbotRepository
                .getResponse(value)
                .then((data: any) => {
                    resolve(data.data.response);
                })
                .catch((error: any) => {
                    console.error(error);
                    reject(null);
                });
        });
    };

    const handleCreateNewQuestion = async (question: string) => {
        chatbotRepository.createNewQuestion(question);
    };

    return {
        data: {},
        methods: {
            handleSubmit,
            handleCreateNewQuestion
        },
    };
};
