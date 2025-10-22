import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Softverski inženjering - Studijski program | FIT Mostar',
  description: 'Studijski program Softverski inženjering na Fakultetu informacijskih tehnologija u Mostaru. Prvi ciklus studija - 4 godine. Softverska arhitektura, AI, cloud computing.',
  keywords: [
    'softverski inženjering studij',
    'software engineering studij',
    'softverska arhitektura',
    'umjetna inteligencija studij',
    'cloud computing studij',
    'prvi ciklus studija',
    'studij informatike',
    'FIT mostar softverski inženjering',
    'fakultet IT bosna',
    'studij softverskog inženjeringa',
    'software engineering bosna',
    'informatika studij mostar',
    'IT fakultet bosna'
  ],
  openGraph: {
    title: 'Softverski inženjering - Studijski program | FIT Mostar',
    description: 'Studijski program Softverski inženjering na Fakultetu informacijskih tehnologija u Mostaru. Prvi ciklus studija - 4 godine.',
    url: 'https://fit.ba/studij/softverski-inzenjering',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Softverski inženjering - Studijski program | FIT Mostar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Softverski inženjering - Studijski program | FIT Mostar',
    description: 'Studijski program Softverski inženjering na Fakultetu informacijskih tehnologija u Mostaru.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/studij/softverski-inzenjering',
  },
};

export default function SoftverskiInzenjeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
