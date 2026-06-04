'use client';

import Reveal from '@/components/ui/Reveal';

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero — Architecture That Speaks"
      className="hero-bg"
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      {/* ── Main Content ── */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%',
          padding: '9rem 2rem 6rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Eyebrow */}
        <Reveal delay={150}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.875rem',
              marginBottom: '2.25rem',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ width: '36px', height: '1px', backgroundColor: '#b87941', flexShrink: 0 }} />
            <span
              style={{
                fontFamily: 'var(--font-dm-mono), monospace',
                fontSize: '0.58rem',
                fontWeight: 400,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: '#b87941',
              }}
            >
              RUDDHA ARCHITECTS &amp; INTERIORS · WARANGAL
            </span>
          </div>
        </Reveal>

        {/* H1 */}
        <Reveal delay={300}>
          <h1
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 0.93,
              color: '#f5f2ed',
              marginBottom: '2.25rem',
              maxWidth: '860px',
              textShadow: '0 0 40px rgba(184, 121, 65, 0.12)',
            }}
            className="text-[clamp(2.5rem,8vw,6rem)] md:text-[clamp(3.75rem,9.5vw,9.5rem)]"
          >
            Where Space Becomes Story
          </h1>
        </Reveal>

        {/* Sub-copy */}
        <Reveal delay={450}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.0625rem',
              fontWeight: 300,
              color: 'rgba(245, 242, 237, 0.6)',
              maxWidth: '420px',
              lineHeight: 1.85,
              marginBottom: '3rem',
            }}
          >
            An architecture and interiors studio based in Warangal. Disciplined in structure, refined in detail, and built for the life lived inside them.
          </p>
        </Reveal>

        {/* CTA Buttons */}
        <Reveal delay={600}>
          <div
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <a
              href="/projects"
              id="hero-cta-work"
              className="btn-primary"
            >
              View Our Work
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path
                  d="M1.5 6.5h10M7.5 2.5l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href="#contact"
              id="hero-cta-contact"
              className="btn-secondary"
            >
              Get in Touch
            </a>
          </div>
        </Reveal>
      </div>

      {/* ── Scroll Indicator ── */}
      <Reveal delay={800}>
        <div
          style={{
            position: 'absolute',
            bottom: '2.75rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.625rem',
            zIndex: 1,
          }}
          aria-hidden="true"
        >
          <span
            style={{
              fontFamily: 'var(--font-dm-mono), monospace',
              fontSize: '0.48rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(245, 242, 237, 0.3)',
            }}
          >
            Scroll
          </span>
          <div className="scroll-line-track">
            <div className="scroll-line-fill" />
          </div>
        </div>
      </Reveal>

      {/* ── Section Index ── */}
      <div
        className="hidden lg:block"
        style={{
          position: 'absolute',
          right: '2rem',
          bottom: '2.75rem',
          zIndex: 1,
        }}
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: 'var(--font-dm-mono), monospace',
            fontSize: '0.48rem',
            letterSpacing: '0.22em',
            color: 'rgba(245, 242, 237, 0.18)',
          }}
        >
          01 — Hero
        </span>
      </div>
    </section>
  );
}
