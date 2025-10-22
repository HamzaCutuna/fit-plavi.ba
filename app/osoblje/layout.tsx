import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nastavno osoblje - Fakultet informacijskih tehnologija Mostar',
  description: 'Upoznajte nastavno osoblje Fakulteta informacijskih tehnologija u Mostaru. Profesori, docenti, asistenti i njihove specijalizacije u oblasti IT.',
  keywords: [
    'nastavno osoblje FIT',
    'profesori fakultet',
    'doktori nauka',
    'masteri nauka',
    'asistenti',
    'nastavnici',
    'specijalizacije IT',
    'programiranje',
    'baze podataka',
    'web razvoj',
    'FIT mostar osoblje',
    'fakultet informacijskih tehnologija nastavnici',
    'univerzitet mostar profesori',
    'fakultet IT bosna nastavnici',
    'studij informatike bosna profesori'
  ],
  openGraph: {
    title: 'Nastavno osoblje - Fakultet informacijskih tehnologija Mostar',
    description: 'Upoznajte nastavno osoblje Fakulteta informacijskih tehnologija u Mostaru.',
    url: 'https://fit.ba/osoblje',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nastavno osoblje - Fakultet informacijskih tehnologija Mostar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nastavno osoblje - Fakultet informacijskih tehnologija Mostar',
    description: 'Upoznajte nastavno osoblje Fakulteta informacijskih tehnologija u Mostaru.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/osoblje',
  },
};

export default function OsobljeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
