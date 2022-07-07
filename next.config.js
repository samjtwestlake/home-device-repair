/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/home-device-repair' : '',
  images: {
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig
