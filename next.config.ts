/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
      {
        protocol: "https",
        hostname: "sm.ign.com",
      },
      {
        protocol: "https",
        hostname: "assets-prd.ignimgs.com",
      },
    ],
  },
};
module.exports = nextConfig;
