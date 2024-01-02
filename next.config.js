/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', //descomentariar al hacer commit
    images: {
        // loader: 'custom',
        // loaderFile: './cloudinary-loader.ts',
        // domains: ['res.cloudinary.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '/dlyfwab7x/image/upload/**',
            },
        ],

        // unoptimized: true
    },
};

module.exports = nextConfig;
