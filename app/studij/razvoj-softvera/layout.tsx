import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Razvoj softvera - Studijski program | FIT Mostar',
  description: 'Studijski program Razvoj softvera na Fakultetu informacijskih tehnologija u Mostaru. Prvi ciklus studija - 3 godine. Programiranje, web razvoj, baze podataka.',
  keywords: [
    'razvoj softvera studij',
    'programiranje studij',
    'web razvoj studij',
    'baze podataka studij',
    'prvi ciklus studija',
    'studij informatike',
    'FIT mostar razvoj softvera',
    'fakultet IT bosna',
    'studij programiranja',
    'software development bosna',
    'informatika studij mostar',
    'IT fakultet bosna'
  ],
  openGraph: {
    title: 'Razvoj softvera - Studijski program | FIT Mostar',
    description: 'Studijski program Razvoj softvera na Fakultetu informacijskih tehnologija u Mostaru. Prvi ciklus studija - 3 godine.',
    url: 'https://fit.ba/studij/razvoj-softvera',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Razvoj softvera - Studijski program | FIT Mostar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Razvoj softvera - Studijski program | FIT Mostar',
    description: 'Studijski program Razvoj softvera na Fakultetu informacijskih tehnologija u Mostaru.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/studij/razvoj-softvera',
  },
};

export default function RazvojSoftveraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
