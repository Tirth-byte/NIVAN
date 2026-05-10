import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standard Next.js 15+ config
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
