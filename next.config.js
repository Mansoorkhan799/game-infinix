/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  
  // Target modern browsers - no legacy polyfills
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Optimize images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'slotspk.com.pk',
      },
    ],
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 80, 90, 100], // Configure allowed image quality values
  },

  async redirects() {
    return [
      // /about was indexed by Google but the real page is /about-us
      {
        source: '/about',
        destination: '/about-us',
        permanent: true,
      },
      // Malformed URLs Google crawled — send them home
      {
        source: '/\\$',
        destination: '/',
        permanent: true,
      },
      {
        source: '/\\&',
        destination: '/',
        permanent: true,
      },
      // SEO: 301s for old indexed URL paths only (must keep exact `source` strings)
      { source: '/download-card-rummy', destination: '/download-game-infinix', permanent: true },
      { source: '/deposit-money-in-card-rummy', destination: '/deposit-money-in-game-infinix', permanent: true },
      { source: '/withdraw-money-from-card-rummy', destination: '/withdraw-money-from-game-infinix', permanent: true },
      { source: '/card-rummy-for-pc', destination: '/game-infinix-for-pc', permanent: true },
      { source: '/blog/is-card-rummy-real-or-fake', destination: '/blog/is-game-infinix-real-or-fake', permanent: true },
      { source: '/blog/create-card-rummy-account-and-login', destination: '/blog/create-game-infinix-account-and-login', permanent: true },
      { source: '/blog/tips-to-win-big-in-card-rummy', destination: '/blog/tips-to-win-big-in-game-infinix', permanent: true },
      { source: '/blog/3patti-blue-vs-card-rummy', destination: '/blog/3patti-blue-vs-game-infinix', permanent: true },
      { source: '/blog/3patti-gold-vs-card-rummy', destination: '/blog/3patti-gold-vs-game-infinix', permanent: true },
      { source: '/blog/3patti-lucky-vs-card-rummy', destination: '/blog/3patti-lucky-vs-game-infinix', permanent: true },
      { source: '/blog/3patti-room-vs-card-rummy', destination: '/blog/3patti-room-vs-game-infinix', permanent: true },
      { source: '/blog/how-to-use-card-rummy-app-pakistan-guide-2026', destination: '/blog/how-to-use-game-infinix-app-pakistan-guide-2026', permanent: true },
      { source: '/blog/is-card-rummy-safe-legal-pakistan', destination: '/blog/is-game-infinix-safe-legal-pakistan', permanent: true },
      { source: '/blog/card-rummy-bonuses-vip-guide', destination: '/blog/game-infinix-bonuses-vip-guide', permanent: true },
      { source: '/blog/card-rummy-tips-10-smart-tricks', destination: '/blog/game-infinix-tips-10-smart-tricks', permanent: true },
      { source: '/blog/responsible-gaming-guide-card-rummy', destination: '/blog/responsible-gaming-guide-game-infinix', permanent: true },
      { source: '/blog/card-rummy-app-review-2026', destination: '/blog/game-infinix-app-review-2026', permanent: true },
      { source: '/blog/card-rummy-old-version-features-review-2026', destination: '/blog/game-infinix-old-version-features-review-2026', permanent: true },
      { source: '/blog/ips-exceed-issue-card-rummy-how-to-fix', destination: '/blog/ips-exceed-issue-game-infinix-how-to-fix', permanent: true },
      { source: '/blog/card-rummy-latest-version-new-features-2026-updates', destination: '/blog/game-infinix-latest-version-new-features-2026-updates', permanent: true },
      { source: '/blog/ways-to-earn-money-with-card-rummy-2026', destination: '/blog/ways-to-earn-money-with-game-infinix-2026', permanent: true },
    ];
  },

  // Optimize static file serving
  async rewrites() {
    return [
      {
        source: '/.well-known/:path*',
        destination: '/public/.well-known/:path*',
      },
      // Redirect old 3Patti Blue logo to Game Infinix logo
      {
        source: '/3-patti-blue-logo.webp',
        destination: '/game-infinix.webp',
      },
      {
        source: '/card-rummy-logo.webp',
        destination: '/game-infinix.webp',
      },
      {
        source: '/card-rummy.webp',
        destination: '/game-infinix.webp',
      },
    ];
  },

  // Optimize headers
  async headers() {
    return [
      // HTML pages: always revalidate so Googlebot gets fresh content
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
      // Immutable cache only for fingerprinted static assets
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Public images: long cache but allow revalidation
      {
        source: '/:path*.webp',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/css/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'text/css',
          },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Handle webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Enable proper static file handling
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    // Optimize for development
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }

    // Target modern browsers - don't transpile modern JavaScript features
    if (!isServer) {
      config.target = ['web', 'es2022'];
      
      // Disable Next.js polyfills for modern browsers (Lighthouse: Legacy JavaScript)
      // Saves ~11KB - polyfills for Array.at, Object.hasOwn, etc. aren't needed for Chrome 90+, Safari 14+, etc.
      config.resolve.alias = {
        ...config.resolve.alias,
        '../build/polyfills/polyfill-module': false,
        'next/dist/build/polyfills/polyfill-module': false,
      };
    }

    return config;
  },

  // Enable experimental features
  experimental: {
    optimizeCss: true, // Critters inlines critical CSS
    inlineCss: true, // Inline CSS in HTML to eliminate render-blocking (improves FCP/LCP)
    scrollRestoration: true,
    optimizePackageImports: ['react-icons'],
  },
  
  // Modern module/nomodule pattern
  modularizeImports: {
    'react-icons': {
      transform: 'react-icons/{{member}}',
    },
  },
}

module.exports = nextConfig 