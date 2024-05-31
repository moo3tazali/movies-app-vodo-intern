import '@/app/globals.css';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';

import { Container } from '@/components/ui/container';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import StoreProvider from '@/providers/store-provider';

// Define Rubik font configuration
const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  preload: false,
});

// Metadata for the page
export const metadata: Metadata = {
  title: 'My Movie App - Home',
  description:
    'Explore a curated list of films with detailed information and reviews. Find your next favorite movie here!',
};

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${rubik.className} bg-slate-900 text-white`}>
        <Container>
          <Header />
          <StoreProvider>{children}</StoreProvider>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
