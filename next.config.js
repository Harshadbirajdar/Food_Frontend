/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API: "https://harshadfood.herokuapp.com/api/v1",
  },
};

module.exports = nextConfig;
