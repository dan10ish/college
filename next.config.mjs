/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", 
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/<your-repo-name>" : undefined,
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
