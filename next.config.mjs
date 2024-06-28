/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_APIURL: "http://68.183.234.148:8383",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
