/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.imgur.com"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
