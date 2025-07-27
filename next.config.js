// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     domains: ['cdn.10minuteschool.com'],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.10minuteschool.com', 's3.ap-southeast-1.amazonaws.com'],
  },
};

module.exports = nextConfig;