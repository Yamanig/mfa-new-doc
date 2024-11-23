/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  swcMinify: false // Disable SWC minification in WebContainer
};

module.exports = nextConfig;