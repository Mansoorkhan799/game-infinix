import { NextResponse } from 'next/server';

const baseUrl = 'https://gameinfinix.net.pk';

type PageType = {
  url: string;
  lastMod: string;
  changeFreq: string;
  priority: number;
  images?: Array<{
    loc: string;
    title: string;
    caption: string;
  }>;
};

export async function GET() {
  const mainPages: PageType[] = [
    {
      url: '/',
      lastMod: new Date().toISOString(),
      changeFreq: 'daily',
      priority: 1.0,
      images: [
        {
          loc: '/game-infinix.webp',
          title: 'Game Infinix - Official App Icon and Brand Image',
          caption:
            "Game Infinix - Pakistan's #1 card game app. Play Teen Patti, Rummy, Dragon vs Tiger. Download Game Infinix APK for Android.",
        },
        {
          loc: '/game-infinix.webp',
          title: 'Game Infinix Official Logo',
          caption: "Official Game Infinix logo - Pakistan's premier card gaming platform",
        },
      ],
    },
    {
      url: '/download-game-infinix',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/game-infinix.webp',
          title: 'Download Game Infinix',
          caption: 'Download Game Infinix APK for Android',
        },
      ],
    },
    {
      url: '/deposit-money-in-game-infinix',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9,
    },
    {
      url: '/withdraw-money-from-game-infinix',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9,
    },
    {
      url: '/game-infinix-for-pc',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/game-infinix.webp',
          title: 'Game Infinix for PC',
          caption: 'Play Game Infinix on PC using Android Emulator',
        },
      ],
    },
    {
      url: '/about-us',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.7,
      images: [
        {
          loc: '/game-infinix.webp',
          title: 'About Game Infinix',
          caption: 'Learn about Game Infinix gaming platform',
        },
      ],
    },
    {
      url: '/blog',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.8,
      images: [
        {
          loc: '/game-infinix.webp',
          title: 'Game Infinix Blog',
          caption: 'Guides and tutorials for Game Infinix gaming platform',
        },
      ],
    },
    {
      url: '/contact-us',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.7,
    },
    {
      url: '/privacy',
      lastMod: new Date().toISOString(),
      changeFreq: 'yearly',
      priority: 0.6,
    },
    {
      url: '/disclaimer',
      lastMod: new Date().toISOString(),
      changeFreq: 'yearly',
      priority: 0.6,
    },
  ];

  const blogSlugs = [
    'is-game-infinix-real-or-fake',
    'create-game-infinix-account-and-login',
    'tips-to-win-big-in-game-infinix',
    'ips-exceed-issue-game-infinix-how-to-fix',
    'game-infinix-old-version-features-review-2026',
    'game-infinix-latest-version-new-features-2026-updates',
    'ways-to-earn-money-with-game-infinix-2026',
    '3patti-blue-vs-game-infinix',
    '3patti-gold-vs-game-infinix',
    '3patti-lucky-vs-game-infinix',
    '3patti-room-vs-game-infinix',
    'how-to-use-game-infinix-app-pakistan-guide-2026',
    'dragon-vs-tiger-andar-bahar-high-payout-games',
    'is-game-infinix-safe-legal-pakistan',
    'game-infinix-bonuses-vip-guide',
    'game-infinix-tips-10-smart-tricks',
    'responsible-gaming-guide-game-infinix',
    'game-infinix-app-review-2026',
    'create-account-login',
  ];

  const blogPosts: PageType[] = blogSlugs.map((slug) => ({
    url: `/blog/${slug}`,
    lastMod: new Date().toISOString(),
    changeFreq: 'monthly',
    priority: slug.includes('app-review') ? 0.9 : 0.8,
  }));

  const allPages = [...mainPages, ...blogPosts];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${allPages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastMod}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
    ${page.images
      ?.map(
        (img) => `
    <image:image>
      <image:loc>${baseUrl}${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`
      )
      .join('') || ''}
  </url>
  `
    )
    .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
