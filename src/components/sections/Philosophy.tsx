import { FOUNDER } from '@/lib/constants';

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      style={{
        backgroundColor: '#f5f2ed',
        color: '#1a1714',
        padding: '7rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* ── Eyebrow ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.875rem',
            marginBottom: '4.5rem',
          }}
        >
          <div style={{ width: '36px', height: '1px', backgroundColor: '#b87941', flexShrink: 0 }} />
          <span
            style={{
              fontFamily: 'var(--font-dm-mono), monospace',
              fontSize: '0.58rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#b87941',
            }}
          >
            About the Studio
          </span>
        </div>

        {/* ── Two Columns ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Left: Philosophy Quote */}
          <div>
            <blockquote style={{ margin: 0, padding: 0 }}>
              <h2
                id="philosophy-heading"
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: 'clamp(1.875rem, 3.75vw, 3.25rem)',
                  fontWeight: 300,
                  lineHeight: 1.2,
                  letterSpacing: '-0.01em',
                  color: '#1a1714',
                  margin: 0,
                }}
              >
                {FOUNDER.philosophy}
              </h2>
            </blockquote>

            {/* Copper rule */}
            <div
              style={{
                width: '56px',
                height: '2px',
                backgroundColor: '#b87941',
                margin: '2.5rem 0 1.25rem',
              }}
            />
            <p
              style={{
                fontFamily: 'var(--font-dm-mono), monospace',
                fontSize: '0.55rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(26, 23, 20, 0.4)',
                margin: 0,
              }}
            >
              &mdash; {FOUNDER.name}, {FOUNDER.role}
            </p>

            {/* Founder credential */}
            <div
              style={{
                marginTop: '2.5rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(26, 23, 20, 0.08)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-dm-mono), monospace',
                  fontSize: '0.52rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(184, 121, 65, 0.7)',
                  marginBottom: '0.5rem',
                }}
              >
                Education
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  fontWeight: 300,
                  color: 'rgba(26, 23, 20, 0.7)',
                }}
              >
                {FOUNDER.degree}
              </div>
            </div>
          </div>

          {/* Right: Studio Story */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: '1.875rem',
                fontWeight: 400,
                lineHeight: 1.2,
                color: '#1a1714',
                marginBottom: '1.75rem',
              }}
            >
              Architecture from Warangal.{' '}
              <em style={{ fontStyle: 'italic', color: '#b87941' }}>Built for life.</em>
            </h3>

            {FOUNDER.bio.map((paragraph, i) => (
              <p
                key={i}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  fontWeight: 300,
                  color: 'rgba(26, 23, 20, 0.65)',
                  lineHeight: 1.9,
                  marginBottom: i < FOUNDER.bio.length - 1 ? '1.375rem' : '3.25rem',
                }}
              >
                {paragraph}
              </p>
            ))}

            {/* Approach Tags */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.625rem',
                marginBottom: '3rem',
              }}
            >
              {[
                'AI-Integrated Design',
                'Modern Architecture',
                'Functional Planning',
                'Client-Centric Process',
              ].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: 'var(--font-dm-mono), monospace',
                    fontSize: '0.5rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#b87941',
                    border: '1px solid rgba(184, 121, 65, 0.35)',
                    padding: '0.375rem 0.75rem',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-6"
              style={{
                paddingTop: '2rem',
                borderTop: '1px solid rgba(26, 23, 20, 0.1)',
              }}
            >
              {[
                { number: '2+',  label: 'Years Active' },
                { number: '15+', label: 'Projects' },
                { number: '6',   label: 'Disciplines' },
              ].map(({ number, label }) => (
                <div key={label}>
                  <div
                    style={{
                      fontFamily: 'var(--font-cormorant), Georgia, serif',
                      fontSize: '2.75rem',
                      fontWeight: 300,
                      color: '#1a1714',
                      lineHeight: 1,
                      marginBottom: '0.375rem',
                    }}
                  >
                    {number}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-dm-mono), monospace',
                      fontSize: '0.52rem',
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: 'rgba(26, 23, 20, 0.4)',
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
