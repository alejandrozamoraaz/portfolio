/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', //descomentariar al hacer commit
    images: {
        loader: 'custom',
        loaderFile: './cloudinary-loader.ts'
        // unoptimized: true
    },
};

module.exports = nextConfig;
