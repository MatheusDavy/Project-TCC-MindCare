import { useState } from 'react';

export const useLogic = () => {
    const [loading, setIsLoading] = useState(false);
    const [edit, setEdit] = useState(false);

    const onSubmit = async () => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            setEdit(false);
            getUserDatas();
        }, 3000);
    };

    const getUserDatas = () => {};

    return {
        data: { loading, edit },
        methods: {
            setEdit,
            onSubmit
        },
    };
};
