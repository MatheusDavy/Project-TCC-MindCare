// Forms
import { useForm } from 'react-hook-form';
import { schema, defaultValues, FormData } from './Forms.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRepository } from '../../../../../repository';
import useDialogAlert from '../../../../../hooks/useDialogAlert';

export const useLogic = ({}) => {
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
        authRepository
            .forgetPassword(data.email)
            .then(() => {
                dialogAlert.responseSuccess({
                    message: 'Verifique seu email para restaurar sua senha',
                    redirect: '/auth/login',
                });
            })
            .catch(error => {
                console.log(error);
                dialogAlert.responseError(error.response.data);
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
