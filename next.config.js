/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.wappalyzer.com',
                port: '',
                pathname: '/images/icons/**',
            },
        ],
    },
};

module.exports = nextConfig;
