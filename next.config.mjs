/** @type {import('next').NextConfig} */
const nextConfig = {
    // dev
    // devIndicators: false,
    // reactStrictMode: true,

    // gh-pages
    output: 'export',
    basePath: '/Cyclone-react',
    images: {
        loader: 'custom',
        loaderFile: './loader.js',
        unoptimized: true,
    },
};

export default nextConfig;
