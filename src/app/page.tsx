'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Discover from '@/components/Discover';
import Experience from '@/components/Experience';
import Video from '@/components/Video';
import Places from '@/components/Places';
import Subscribe from '@/components/Subscribe';
import Sponsors from '@/components/Sponsors';
import Footer from '@/components/Footer';
import ScrollUp from '@/components/ScrollUp';
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Discover />
        <Experience />
        <Video />
        <Places />
        <Subscribe />
        <Sponsors />
      </main>
      <Footer />
      <ScrollUp />
    </ThemeProvider>
  );
}