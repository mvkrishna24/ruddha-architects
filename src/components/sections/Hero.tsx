'use client';

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
        <div
          className="anim-fade-up anim-delay-1"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.875rem',
            marginBottom: '2.25rem',
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
            RUDDHA ARCHITECTS & INTERIORS · WARANGAL
          </span>
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
            EST. 2024 -- WARANGAL · TELANGANA
          </span>
        </div>

        {/* H1 */}
        <h1
  className="anim-fade-up anim-delay-2"
  style={{
    fontFamily: 'var(--font-cormorant), Georgia, serif',
    fontSize: 'clamp(3.75rem, 9.5vw, 9.5rem)',
    fontWeight: 300,
    letterSpacing: '-0.02em',
    lineHeight: 0.93,
    color: '#f5f2ed',
    marginBottom: '2.25rem',
    maxWidth: '860px',
    textShadow: '0 0 8px #b87941, 0 0 20px #b87941',
  }}
>
  From Concept<br />
  <span style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '0.75em', color: '#b87941' }}>To Completion</span>
</h1>

        {/* Sub-copy */}
        <p
          className="anim-fade-up anim-delay-3"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.0625rem',
            fontWeight: 300,
            color: 'rgba(245, 242, 237, 0.6)',
            maxWidth: '420px',
            lineHeight: 1.8,
            marginBottom: '3rem',
          }}
        >
          We design spaces that are structurally sound, visually timeless, and deeply rooted in human experience.
        </p>

        {/* CTA Buttons */}
        <div
          className="anim-fade-up anim-delay-4"
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}
        >
          <a
            href="#projects"
            id="hero-cta-work"
              style={{
                fontFamily: 'var(--font-dm-mono), monospace',
                fontSize: '0.62rem',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#1a1714',
                backgroundColor: '#d4975a',
                textDecoration: 'none',
                padding: '1rem 2rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                transition: 'background-color 0.25s ease, transform 0.2s ease',
                boxShadow: '0 0 6px rgba(212,151,90,0.6)',
              }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = '#d4975a';
              el.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = '#b87941';
              el.style.transform = 'translateY(0)';
            }}
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
            style={{
              fontFamily: 'var(--font-dm-mono), monospace',
              fontSize: '0.62rem',
              fontWeight: 400,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#f5f2ed',
              backgroundColor: 'transparent',
              textDecoration: 'none',
              padding: '1rem 2rem',
              display: 'inline-flex',
              alignItems: 'center',
              border: '1px solid rgba(245, 242, 237, 0.18)',
              transition: 'border-color 0.25s ease, color 0.25s ease, background-color 0.25s ease',
              boxShadow: '0 0 6px rgba(184,121,65,0.3)',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = '#b87941';
              el.style.color = '#b87941';
              el.style.backgroundColor = 'rgba(184,121,65,0.2)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = 'rgba(245, 242, 237, 0.18)';
              el.style.color = '#f5f2ed';
              el.style.backgroundColor = 'transparent';
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div
        className="anim-fade-up anim-delay-5"
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
          01 / 05
        </span>
      </div>
    </section>
  );
}
