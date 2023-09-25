/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    IZI_URL: process.env.IZI_URL,
    TEST_KEY: process.env.TEST_KEY,
  },
}

module.exports = nextConfig
