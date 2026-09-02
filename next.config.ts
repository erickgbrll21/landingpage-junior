import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.juniormaffille.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
