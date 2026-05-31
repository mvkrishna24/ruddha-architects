import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Philosophy from '@/components/sections/Philosophy';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import Contact from '@/components/sections/Contact';
import TrustSignals from '@/components/sections/TrustSignals';

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Hero />
        <Philosophy />
        <Services />
        <TrustSignals />
        <Process />
        <FeaturedProjects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
