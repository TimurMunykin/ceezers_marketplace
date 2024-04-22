/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ceezer-public-assets.s3.eu-central-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/projects',
        destination: 'https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/tech/frontend-code-challenge/projects_sample.json',
      },
    ]
  },
};

export default nextConfig;