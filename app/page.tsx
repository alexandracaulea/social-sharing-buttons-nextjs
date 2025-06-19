import type { Metadata } from 'next';
import ShareSection from '@/components/share/share-section';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Next.js Social Share Buttons',
    description:
      'Accessible social sharing buttons for Next.js with copy-to-clipboard support.',
    openGraph: {
      title: 'Next.js Social Share Buttons',
      description:
        'Accessible and animated social sharing buttons for Next.js with copy-to-clipboard support.',
      url: 'https://social-sharing-buttons-nextjs.vercel.app/',
      siteName: 'Next.js Share Buttons',
      images: [
        {
          url: 'https://social-sharing-buttons-nextjs.vercel.app/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Screenshot of Next.js share buttons',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Next.js Social Share Buttons',
      description:
        'A reusable and accessible share component with clipboard copy, built with Tailwind.',
      images: ['https://social-sharing-buttons-nextjs.vercel.app/og-image.png'],
      creator: '@alexandracaulea',
    },
  };
}

export default function Homepage() {
  return <ShareSection />;
}
