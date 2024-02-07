// Forms
import { useForm } from 'react-hook-form';
import { schema, defaultValues, FormData } from './Forms.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRepository } from '../../../../../repository';
import useDialogAlert from '../../../../../hooks/useDialogAlert';
import { useState } from 'react';

export const useLogic = ({}) => {
    const [loading, setLoading] = useState(false);
    const userId = new URLSearchParams(window.location.search).get('userId');
    const { authRepository } = useRepository();
    const dialogAlert = useDialogAlert();
    const {
        control,
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        defaultValues,
        mode: 'onSubmit',
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        const payload = {
            token: userId!,
            password: data.password,
        };
        setLoading(true);
        await authRepository
            .resetPassword(payload)
            .then(() => {
                dialogAlert.responseSuccess({
                    message: 'password-successfully-changed',
                    redirect: '/auth/login',
                });
            })
            .catch(error => {
                console.log(error);
                dialogAlert.responseError({
                    ...error.response.data,
                    redirect: '/auth/login',
                });
            });
        setLoading(false);
    };

    return {
        data: {
            // Forms
            loading,
            errors,
            control,
        },
        methods: {
            // Forms
            onSubmit,
            handleSubmit,
            register
        },
    };
};
