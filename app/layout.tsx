import type { Metadata, Viewport } from "next";
import { Manrope, Geist_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "./analytics";
import PerformanceOptimizer from "../components/PerformanceOptimizer";
import { LanguageProvider } from "../contexts/LanguageContext";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Fakultet informacijskih tehnologija Mostar | FIT",
    template: "%s | Fakultet informacijskih tehnologija Mostar"
  },
  description: "Fakultet informacijskih tehnologija 'Džemal Bijedić' Univerziteta u Mostaru - vodeći fakultet za studij informatike u Bosni i Hercegovini. Studij programi: Razvoj softvera, Softverski inženjering, Master studiji. Upis, cijene studija, konsultacije.",
  keywords: [
    "fakultet informacijskih tehnologija",
    "FIT Mostar",
    "studij informatike",
    "razvoj softvera",
    "softverski inženjering",
    "master studij",
    "upis fakultet",
    "cijene studija",
    "konsultacije",
    "mostar",
    "bosna i hercegovina",
    "univerzitet",
    "informatika",
    "programiranje",
    "baze podataka",
    "web razvoj",
    "artificial intelligence",
    "cloud computing",
    "fakultet IT bosna",
    "studij informatike bosna",
    "fakultet mostar",
    "univerzitet mostar",
    "IT fakultet bosna",
    "tehnički fakultet mostar",
    "studij programiranja bosna",
    "software development bosna",
    "computer science bosna",
    "fakultet računarstva",
    "studij IT mostar",
    "fakultet informacijskih tehnologija bosna",
    "college bosnia",
    "university bosnia",
    "IT education bosnia",
    "computer science education bosnia"
  ],
  authors: [{ name: "Fakultet informacijskih tehnologija Mostar" }],
  creator: "Fakultet informacijskih tehnologija Mostar",
  publisher: "Fakultet informacijskih tehnologija Mostar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fit.ba'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'bs_BA',
    url: 'https://fit.ba',
    siteName: 'Fakultet informacijskih tehnologija Mostar',
    title: 'Fakultet informacijskih tehnologija Mostar | FIT',
    description: 'Fakultet informacijskih tehnologija u Mostaru - vodeći fakultet za studij informatike u Bosni i Hercegovini',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Open Graph image for Fakultet informacijskih tehnologija Mostar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fakultet informacijskih tehnologija Mostar | FIT',
    description: 'Fakultet informacijskih tehnologija u Mostaru - vodeći fakultet za studij informatike u Bosni i Hercegovini',
    images: ['/images/og-image.png'],
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Fakultet informacijskih tehnologija Mostar",
    "alternateName": ["FIT Mostar", "Fakultet IT Mostar", "FIT"],
    "description": "Fakultet informacijskih tehnologija 'Džemal Bijedić' Univerziteta u Mostaru - vodeći fakultet za studij informatike u Bosni i Hercegovini",
    "url": "https://fit.ba",
    "logo": "https://fit.ba/images/logo-bijeli.png",
    "image": "https://fit.ba/images/og-image.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Univerzitetski kampus",
      "addressLocality": "Mostar",
      "addressRegion": "Hercegovačko-neretvanski kanton",
      "addressCountry": "BA",
      "postalCode": "88000"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+387-36-281-160",
        "contactType": "studentska služba",
        "availableLanguage": ["Bosnian", "English"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "11:00",
          "closes": "14:00"
        }
      },
      {
        "@type": "ContactPoint",
        "telephone": "+387-36-281-172",
        "contactType": "dekan",
        "availableLanguage": ["Bosnian", "English"]
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.3438,
      "longitude": 17.8078
    },
    "sameAs": [
      "https://www.facebook.com/fitmostar",
      "https://www.linkedin.com/school/fit-mostar"
    ],
    "parentOrganization": {
      "@type": "EducationalOrganization",
      "name": "Univerzitet u Mostaru"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Studijski programi",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Razvoj softvera",
            "description": "Prvi ciklus studija - 3 godine",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Fakultet informacijskih tehnologija Mostar"
            },
            "courseMode": "on-site",
            "educationalLevel": "Bachelor's degree",
            "inLanguage": "Bosnian"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Softverski inženjering",
            "description": "Prvi ciklus studija - 4 godine",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Fakultet informacijskih tehnologija Mostar"
            },
            "courseMode": "on-site",
            "educationalLevel": "Bachelor's degree",
            "inLanguage": "Bosnian"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Jednogodišnji master",
            "description": "Drugi ciklus studija - 1 godina",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Fakultet informacijskih tehnologija Mostar"
            },
            "courseMode": "on-site",
            "educationalLevel": "Master's degree",
            "inLanguage": "Bosnian"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Dvogodišnji master",
            "description": "Drugi ciklus studija - 2 godine",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Fakultet informacijskih tehnologija Mostar"
            },
            "courseMode": "on-site",
            "educationalLevel": "Master's degree",
            "inLanguage": "Bosnian"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Bosnia and Herzegovina"
    },
    "knowsAbout": [
      "Programiranje",
      "Web razvoj",
      "Baze podataka",
      "Softverski inženjering",
      "Umjetna inteligencija",
      "Cloud computing",
      "Informacijske tehnologije",
      "Računarstvo"
    ]
  };

  return (
    <html lang="bs">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${manrope.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
        {children}
        </LanguageProvider>
        <Analytics />
        <PerformanceOptimizer />
      </body>
    </html>
  );
}
