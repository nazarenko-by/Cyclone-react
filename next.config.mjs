/** @type {import('next').NextConfig} */
const nextConfig = {
    // dev
    // devIndicators: false,
    // reactStrictMode: true,

    // gh-pages
    output: 'export',
    basePath: '/Cyclone-react',
    images: {
        unoptimized: true,
        loaderFile: './loader.js',
    },
};

export default nextConfig;
