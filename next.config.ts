import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '**',
      },
    ],
  },
  poweredByHeader: false,
  compress: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
