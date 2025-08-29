// app/page.tsx

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedNews from '@/components/FeaturedNews';
import QuickInfo from '@/components/QuickInfo';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedNews />
      <QuickInfo />
      <Footer />
    </main>
  );
}