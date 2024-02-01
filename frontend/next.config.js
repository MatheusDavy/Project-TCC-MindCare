/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/auth/',
                permanent: true,
            },
        ];
    },
    i18n: {
        locales: ['pt-BR', 'en-US'],
        defaultLocale: 'pt-BR',
        localeDetection: true,
    },
};

module.exports = nextConfig;
