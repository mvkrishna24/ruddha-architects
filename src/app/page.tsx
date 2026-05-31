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
        <div className="divider-hairline" />
        <Philosophy />
        <div className="divider-hairline" />
        <Services />
        <div className="divider-hairline" />
        <TrustSignals />
        <div className="divider-hairline" />
        <Process />
        <div className="divider-hairline" />
        <FeaturedProjects />
        <div className="divider-hairline" />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
