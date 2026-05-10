import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@/components/ui",
      "framer-motion"
    ],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Ensure we use the correct root for tracing
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
