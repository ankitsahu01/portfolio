import './globals.css';
import '../components/Header/headerStyle.css';

import DotParticles from "../components/DotParticles";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import NextTopLoader from 'nextjs-toploader';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Ankit Sahu | Portfolio',
  description: 'Ankit Sahu | Software Engineer with 4+ years of full-stack experience, GenAI integration, and Cloud deployments.',
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
      </head>
      <body>
        <Header />
        <div id="app" className="scroll-smooth text-white/90 font-extralight min-h-screen">
          <DotParticles />
          <NextTopLoader
            color='#db2777'
            height={3}
            showSpinner={false}
            shadow={false}
          />
          {children}
        </div>
        <Footer />
        <ScrollToTop />
        <SpeedInsights />
      </body>
    </html>
  );
}
