// Forms
import { useForm } from 'react-hook-form';
import { schema, defaultValues, FormData } from './Forms.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRepository } from '../../../../../repository';
import useDialogAlert from '../../../../../hooks/useDialogAlert';
import { useState } from 'react';

export const useLogig = () => {
    const [isSending, setIsSending] = useState(false);

    const { authRepository } = useRepository();
    const dialogAlert = useDialogAlert();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues,
        mode: 'onSubmit',
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        setIsSending(true);
        authRepository
            .register(data)
            .then(() => {
                dialogAlert.responseSuccess({
                    message: 'user-successfully-registered',
                    redirect: '/auth/login',
                });
            })
            .catch(error => {
                setIsSending(false);
                dialogAlert.responseError(error.response.data);
            });
    };

    return {
        data: {
            // Forms
            isSending,
            errors,
            control,
        },
        methods: {
            //   Forms
            onSubmit,
            handleSubmit,
        },
    };
};
