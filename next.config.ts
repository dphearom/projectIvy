import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so Next doesn't mistakenly infer a parent directory
  // when multiple lockfiles exist on the machine.
  turbopack: {
    root: __dirname,
  },
  images: {
    // Event images are hosted on Cloudinary.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
