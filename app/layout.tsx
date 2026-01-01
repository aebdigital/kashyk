import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nataliyakashyk.sk'),
  title: {
    default: 'Kozmetický salón Natalia Kashyk | Bratislava centrum',
    template: '%s | Salón Natalia Kashyk',
  },
  description: 'Profesionálny kozmetický salón v centre Bratislavy. Ponúkame ošetrenie pleti, anti-aging procedúry, čistenie pleti a komplexnú starostlivosť o pleť. Viac ako 10 rokov skúseností.',
  keywords: [
    'kozmetický salón Bratislava',
    'kozmetička Bratislava',
    'ošetrenie pleti Bratislava',
    'čistenie pleti Bratislava',
    'anti-aging Bratislava',
    'kozmetika centrum Bratislava',
    'Natalia Kashyk',
    'beauty salón Bratislava',
    'starostlivosť o pleť',
    'profesionálna kozmetika',
    'Hodžovo námestie kozmetika',
  ],
  authors: [{ name: 'Natalia Kashyk' }],
  creator: 'Natalia Kashyk',
  publisher: 'Natalia Kashyk',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'sk_SK',
    url: 'https://www.nataliyakashyk.sk',
    siteName: 'Kozmetický salón Natalia Kashyk',
    title: 'Kozmetický salón Natalia Kashyk | Bratislava centrum',
    description: 'Profesionálny kozmetický salón v centre Bratislavy. Ošetrenie pleti, anti-aging, čistenie pleti. Viac ako 10 rokov skúseností.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kozmetický salón Natalia Kashyk - Bratislava',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kozmetický salón Natalia Kashyk | Bratislava',
    description: 'Profesionálny kozmetický salón v centre Bratislavy. Ošetrenie pleti, anti-aging, čistenie pleti.',
    images: ['/og-image.jpg'],
  },
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
  alternates: {
    canonical: 'https://www.nataliyakashyk.sk',
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: 'your-google-verification-code',
  },
  category: 'beauty',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'Kozmetický salón Natalia Kashyk',
    alternateName: 'Salón Natalia Kashyk',
    description: 'Profesionálny kozmetický salón v centre Bratislavy. Ošetrenie pleti, anti-aging procedúry, čistenie pleti a komplexná starostlivosť o pleť.',
    url: 'https://www.nataliyakashyk.sk',
    telephone: '+421940235635',
    email: 'kashyknatalya@gmail.com',
    image: 'https://www.nataliyakashyk.sk/og-image.jpg',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Podchod Hodžovo námestie 4',
      addressLocality: 'Bratislava',
      addressRegion: 'Bratislavský kraj',
      postalCode: '811 06',
      addressCountry: 'SK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.1489,
      longitude: 17.1077,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '15:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/natakosmeticka/',
      'https://www.fresha.com/a/natalia-kashyk-kozmeticka-bratislavsky-kraj-hodzovo-namestie-4-tatra-centr-rpegt4ih',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Kozmetické služby',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ošetrenie pleti',
            description: 'Profesionálne ošetrenie pleti prispôsobené vášmu typu pleti',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Anti-aging procedúry',
            description: 'Омолоdzujúce procedúry pre mladistvý vzhľad pleti',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Čistenie pleti',
            description: 'Hĺbkové čistenie pleti pre zdravý a svieži vzhľad',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '50',
      bestRating: '5',
      worstRating: '1',
    },
  };

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.nataliyakashyk.sk/#localbusiness',
    name: 'Kozmetický salón Natalia Kashyk',
    image: 'https://www.nataliyakashyk.sk/og-image.jpg',
    telephone: '+421940235635',
    email: 'kashyknatalya@gmail.com',
    url: 'https://www.nataliyakashyk.sk',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Podchod Hodžovo námestie 4',
      addressLocality: 'Bratislava',
      addressRegion: 'Bratislavský kraj',
      postalCode: '811 06',
      addressCountry: 'SK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.1489,
      longitude: 17.1077,
    },
    areaServed: {
      '@type': 'City',
      name: 'Bratislava',
    },
  };

  return (
    <html lang="sk">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#572337" />
        <meta name="geo.region" content="SK-BL" />
        <meta name="geo.placename" content="Bratislava" />
        <meta name="geo.position" content="48.1489;17.1077" />
        <meta name="ICBM" content="48.1489, 17.1077" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
