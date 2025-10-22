import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt - Fakultet informacijskih tehnologija Mostar',
  description: 'Kontaktirajte Fakultet informacijskih tehnologija u Mostaru. Studentska služba, dekan, tehnička podrška. Email, telefon, adresa. Radno vrijeme i konsultacije.',
  keywords: [
    'kontakt FIT Mostar',
    'studentska služba',
    'dekan fakultet',
    'tehnička podrška',
    'email fakultet',
    'telefon fakultet',
    'adresa fakultet',
    'radno vrijeme',
    'konsultacije',
    'FIT Mostar kontakt',
    'fakultet informacijskih tehnologija kontakt',
    'univerzitet mostar kontakt',
    'fakultet IT bosna',
    'studij informatike bosna',
    'upis fakultet mostar'
  ],
  openGraph: {
    title: 'Kontakt - Fakultet informacijskih tehnologija Mostar',
    description: 'Kontaktirajte Fakultet informacijskih tehnologija u Mostaru. Studentska služba, dekan, tehnička podrška.',
    url: 'https://fit.ba/kontakt',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kontakt - Fakultet informacijskih tehnologija Mostar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontakt - Fakultet informacijskih tehnologija Mostar',
    description: 'Kontaktirajte Fakultet informacijskih tehnologija u Mostaru. Studentska služba, dekan, tehnička podrška.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/kontakt',
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
