import Reveal from '@/components/ui/Reveal';
import { SERVICES, type Service } from '@/lib/constants';

type ServiceId = 'architecture' | 'interiors' | 'landscape' | 'renovation' | 'turnkey' | 'consultation';

function ServiceIcon({ id }: { id: ServiceId }) {
  const s = { width: 32, height: 32, viewBox: '0 0 32 32', fill: 'none' } as const;

  if (id === 'architecture') {
    return (
      <svg {...s} aria-hidden="true">
        <path d="M16 2L2 11V30h28V11L16 2z" stroke="#b87941" strokeWidth="1.4" strokeLinejoin="round" />
        <rect x="11" y="20" width="10" height="10" stroke="#b87941" strokeWidth="1.4" />
        <path d="M16 11v5M13.5 14h5" stroke="#b87941" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === 'interiors') {
    return (
      <svg {...s} aria-hidden="true">
        <rect x="3" y="4" width="26" height="24" rx="1" stroke="#b87941" strokeWidth="1.4" />
        <path d="M3 14h16M19 4v24" stroke="#b87941" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="24" cy="18" r="2.5" stroke="#b87941" strokeWidth="1.4" />
        <path d="M7 9h7M7 20h5" stroke="#b87941" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === 'landscape') {
    return (
      <svg {...s} aria-hidden="true">
        <path d="M16 4C10 4 5 9 5 15c0 4 2.5 7.5 6 9.5" stroke="#b87941" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M16 4C22 4 27 9 27 15c0 4-2.5 7.5-6 9.5" stroke="#b87941" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M16 4v24M10 18h12" stroke="#b87941" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === 'renovation') {
    return (
      <svg {...s} aria-hidden="true">
        <path d="M22 3l-3.5 3.5L26 14l3.5-3.5L22 3z" stroke="#b87941" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M18.5 6.5L6 19a3 3 0 000 4.24l2.76 2.76a3 3 0 004.24 0L26 13.5" stroke="#b87941" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M3 29l5-5" stroke="#b87941" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === 'turnkey') {
    return (
      <svg {...s} aria-hidden="true">
        <path d="M6 4h14l8 8v16a1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="#b87941" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M20 4v8h8" stroke="#b87941" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M10 17l4 4 8-8" stroke="#b87941" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  // consultation
  return (
    <svg {...s} aria-hidden="true">
      <circle cx="16" cy="16" r="13" stroke="#b87941" strokeWidth="1.4" />
      <path d="M16 9v8M16 21v2" stroke="#b87941" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const ORDINALS = ['01', '02', '03', '04', '05', '06'];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      style={{ backgroundColor: '#1a1714', padding: '8rem 2rem' }}
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
                  What We Do
                </span>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <h2
                id="services-heading"
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 300,
                  color: '#f5f2ed',
                  lineHeight: 1.15,
                  maxWidth: '480px',
                  margin: 0,
                }}
              >
                A full spectrum of architectural services.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={300}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                fontWeight: 300,
                color: 'rgba(245, 242, 237, 0.45)',
                maxWidth: '320px',
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Architecture, interiors, landscape, and execution — all under one roof, one team, one contract.
            </p>
          </Reveal>
        </div>

        {/* ── Cards Grid ── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '1.5px', backgroundColor: 'rgba(184, 121, 65, 0.08)' }}
        >
          {SERVICES.map((service, i) => (
            <div key={service.id} className="service-card">
              <Reveal delay={i * 80}>
                {/* Ordinal */}
                <div
                  style={{
                    fontFamily: 'var(--font-dm-mono), monospace',
                    fontSize: '0.55rem',
                    letterSpacing: '0.22em',
                    color: 'rgba(184, 121, 65, 0.45)',
                    marginBottom: '1.5rem',
                  }}
                >
                  {ORDINALS[i]}
                </div>

                {/* Icon */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <ServiceIcon id={service.id as ServiceId} />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    fontSize: '1.625rem',
                    fontWeight: 400,
                    color: '#f5f2ed',
                    lineHeight: 1.25,
                    marginBottom: '0.375rem',
                  }}
                >
                  {service.title}
                </h3>

                {/* Tagline */}
                <p
                  style={{
                    fontFamily: 'var(--font-dm-mono), monospace',
                    fontSize: '0.52rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#b87941',
                    marginBottom: '1rem',
                  }}
                >
                  {service.tagline}
                </p>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    fontWeight: 300,
                    color: 'rgba(245, 242, 237, 0.5)',
                    lineHeight: 1.85,
                    margin: 0,
                  }}
                >
                  {service.description}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
