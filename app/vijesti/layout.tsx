import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vijesti - Fakultet informacijskih tehnologija Mostar',
  description: 'Najnovije vijesti i obavještenja sa Fakulteta informacijskih tehnologija u Mostaru. Studijski programi, upis, događaji, konferencije i važne informacije za studente.',
  keywords: [
    'vijesti FIT Mostar',
    'obavještenja fakultet',
    'najnovije vijesti',
    'studijski programi',
    'upis fakultet',
    'događaji fakultet',
    'konferencije',
    'informacije za studente',
    'FIT mostar vijesti',
    'fakultet informacijskih tehnologija vijesti',
    'univerzitet mostar obavještenja',
    'IT fakultet mostar vijesti',
    'fakultet IT bosna vijesti',
    'studij informatike bosna vijesti'
  ],
  openGraph: {
    title: 'Vijesti - Fakultet informacijskih tehnologija Mostar',
    description: 'Najnovije vijesti i obavještenja sa Fakulteta informacijskih tehnologija u Mostaru.',
    url: 'https://fit.ba/vijesti',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vijesti - Fakultet informacijskih tehnologija Mostar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vijesti - Fakultet informacijskih tehnologija Mostar',
    description: 'Najnovije vijesti i obavještenja sa Fakulteta informacijskih tehnologija u Mostaru.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/vijesti',
  },
};

export default function VijestiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
