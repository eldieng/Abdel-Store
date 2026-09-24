/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Hostinger Node shared hosting: sharp/next-image optimizer is unreliable
    unoptimized: true,
  },
};

export default nextConfig;
