/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.icons8.com',
                pathname: '/3d-fluency/**',
            },
            {
                protocol: 'https',
                hostname: 'i.postimg.cc',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'pngimg.com',
                pathname: '/uploads/under_construction/**'
            }
        ],
    },
};

module.exports = nextConfig;
