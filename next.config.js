/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '/dlyfwab7x/image/upload/**',
            }
        ],
    },
};

module.exports = nextConfig;
