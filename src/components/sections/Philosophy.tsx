import Reveal from '@/components/ui/Reveal';
import { FOUNDER } from '@/lib/constants';

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      style={{
        backgroundColor: '#f5f2ed',
        color: '#1a1714',
        padding: '8rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* ── Eyebrow ── */}
        <Reveal>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.875rem',
              marginBottom: '5rem',
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
        </Reveal>

        {/* ── Two Columns ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Left: Philosophy Quote */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <Reveal delay={100}>
              <blockquote style={{ margin: 0, padding: 0 }}>
                <h2
                  id="philosophy-heading"
                  style={{
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    fontSize: 'clamp(2rem, 3.75vw, 3.25rem)',
                    fontWeight: 300,
                    lineHeight: 1.15,
                    letterSpacing: '-0.01em',
                    color: '#1a1714',
                    margin: 0,
                  }}
                >
                  {FOUNDER.philosophy}
                </h2>
              </blockquote>
            </Reveal>

            <Reveal delay={200}>
              <div>
                {/* Copper rule */}
                <div
                  style={{
                    width: '56px',
                    height: '2px',
                    backgroundColor: '#b87941',
                    marginBottom: '1.25rem',
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
              </div>
            </Reveal>

            {/* Founder credential */}
            <Reveal delay={300}>
              <div
                style={{
                  paddingTop: '2.5rem',
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
                    marginBottom: '0.625rem',
                  }}
                >
                  Education
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    fontSize: '1.25rem',
                    fontWeight: 300,
                    color: 'rgba(26, 23, 20, 0.75)',
                    lineHeight: 1.3,
                  }}
                >
                  {FOUNDER.degree}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Studio Story */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <Reveal delay={150}>
              <h3
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: '2rem',
                  fontWeight: 400,
                  lineHeight: 1.2,
                  color: '#1a1714',
                  margin: 0,
                }}
              >
                Architecture from Warangal.{' '}
                <em style={{ fontStyle: 'italic', color: '#b87941' }}>Built for life.</em>
              </h3>
            </Reveal>

            <Reveal delay={250}>
              <div>
                {FOUNDER.bio.map((paragraph, i) => (
                  <p
                    key={i}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      fontWeight: 300,
                      color: 'rgba(26, 23, 20, 0.65)',
                      lineHeight: 1.9,
                      marginBottom: i < FOUNDER.bio.length - 1 ? '1.5rem' : '0',
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            {/* Approach Tags */}
            <Reveal delay={350}>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.625rem',
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
                      border: '1px solid rgba(184, 121, 65, 0.3)',
                      padding: '0.4rem 0.875rem',
                      backgroundColor: 'rgba(184, 121, 65, 0.02)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Stats */}
            <Reveal delay={450}>
              <div
                className="grid grid-cols-3 gap-6"
                style={{
                  paddingTop: '2.5rem',
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
                        fontSize: '3rem',
                        fontWeight: 300,
                        color: '#1a1714',
                        lineHeight: 1,
                        marginBottom: '0.5rem',
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
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
