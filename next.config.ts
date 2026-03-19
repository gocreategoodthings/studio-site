import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    scrollRestoration: false,
  },
};

export default nextConfig;