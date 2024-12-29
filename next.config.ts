import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Allows builds even with ESLint errors
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.cloudinary.com", // Allows images from any Cloudinary subdomain
      },
    ],
  },
};

export default nextConfig;
