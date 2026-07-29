import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Eclat Perfumes',
  description: 'Get in touch with Eclat Perfumes for inquiries, support, or feedback. We are here to help you find your perfect fragrance.',
  keywords: ['contact eclat perfumes', 'eclat support', 'perfume inquiry Uganda', 'customer service'],
  openGraph: {
    title: 'Contact Us | Eclat Perfumes',
    description: 'Get in touch with Eclat Perfumes for inquiries, support, or feedback. We are here to help you find your perfect fragrance.',
    url: 'https://eclatperfumes.com/Contact-us', // Replace with actual URL
    images: [
      {
        url: 'https://eclatperfumes.com/og-contact-us.jpg', // Replace with a relevant image for the contact page
        width: 1200,
        height: 630,
        alt: 'Contact Eclat Perfumes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Eclat Perfumes',
    description: 'Get in touch with Eclat Perfumes for inquiries, support, or feedback. We are here to help you find your perfect fragrance.',
    images: ['https://eclatperfumes.com/twitter-contact-us.jpg'], // Replace with a relevant image for the contact page
  },
};

export default function contactUs(){
    return(
        <h1>Contact Us</h1>
    )
}