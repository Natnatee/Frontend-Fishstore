/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dgtfarm.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dw.lnwfile.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 't1.blockdit.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'obs-ect.line-scdn.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'sncfishshop.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
