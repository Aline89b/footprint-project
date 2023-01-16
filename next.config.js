/** @type {import('next').NextConfig} */
const nextConfig = {
   
  reactStrictMode: true,

  env: {
    API_KEY: process.env.API_KEY,
  },
  images: {
    domains: ["localhost/3000"]
  }  
  
}

module.exports = nextConfig
