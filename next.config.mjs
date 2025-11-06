/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure PostCSS is processed correctly
  experimental: {
    optimizeCss: false,
  },
}

export default nextConfig 