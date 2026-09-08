import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep workspace discovery within this standalone project.
  turbopack: { root: process.cwd() },
  poweredByHeader: false,
};

export default nextConfig;
