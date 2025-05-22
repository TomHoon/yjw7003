import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

import Header from '@/components/Header';
import Terms from '@/components/Terms';
import Footer from '@/components/Footer';

import { AuthProvider } from './auth-context';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '양주시여성장애인어울림센터',
  description: '양주시여성장애인어울림센터입니다.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AuthProvider>
          <Header />
          <main>{children}</main>
          <Terms />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
