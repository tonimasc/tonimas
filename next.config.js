/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: true,
  },
  reactStrictMode: true,
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
