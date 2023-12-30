// Forms
import { useForm } from 'react-hook-form';
import { schema, defaultValues, FormData } from './Forms.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRepository } from '../../../../../repository';
import useDialogAlert from '../../../../../hooks/useDialogAlert';

export const useLogic = ({}) => {
    const userId = new URLSearchParams(window.location.search).get('userId');
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

    const onSubmit = async (data: FormData) => {
        const payload = {
            token: userId!,
            password: data.password,
        };

        return authRepository
            .resetPassword(payload)
            .then(() => {
                dialogAlert.responseSuccess({
                    message: 'Senha alterada com sucesso !',
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
    };

    return {
        data: {
            // Forms
            errors,
            control,
        },
        methods: {
            // Forms
            onSubmit,
            handleSubmit,
        },
    };
};
