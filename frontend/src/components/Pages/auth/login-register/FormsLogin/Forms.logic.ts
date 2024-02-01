// Forms
import { useForm } from 'react-hook-form';
import { schema, defaultValues, FormData } from './Forms.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRepository } from '../../../../../repository';
import useDialogAlert from '../../../../../hooks/useDialogAlert';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { useState } from 'react';

export const useLogic = ({}) => {
    const [loading, setLoading] = useState(false);
    const { authRepository } = useRepository();
    const dialogAlert = useDialogAlert();
    const router = useRouter();
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues,
        mode: 'onSubmit',
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        setLoading(true);
        await authRepository
            .login(data)
            .then(data => {
                Cookies.set(
                    process.env.NEXT_PUBLIC_JWT_TOKEN_KEY!,
                    data.data.token
                );
                router.push('/dashboard');
            })
            .catch(error => {
                dialogAlert.responseError(error.response.data);
            });
        setLoading(false);
    };

    return {
        data: {
            // Forms
            errors,
            control,
            loading,
        },
        methods: {
            register,
            onSubmit,
            handleSubmit,
        },
    };
};
