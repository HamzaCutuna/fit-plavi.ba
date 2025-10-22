import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O fakultetu - Fakultet informacijskih tehnologija Mostar',
  description: 'Saznajte više o Fakultetu informacijskih tehnologija u Mostaru. Misija, vizija, historija, nastavno osoblje, studijski programi i akreditacija.',
  keywords: [
    'o fakultetu FIT',
    'fakultet informacijskih tehnologija mostar',
    'misija fakultet',
    'vizija fakultet',
    'historija fakultet',
    'nastavno osoblje',
    'akreditacija',
    'studijski programi',
    'FIT mostar o nama',
    'fakultet IT mostar',
    'univerzitet mostar fakultet',
    'informatika mostar',
    'fakultet IT bosna',
    'studij informatike bosna',
    'tehnički fakultet mostar'
  ],
  openGraph: {
    title: 'O fakultetu - Fakultet informacijskih tehnologija Mostar',
    description: 'Saznajte više o Fakultetu informacijskih tehnologija u Mostaru. Misija, vizija, historija i studijski programi.',
    url: 'https://fit.ba/fakultet',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'O fakultetu - Fakultet informacijskih tehnologija Mostar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'O fakultetu - Fakultet informacijskih tehnologija Mostar',
    description: 'Saznajte više o Fakultetu informacijskih tehnologija u Mostaru. Misija, vizija, historija i studijski programi.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/fakultet',
  },
};

export default function FakultetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
