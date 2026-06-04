import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Philosophy from '@/components/sections/Philosophy';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import Contact from '@/components/sections/Contact';
import TrustSignals from '@/components/sections/TrustSignals';
import ConstructionJourney from '@/components/sections/ConstructionJourney';

export default function HomePage() {
  return (
    <>
      {/* Skip to main content for keyboard/screen-reader users */}
      <a
        href="#main-content"
        id="skip-to-content"
        style={{
          position: 'absolute',
          top: '-40px',
          left: 0,
          background: '#b87941',
          color: '#fff',
          padding: '8px 16px',
          zIndex: 9999,
          fontSize: '0.875rem',
          fontFamily: 'var(--font-body)',
          textDecoration: 'none',
          transition: 'top 0.2s',
        }}
        onFocus={(e) => { (e.currentTarget as HTMLAnchorElement).style.top = '0'; }}
        onBlur={(e) => { (e.currentTarget as HTMLAnchorElement).style.top = '-40px'; }}
      >
        Skip to content
      </a>
      <Navbar />

      <main id="main-content">
        <Hero />
        <ConstructionJourney />
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
