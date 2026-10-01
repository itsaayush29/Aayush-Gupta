import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three"],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
