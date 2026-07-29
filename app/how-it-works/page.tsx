import type { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'How It Works | Eclat Perfumes',
  description: 'Learn about the simple steps to shop for your favorite perfumes at Eclat Perfumes, from browsing to delivery.',
  keywords: ['how to buy perfume online', 'eclat process', 'perfume delivery Uganda', 'order fragrance steps'],
  openGraph: {
    title: 'How It Works | Eclat Perfumes',
    description: 'Learn about the simple steps to shop for your favorite perfumes at Eclat Perfumes, from browsing to delivery.',
    url: 'https://eclatperfumes.com/how-it-works', // Replace with actual URL
    images: [
      {
        url: 'https://eclatperfumes.com/og-how-it-works.jpg', // Replace with a relevant image for the how it works page
        width: 1200,
        height: 630,
        alt: 'How Eclat Perfumes Works',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How It Works | Eclat Perfumes',
    description: 'Learn about the simple steps to shop for your favorite perfumes at Eclat Perfumes, from browsing to delivery.',
    images: ['https://eclatperfumes.com/twitter-how-it-works.jpg'], // Replace with a relevant image for the how it works page
  },
};

export default function HowItWorks() {
  return (
    <div>
      <h2>How It Works</h2>
      <p>Here's how our service works...</p>
    </div>
  )
}
