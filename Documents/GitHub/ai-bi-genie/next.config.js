/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    serverComponentsExternalPackages: []
  },
  env: {
    SYSTEM_NAME: 'Ask CES',
    SYSTEM_VERSION: '3.0.0',
    PLATFORM_MOTTO: 'Central Intelligence for Enterprise Success'
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'X-CES-Platform',
            value: 'Ask CES v3.0'
          },
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=10, stale-while-revalidate=59'
          }
        ]
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/ces/:path*',
        destination: '/:path*'
      },
      {
        source: '/ask-ces/:path*', 
        destination: '/:path*'
      }
    ]
  }
}

module.exports = nextConfig