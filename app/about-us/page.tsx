import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Eclat Perfumes',
  description: 'Learn more about Eclat Perfumes, our mission to provide authentic and luxurious fragrances, and our commitment to quality.',
  keywords: ['about eclat perfumes', 'eclat mission', 'perfume company Uganda', 'luxury fragrance brand'],
  openGraph: {
    title: 'About Us | Eclat Perfumes',
    description: 'Learn more about Eclat Perfumes, our mission to provide authentic and luxurious fragrances, and our commitment to quality.',
    url: 'https://eclatperfumes.com/about-us', // Replace with actual URL
    images: [
      {
        url: 'https://eclatperfumes.com/og-about-us.jpg', // Replace with a relevant image for the about us page
        width: 1200,
        height: 630,
        alt: 'About Eclat Perfumes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Eclat Perfumes',
    description: 'Learn more about Eclat Perfumes, our mission to provide authentic and luxurious fragrances, and our commitment to quality.',
    images: ['https://eclatperfumes.com/twitter-about-us.jpg'], // Replace with a relevant image for the about us page
  },
};

export default function aboutUs() {
  return (
    <h2>About Us</h2>
  )
}

 