/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export', descomentariar al hacer commit
    images: {
        unoptimized: true,
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
            }
        ],
    },
};

module.exports = nextConfig;
