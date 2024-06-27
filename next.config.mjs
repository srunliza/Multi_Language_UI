/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_APIURL: "http://localhost:9090",
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
