/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
    webVitalsAttribution: ['CLS', 'LCP'],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

module.exports = config;
