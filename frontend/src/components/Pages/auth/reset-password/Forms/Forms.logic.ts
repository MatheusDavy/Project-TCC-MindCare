// Forms
import { useForm } from 'react-hook-form';
import { schema, defaultValues, FormData } from './Forms.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRepository } from '../../../../../repository';
import useDialogAlert from '../../../../../hooks/useDialogAlert';
import { useState } from 'react';
import { useRouter } from 'next/router';

export const useLogic = ({}) => {
    const userId = new URLSearchParams(window.location.search).get('userId');
    const router = useRouter();
    const [loading, setLoading] = useState(false);
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
            .then((e: any) => {
                dialogAlert.responseSuccess({
                    message: e.data.message,
                    redirect: '/auth/',
                });
            })
            .catch(error => {
                dialogAlert.responseError({
                    ...error.response.data,
                    redirect: '/auth/',
                });
            });
        setLoading(false);

        setTimeout(() => {
            router.push('/auth/');
        }, 3000);
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
