// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "thestayathomechef.com",
      },
      {
        protocol: "https",
        hostname: "images-prod.healthline.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "iqeyhkdpszhvlakvkggo.supabase.co",
      },
    ],
  },
};

export default nextConfig;
