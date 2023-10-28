/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
    getServerSideProps: false,
    productionBrowserSourceMaps: true,
  },
};
module.exports = nextConfig;
