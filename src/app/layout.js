import './globals.css';
import '../components/Header/headerStyle.css';

import DotParticles from "../components/DotParticles";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export const metadata = {
  title: 'Ankit Sahu | Portfolio',
  description: 'Ankit Sahu Portfolio created using Next.js',
  manifest: "/manifest.json",
}

export const viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
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
          {children}
        </div>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
