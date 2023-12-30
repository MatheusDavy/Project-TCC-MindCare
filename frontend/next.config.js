/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/auth/login',
                permanent: true,
            },
        ];
    },
    i18n: {
        locales: ['pt-BR', 'en-US'],
        defaultLocale: 'pt-BR',
        localeDetection: false,
    },
};

module.exports = nextConfig;
