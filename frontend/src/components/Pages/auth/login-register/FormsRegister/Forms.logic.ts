// Forms
import { useForm } from 'react-hook-form';
import { schema, defaultValues, FormData } from './Forms.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRepository } from '../../../../../repository';
import useDialogAlert from '../../../../../hooks/useDialogAlert';
import { useState } from 'react';

export const useLogic = ({ changeToLogin }) => {
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
        setLoading(true);
        await authRepository
            .register(data)
            .then(() => {
                dialogAlert.responseSuccess({
                    message: 'user-successfully-registered',
                });
                changeToLogin();
            })
            .catch(error => {
                dialogAlert.responseError(error.response.data);
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
            //   Forms
            onSubmit,
            handleSubmit,
            register
        },
    };
};
