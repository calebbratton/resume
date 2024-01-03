/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: "/dms/image/**",
      },
      {
        protocol: "https",
        hostname: "k9iq6pknw7.execute-api.us-east-2.amazonaws.com",
        pathname: "/dev/resume-user-data/**"
      },
      {
        protocol: "https",
        hostname: "resume-user-data.s3.us-east-2.amazonaws.com",
        pathname: "/**"
      },
    ],
  },
};

module.exports = nextConfig;
