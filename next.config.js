/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: 'custom',
        loaderFile: './cloudinary-loader.js',
    },
};

module.exports = nextConfig;
