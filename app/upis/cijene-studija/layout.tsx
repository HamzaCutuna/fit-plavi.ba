import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cijene studija - Fakultet informacijskih tehnologija Mostar',
  description: 'Cijene studija na Fakultetu informacijskih tehnologija u Mostaru. Školarina, načini plaćanja, stipendije i financijska podrška za studente.',
  keywords: [
    'cijene studija FIT',
    'školarina fakultet',
    'cijena studija',
    'načini plaćanja',
    'stipendije',
    'financijska podrška',
    'FIT mostar cijene',
    'fakultet IT bosna cijene',
    'studij informatike cijene',
    'školarina mostar',
    'fakultet mostar cijene',
    'BAM školarina'
  ],
  openGraph: {
    title: 'Cijene studija - Fakultet informacijskih tehnologija Mostar',
    description: 'Cijene studija na Fakultetu informacijskih tehnologija u Mostaru. Školarina, načini plaćanja, stipendije.',
    url: 'https://fit.ba/upis/cijene-studija',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cijene studija - Fakultet informacijskih tehnologija Mostar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cijene studija - Fakultet informacijskih tehnologija Mostar',
    description: 'Cijene studija na Fakultetu informacijskih tehnologija u Mostaru.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/upis/cijene-studija',
  },
};

export default function CijeneStudijaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
