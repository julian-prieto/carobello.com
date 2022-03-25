/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    domains: ["scontent.cdninstagram.com"],
  },
};

module.exports = nextConfig;
