// Forms
import { useForm } from 'react-hook-form';
import { schema, defaultValues, FormData } from './Forms.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRepository } from '../../../../../repository';
import useDialogAlert from '../../../../../hooks/useDialogAlert';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

export const useLogic = ({}) => {
    const { authRepository } = useRepository();
    const dialogAlert = useDialogAlert();
    const router = useRouter();
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
            .login(data)
            .then(data => {
                Cookies.set(process.env.NEXT_PUBLIC_JWT_TOKEN_KEY!, data.data.token);
                router.push('/client');
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
