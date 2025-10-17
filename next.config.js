/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["poke-images.pages.dev"],
    qualities: [100],
  },
};

module.exports = nextConfig;
