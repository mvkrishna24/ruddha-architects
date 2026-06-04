'use client';

import Reveal from '@/components/ui/Reveal';
import { PROCESS_STEPS } from '@/lib/constants';

export default function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      style={{ backgroundColor: '#211e1a', padding: '8rem 2rem' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* ── Header ── */}
        <div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
          style={{ marginBottom: '5rem' }}
        >
          <div>
            <Reveal>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.875rem',
                  marginBottom: '1.5rem',
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
                  How We Work
                </span>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <h2
                id="process-heading"
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 300,
                  color: '#f5f2ed',
                  lineHeight: 1.15,
                  margin: 0,
                  maxWidth: '520px',
                }}
              >
                A process designed around you — not us.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={300}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                fontWeight: 300,
                color: 'rgba(245, 242, 237, 0.4)',
                maxWidth: '320px',
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Every project follows a structured sequence that keeps you informed, in control, and confident — at every stage.
            </p>
          </Reveal>
        </div>

        {/* ── Steps ── */}
        <div
          style={{
            display: 'grid',
            gap: '0',
          }}
        >
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.ordinal}
              className="process-step"
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr',
                gap: '2rem',
                padding: '2.5rem 0',
                borderTop: '1px solid rgba(245, 242, 237, 0.06)',
                borderBottom:
                  i === PROCESS_STEPS.length - 1
                    ? '1px solid rgba(245, 242, 237, 0.06)'
                    : 'none',
              }}
            >
              {/* Ordinal */}
              <div
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: '2rem',
                  fontWeight: 300,
                  color: 'rgba(184, 121, 65, 0.35)',
                  lineHeight: 1,
                  paddingTop: '0.2rem',
                  flexShrink: 0,
                }}
              >
                {step.ordinal}
              </div>

              {/* Content */}
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                <h3
                  style={{
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: '#f5f2ed',
                    lineHeight: 1.25,
                    margin: 0,
                    flexShrink: 0,
                    minWidth: '200px',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    fontWeight: 300,
                    color: 'rgba(245, 242, 237, 0.5)',
                    lineHeight: 1.85,
                    margin: 0,
                    maxWidth: '560px',
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div
          style={{
            marginTop: '5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '1.25rem',
          }}
        >
          <Reveal>
            <p
              style={{
                fontFamily: 'var(--font-dm-mono), monospace',
                fontSize: '0.58rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(245, 242, 237, 0.3)',
                margin: 0,
              }}
            >
              Ready to begin?
            </p>
          </Reveal>
          <Reveal delay={150}>
            <a
              href="#contact"
              id="process-cta"
              className="btn-primary"
            >
              Start a Conversation
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path
                  d="M1 6h10M7 2l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
