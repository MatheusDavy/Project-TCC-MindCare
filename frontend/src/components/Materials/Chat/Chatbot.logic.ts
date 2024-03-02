import { useRepository } from '../../../repository';

export const useLogic = () => {

    const { chatbotRepository } = useRepository();

    const handleSubmit = async (value: string) => {
        return new Promise((resolve, reject) => {
            chatbotRepository
                .getResponse(value)
                .then((response: any) => {
                    console.log(response);
                    // resolve(response.data.response);
                })
                .catch((error: any) => {
                    console.log(error);
                    reject(null);
                });
        });
    };

    return {
        data: {},
        methods: {
            handleSubmit,
        },
    };
};
