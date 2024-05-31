import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { Container } from '@/components/ui/container';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import StoreProvider from '@/providers/store-provider';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'My Movie App - Home',
  description:
    'Explore a curated list of films with detailed information and reviews. Find your next favorite movie here!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} bg-slate-900 text-white`}>
        <Container>
          <Header />
          <StoreProvider>{children}</StoreProvider>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
