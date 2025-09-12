import "./globals.css";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impact T1D | Type 1 Diabetes Education',
  description: 'The world\'s leading educational initiative for Type 1 Diabetes (T1D). Access expert-led CME activities, cutting-edge research, and comprehensive resources from renowned global faculty.',
  keywords: 'T1D, Type 1 Diabetes, diabetes education, CME, continuing education, endocrinology, diabetes care',
  authors: [{ name: 'Impact T1D' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Impact T1D | Leading Global Excellence in T1D Education',
    description: 'Transform your expertise with world-class T1D education from the #1 global learning initiative.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Impact T1D | Type 1 Diabetes Education',
    description: 'The world\'s leading educational initiative for T1D. Expert-led CME activities and cutting-edge research.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
