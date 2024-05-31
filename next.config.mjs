/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      },
    ],
  },
  env: {
    API_KEY: process.env.API_KEY,
    BASE_POSTER_URL: process.env.BASE_POSTER_URL,
  },
};

export default nextConfig;
