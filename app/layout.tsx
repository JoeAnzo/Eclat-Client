import type { Metadata } from "next";
import { Geist, Geist_Mono,Playfair_Display,Inter,Space_Grotesk} from "next/font/google";
import { ClerkProvider} from '@clerk/nextjs'
import "./globals.css";
import Header from "../components/Header"; 
import Footer from "../components/Footer"
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets:["latin"],
  display:"swap",
  variable:"--font-space",
})

const inter = Inter({
  subsets:['latin'],
  variable:'--font-inter',
  display:'swap'
})

const geist = Geist({subsets:['latin'],variable:'--font-sans'})

const playfair = Playfair_Display({
  subsets:["latin"],
  variable:"--font-playfair"
})

export const metadata: Metadata = {
  title: {
    default: "Eclat Perfumes - Discover Your Signature Scent",
    template: "%s | Eclat Perfumes",
  },
  description: "Eclat offers a wide range of luxurious perfumes for every occasion. Find your perfect fragrance today.",
  applicationName: "Eclat Perfumes",
  keywords: ["perfume", "fragrance", "scent", "luxury", "eclat"],
  authors: [{ name: "Eclat Website Team" }],
  creator: "Eclat Website Team",
  publisher: "Eclat Website Team",
  metadataBase: new URL('https://eclatessence.shop'), // Replace with your actual domain
  openGraph: {
    title: "Eclat Perfumes - Discover Your Signature Scent",
    description: "Eclat offers a wide range of luxurious perfumes for every occasion. Find your perfect fragrance today.",
    url: "https://eclatessence.shop", // Replace with your actual domain
    siteName: "Eclat Perfumes",
    images: [
      {
        url: "https://eclatperfumes.com/og-image.jpg", // Replace with a relevant image
        width: 1200,
        height: 630,
        alt: "Eclat Perfumes",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eclat Perfumes - Discover Your Signature Scent",
    description: "Eclat offers a wide range of luxurious perfumes for every occasion. Find your perfect fragrance today.",
    creator: "@EclatPerfumes", // Replace with your Twitter handle
    images: ["https://eclatperfumes.com/twitter-image.jpg"], // Replace with a relevant image
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, playfair.variable, spaceGrotesk.variable, "font-sans", geist.variable, inter.variable)}
    >
      <head>
        <meta name="apple-mobile-web-app-title" content="Eclat Essence" />
      </head>
      <body className="min-h-full flex flex-col">
       <ClerkProvider>
          <Header />
          <TooltipProvider>
            {children}
          </TooltipProvider>
          <Footer/>
       </ClerkProvider>
        
      </body>
    </html>
  );
}
