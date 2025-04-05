/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
    ],
  },
  // Next.js 15 features
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  // Optimization options
  optimizePackageImports: [
    'framer-motion',
    'react-icons',
    'react-hook-form',
  ],
  // The experimental optimizeCss is now stable in Next.js 15
  optimizeCss: true,
  // Improved scroll behavior
  scrollRestoration: true,
};

export default nextConfig;