import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'About Game Infinix - Pakistan\'s Premier Card Gaming Platform',
  description: 'Learn about Game Infinix, our history, mission, and vision for creating the best card gaming platform in Pakistan with Teen Patti, Rummy and more.',
  keywords: ['Game Infinix about', 'about us', 'gaming company Pakistan', 'Game Infinix history', 'card gaming platform', 'Teen Patti', '3 Patti'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://gameinfinix.net.pk/about-us",
  },
  openGraph: {
    title: 'About Game Infinix - Pakistan\'s Premier Card Gaming Platform',
    description: 'Learn about Game Infinix, our history, mission, and vision for creating the best card gaming platform in Pakistan with real cash rewards.',
    url: "https://gameinfinix.net.pk/about-us",
    siteName: "Game Infinix",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://gameinfinix.net.pk/game-infinix.webp",
        width: 1200,
        height: 630,
        alt: "About Game Infinix - Premier Card Gaming Platform",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'About Game Infinix - Pakistan\'s Premier Card Gaming Platform',
    description: 'Learn about Game Infinix, our history, mission, and vision for creating the best card gaming platform in Pakistan with real cash rewards.',
    images: ["https://gameinfinix.net.pk/game-infinix.webp"],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Us</h1>
          </div>
          
          {/* Main Content */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-20 mb-8">
              <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center md:justify-start">
                <Link href="/" className="block">
                  <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] mx-auto md:mx-0 rounded-lg overflow-hidden bg-[#0A1029]">
                    <Image 
                      src="/game-infinix.webp" 
                      alt="Game Infinix – Pakistan's Premier Card Gaming Platform"
                      title="About Game Infinix – Pakistan's #1 Card Game App"
                      width={320}
                      height={320}
                      sizes="(max-width: 768px) 280px, 320px"
                      className="object-contain p-4 w-full h-full"
                      priority
                    />
                  </div>
                </Link>
              </div>
              <div className="md:w-2/3 md:pl-4 lg:pl-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Welcome to <a href="https://www.gameinfinix.net.pk/" className="text-accent hover:text-accent font-semibold" target="_blank" rel="noopener noreferrer">www.gameinfinix.net.pk</a>, a trusted platform to provide the latest information about 3patti <Link href="/" className="text-accent hover:underline font-semibold">Game Infinix</Link>. This is one of the most popular online casino games in Pakistan, having <span className="font-bold text-accent">500K+ users</span>. <a href="https://gameinfinix.com/?from_gameid=4601151&channelCode=1700000" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">Download Game Infinix</a> now to join thousands of players earning real cash rewards.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Hundreds of people are playing these wonderful games and earning a handsome amount on a daily or weekly basis.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Our Aim Section */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">Our Aim!</h2>
            <p className="text-lg md:text-xl text-white leading-relaxed text-center">
              Our aim is to provide the users with the latest and updated information and earning tips about Game Infinix. For any type of information or query, you can visit our <Link href="/contact-us" className="underline hover:text-orange-100 font-semibold">contact us page</Link>.
            </p>
          </div>
          
          {/* Contact CTA */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Have Questions?</h2>
            <p className="text-gray-300 mb-6 text-lg">
              We're here to help! Contact our team for any information or queries about Game Infinix.
            </p>
            <Link 
              href="/contact-us" 
              className="inline-block bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Game Infinix",
              "alternateName": "Game Infinix",
              "url": "https://gameinfinix.net.pk",
              "logo": "https://gameinfinix.net.pk/game-infinix.webp",
              "description": "Game Infinix is Pakistan's premier card gaming platform, offering Teen Patti, Rummy, Dragon vs Tiger and more with real cash rewards.",
              "foundingDate": "2024",
              "foundingLocation": {
                "@type": "Country",
                "name": "Pakistan"
              },
              "sameAs": [
                "https://facebook.com/gameinfinix",
                "https://twitter.com/gameinfinix"
              ],
              "founder": {
                "@type": "Organization",
                "name": "Game Infinix"
              }
            },
            "about": {
              "@type": "Thing",
              "name": "Card Gaming Platform",
              "description": "Online card gaming platform with real cash rewards serving Pakistani users"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://gameinfinix.net.pk/about-us"
            }
          })
        }}
      />
    </div>
  );
} 