/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "cdn-icons-png.flaticon.com",
            },
        ],
    },
    webpack: (config, { isServer }) => {
        // Ensure @ alias is resolved
        config.resolve.alias = {
            ...config.resolve.alias,
        };
        return config;
    },
};

export default nextConfig;
