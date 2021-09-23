/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  basePath: '/hacktoberfest-web',
  images: {
    path: '/hacktoberfest-web/_next/image',
  }
};
