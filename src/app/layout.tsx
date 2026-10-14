import './globals.css';

import DotParticles from "../components/DotParticles";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ChatBot from "../components/Chat/ChatBot";
import NextTopLoader from 'nextjs-toploader';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from 'next';
import React from 'react';
import { themeColors } from '../config/theme';

export const metadata: Metadata = {
  title: 'Ankit Sahu — Full Stack & Cloud Specialist',
  description: 'Ankit Sahu | 4+ years shipping production React/Next.js systems, autonomous n8n workflows, and hardened Google Cloud infrastructure.',
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: '/logo.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: themeColors.surfaceBase,
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-surface-base font-sans text-text-primary antialiased selection:bg-primary-container selection:text-surface-base">
        <Header />
        <div id="app" className="text-white min-h-screen">
          <DotParticles />
          <NextTopLoader
            color={themeColors.primaryContainer}
            height={3}
            showSpinner={false}
            shadow={false}
          />
          {children}
        </div>
        <Footer />
        <ScrollToTop />
        <ChatBot />
        <SpeedInsights />
      </body>
    </html>
  );
}
