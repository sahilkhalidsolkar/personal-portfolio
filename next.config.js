/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['framerusercontent.com', 'source.unsplash.com', 'cdn.sanity.io'],
    },
    env: {
        NEXTJS_BASE_URL: process.env.NEXTJS_BASE_URL,
    }
}

module.exports = nextConfig
