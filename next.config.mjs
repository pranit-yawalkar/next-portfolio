/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'pranityawalkar.vercel.app',
          },
        ],
        destination: 'https://pranityawalkar.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
