/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/Cyclone-react',
    images: {
        unoptimized: true,
        loaderFile: './loader.js',
    },
};

export default nextConfig;
