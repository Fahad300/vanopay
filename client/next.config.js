/**
 * Next.js configuration for Docker deployment
 * Enables standalone output for smaller Docker images
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
};

module.exports = nextConfig;

