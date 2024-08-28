import { useRepository } from '../../../repository';

export const useLogic = (p0: {}) => {

    const { chatbotRepository } = useRepository();

    const handleSubmit = async (value: string) => {
        return new Promise((resolve, reject) => {
            chatbotRepository
                .getResponse(value)
                .then((data: any) => {
                    resolve(data.data.response.response);
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
