export const checkIsPublicRoute = (asPath: string) => {
    return asPath.includes('/auth');
};

