import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#06091F",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://gameinfinix.net.pk'),
  title: {
    default: "Game Infinix Pakistan v3.2(1) Free Download Official APK",
    template: "%s | Game Infinix"
  },
  description: "Game Infinix 2026 — Pakistan's #1 card game platform for 3 Patti Game Infinix & Teen Patti Game Infinix fans. Download the APK, play Teen Patti, Rummy, Dragon vs Tiger & win real cash. JazzCash & EasyPaisa. 500K+ players!",
  keywords: [
    "Game Infinix",
    "3 patti game infinix",
    "teen patti game infinix",
    "game infinix download",
    "game infinix app",
    "game infinix apk",
    "game infinix pakistan",
    "game infinix online",
    "download game infinix",
    "game infinix real money",
    "how to play game infinix",
    "game infinix 2026",
    "Pakistan card games",
    "Teen Patti game",
    "online rummy game",
    "earn money playing cards",
    "Android gaming app 2026",
    "JazzCash gaming",
    "EasyPaisa gaming",
    "mobile card games",
    "real money games Pakistan",
    "card game earning app",
    "Teen Patti online",
    "Dragon vs Tiger",
    "best earning app Pakistan",
    "rummy card game",
    "play rummy online",
    "rummy game download"
  ],
  authors: [{ name: "Game Infinix Team" }],
  creator: "Game Infinix",
  publisher: "Game Infinix",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon', sizes: 'any' },
      { url: '/game-infinix.webp', type: 'image/webp', sizes: '192x192' },
      { url: '/game-infinix.webp', type: 'image/webp', sizes: '1024x1024' }
    ],
    apple: [
      { url: '/game-infinix.webp', sizes: '180x180' }
    ],
    shortcut: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ]
  },
  verification: {
    google: "8a7c21f6e90a89ef",
  },
  alternates: {
    canonical: "https://gameinfinix.net.pk",
  },
  openGraph: {
    title: "Game Infinix Pakistan v3.2(1) Free Download Official APK",
    description: "Game Infinix 2026 - Pakistan's #1 card game platform. Join 500K+ players. Play Teen Patti, Rummy & more. Earn real money with JazzCash & EasyPaisa. Download now!",
    url: "https://gameinfinix.net.pk",
    siteName: "Game Infinix",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://gameinfinix.net.pk/feature/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Game Infinix - Premier Card Gaming Platform",
      },
      {
        url: "https://gameinfinix.net.pk/feature/og-image-square.webp",
        width: 800,
        height: 800,
        alt: "Game Infinix - Premier Card Gaming Platform",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Game Infinix Pakistan v3.2(1) Free Download Official APK",
    description: "Game Infinix 2026 - Pakistan's #1 card game platform. Join 500K+ players. Play Teen Patti, Rummy & more. Earn real money with JazzCash & EasyPaisa. Download now!",
    creator: "@gameinfinix",
    images: [
      {
        url: "https://gameinfinix.net.pk/feature/twitter-card.webp",
        width: 1200,
        height: 600,
        alt: "Game Infinix - Premier Card Gaming Platform",
      }
    ],
  },
  applicationName: "Game Infinix",
  category: "Gaming",
  classification: "Card Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16 32x32" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/game-infinix.webp" type="image/webp" sizes="192x192" />
        <link rel="icon" href="/game-infinix.webp" type="image/webp" sizes="1024x1024" />
        <link rel="apple-touch-icon" href="/game-infinix.webp" sizes="180x180" />
        <meta property="og:image" content="https://gameinfinix.net.pk/game-infinix.webp" />
        <meta property="og:image:alt" content="Game Infinix - Pakistan's #1 card game app. Play Teen Patti, Rummy, Dragon vs Tiger." />
        
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Defer manifest to avoid critical path (374ms latency) - load after page interactive */}
        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json';document.head.appendChild(l);})();`}
        </Script>
        {/* Google Analytics - only load if GA ID is set in env (use NEXT_PUBLIC_GA_MEASUREMENT_ID) */}
        {typeof process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID === 'string' &&
         process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
         !/^G-XXXXXXXXXX$/i.test(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: false,
                  transport_type: 'beacon'
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className="antialiased bg-primary text-white min-h-screen flex flex-col"
        style={{
          backgroundImage: "radial-gradient(circle at 10% 20%, rgba(10, 16, 41, 0.4) 0%, rgba(6, 9, 31, 0.01) 90%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh"
        }}
        suppressHydrationWarning
      >
        <div className="stars-bg fixed inset-0 z-0 opacity-20"></div>
        <Header />
        <main className="relative z-10">
        {children}
        </main>
        <DeferredStyles />
        <Footer />
        <ScrollToTopWrapper />
        <WebVitalsTracker />
        
        {/* Structured data for Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Game Infinix",
              "url": "https://gameinfinix.net.pk",
              "logo": "https://gameinfinix.net.pk/game-infinix.webp",
              "description": "Game Infinix is Pakistan's premier card gaming platform, offering Teen Patti, Rummy, and many other card games with real cash rewards.",
              "sameAs": [
                "https://facebook.com/gameinfinix",
                "https://twitter.com/gameinfinix"
              ]
            })
          }}
        />
        
        {/* Structured data for SoftwareApplication */}
        <Script
          id="app-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Game Infinix",
              "operatingSystem": "Android",
              "applicationCategory": "GameApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "PKR"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.5",
                "ratingCount": "500000"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
