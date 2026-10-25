import type { NextConfig } from "next";

// Root site: NEXT_PUBLIC_BASE_PATH=""
// Repository project site: NEXT_PUBLIC_BASE_PATH="/repository-name"
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(basePath ? { basePath } : {}),
};
export default nextConfig;
