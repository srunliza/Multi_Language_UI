/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_APIURL: "https://multilanguageapi-production.up.railway.app",
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
