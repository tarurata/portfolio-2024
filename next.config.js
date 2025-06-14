/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      optimizePackageImports: ["lucide-react"],
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  