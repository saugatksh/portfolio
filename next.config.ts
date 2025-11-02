import type { NextConfig } from "next";

// Use repo name as basePath only when deployed to GitHub Pages
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/portfolio" : "";

const nextConfig: NextConfig = {
  output: "export", // ensures static export for GitHub Pages
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true, // required for static export
  },
  trailingSlash: true, // makes all routes end with '/'
  eslint: {
    ignoreDuringBuilds: true, // avoids ESLint breaking your build
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // Optional: Disable automatic image optimization completely
  // since GitHub Pages is static and can't handle dynamic routes
  experimental: {
    optimizeCss: true, // speeds up build/export
  },
};

export default nextConfig;
