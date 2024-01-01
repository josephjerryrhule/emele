/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "emele.joeydutch.com",
      },
    ],
  },
  distDir: "build",
};

module.exports = nextConfig;
