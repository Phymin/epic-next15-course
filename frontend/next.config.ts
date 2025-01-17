import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "proud-breeze-80856425d6.media.strapiapp.com",
      },
    ],
  },
};

export default nextConfig;
