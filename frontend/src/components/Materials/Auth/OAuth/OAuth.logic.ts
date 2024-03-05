import { signIn } from 'next-auth/react';
import useDialogAlert from '../../../../hooks/useDialogAlert';
import { useRepository } from '../../../../repository';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

export const useLogic = ({}) => {
    const { data: session } = useSession();
    const dialogAlert = useDialogAlert();
    const { authRepository } = useRepository();
    const router = useRouter();

    const googleLogin = async () => {
        signIn('google');
    };

    if (session && session.user) {
        const payload = {
            name: session.user.name!,
            email: session.user.email!,
        };
        authRepository
            .loginOAuth(payload)
            .then(data => {
                Cookies.set(process.env.NEXT_PUBLIC_JWT_TOKEN_KEY!, data.data);
                router.push('/dashboard');
            })
            .catch(error => {
                console.log(error);
                dialogAlert.responseError(
                    'Erro ao conectar com sua rede social :('
                );
            });
    }

    return {
        data: {},
        methods: { googleLogin },
    };
};
