import { signOut } from 'next-auth/react';
import Cookies from 'js-cookie';

export const logout = async () => {
    await Cookies.remove(process.env.NEXT_PUBLIC_JWT_TOKEN_KEY!);
    signOut({
        redirect: true,
        callbackUrl: '/auth/login'
    });
};
