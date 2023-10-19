/** @type {import('next').NextConfig} */
const nextConfig = {
  future: { webpack5: true },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node/,
      use: "raw-loader",
    });
    return config
  }
}

module.exports = nextConfig
