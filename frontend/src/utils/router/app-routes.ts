export const APP_ROUTES = {
    private: {
        client: '/dashboard',
        admin: '/admin'
    },
    unauthorized: {
        name: 'unauthorized'
    },
    public: {
        auth: '/auth',
        forget_password: '/auth/forget-password',
        reset_password: '/auth/reset-password'
    }
};

export const checkIsPublicRoute = (asPath: string) => {
    const appPublicRoutes = Object.values(APP_ROUTES.public);
    return appPublicRoutes.includes(String(asPath));
};

