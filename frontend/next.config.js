/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    concurrentFeatures: true,
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
};

module.exports = nextConfig;
