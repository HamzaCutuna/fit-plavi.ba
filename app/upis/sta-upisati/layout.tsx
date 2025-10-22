import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Upis - Što upisati | Fakultet informacijskih tehnologija Mostar',
  description: 'Sve što trebate znati o upisu na Fakultet informacijskih tehnologija u Mostaru. Studijski programi, uvjeti upisa, dokumenti, rokovi i postupak prijave.',
  keywords: [
    'upis fakultet FIT',
    'što upisati',
    'studijski programi',
    'uvjeti upisa',
    'dokumenti upis',
    'rok upisa',
    'prijava fakultet',
    'FIT mostar upis',
    'fakultet IT bosna upis',
    'studij informatike upis',
    'upis mostar',
    'fakultet mostar upis'
  ],
  openGraph: {
    title: 'Upis - Što upisati | Fakultet informacijskih tehnologija Mostar',
    description: 'Sve što trebate znati o upisu na Fakultet informacijskih tehnologija u Mostaru.',
    url: 'https://fit.ba/upis/sta-upisati',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Upis - Što upisati | Fakultet informacijskih tehnologija Mostar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Upis - Što upisati | Fakultet informacijskih tehnologija Mostar',
    description: 'Sve što trebate znati o upisu na Fakultet informacijskih tehnologija u Mostaru.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/upis/sta-upisati',
  },
};

export default function StaUpisatiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
