export const APP_ROUTES = {
    private: {
        client: '/client',
        admin: '/admin'
    },
    unauthorized: {
        name: 'unauthorized'
    },
    public: {
        login: '/auth/login',
        register: '/auth/register',
        forget_password: '/auth/forget-password',
        reset_password: '/auth/reset-password'
    }
};

export const checkIsPublicRoute = (asPath: string) => {
    const appPublicRoutes = Object.values(APP_ROUTES.public);
    return appPublicRoutes.includes(String(asPath));
};

