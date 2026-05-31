'use client';

import { TRUST_SIGNALS } from '@/lib/constants';

export default function TrustSignals() {
  return (
    <section
      id="trust"
      aria-label="Why Ruddha Architects"
      style={{ backgroundColor: '#f5f2ed', padding: '6rem 2rem' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Eyebrow */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.875rem',
            marginBottom: '3.5rem',
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
            Why Ruddha
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ backgroundColor: 'rgba(26, 23, 20, 0.08)' }}
        >
          {TRUST_SIGNALS.map((signal) => (
            <div
              key={signal.id}
              style={{
                backgroundColor: '#f5f2ed',
                padding: '2.5rem 2rem',
              }}
            >
              {/* Label */}
              <div
                style={{
                  fontFamily: 'var(--font-dm-mono), monospace',
                  fontSize: '0.5rem',
                  letterSpacing: '0.24em',
                  textTransform: 'uppercase',
                  color: 'rgba(184, 121, 65, 0.7)',
                  marginBottom: '0.625rem',
                }}
              >
                {signal.label}
              </div>

              {/* Value */}
              <div
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: '1.375rem',
                  fontWeight: 400,
                  color: '#1a1714',
                  lineHeight: 1.2,
                  marginBottom: '1rem',
                }}
              >
                {signal.value}
              </div>

              {/* Note */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  fontWeight: 300,
                  color: 'rgba(26, 23, 20, 0.55)',
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                {signal.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
