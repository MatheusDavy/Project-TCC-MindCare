// Forms
import { useForm } from 'react-hook-form';
import { schema, defaultValues, FormData } from './Forms.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRepository } from '../../../../../repository';
import useDialogAlert from '../../../../../hooks/useDialogAlert';
import { useRouter } from 'next/router';


export const useLogic = ({}) => {
    const router = useRouter();
    const userId = router.query.userId ? String(router.query.userId) : '';
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

    if (typeof window !== 'undefined' && !userId) router.push('/auth/login');

    const onSubmit = async (data: FormData) => {
        const payload = {
            token: userId,
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
