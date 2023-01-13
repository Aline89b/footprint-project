/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/gh-pages', 
  reactStrictMode: true,

  env: {
    API_KEY: process.env.API_KEY,
  },
  images: {
    domains: ["images.unsplash.com"]
  }  
  
}

module.exports = nextConfig
