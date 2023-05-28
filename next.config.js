/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "halustorage-hn.ss-hn-1.vccloud.vn",
    ],
  },
  swcMinify: true,
  experimental: {
    appDir: true,
  },
};

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
});


module.exports = nextConfig;
