import Cookies from 'js-cookie';

export const logout = async () => {
    await Cookies.remove(process.env.NEXT_PUBLIC_JWT_TOKEN_KEY!);
    await Cookies.remove(process.env.NEXT_PUBLIC_USER_DATAS);
    window.location.href = '/';
};
