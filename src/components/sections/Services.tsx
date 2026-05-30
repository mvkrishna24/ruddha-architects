import { SERVICES } from '@/lib/constants';

type ServiceId = 'architecture' | 'interiors' | 'renovation' | 'consultation';

function ServiceIcon({ id }: { id: ServiceId }) {
  const s = { width: 30, height: 30, viewBox: '0 0 30 30', fill: 'none' } as const;

  if (id === 'architecture') {
    return (
      <svg {...s} aria-hidden="true">
        <path d="M15 2L2 10.5V28h26V10.5L15 2z" stroke="#b87941" strokeWidth="1.4" strokeLinejoin="round" />
        <rect x="10.5" y="19" width="9" height="9" stroke="#b87941" strokeWidth="1.4" />
        <path d="M15 10v5M12.5 13h5" stroke="#b87941" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === 'interiors') {
    return (
      <svg {...s} aria-hidden="true">
        <rect x="3" y="4" width="24" height="22" rx="1" stroke="#b87941" strokeWidth="1.4" />
        <path d="M3 13h14M17 4v22" stroke="#b87941" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="21.5" cy="17" r="2.5" stroke="#b87941" strokeWidth="1.4" />
        <path d="M7 8h5M7 18h5" stroke="#b87941" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === 'renovation') {
    return (
      <svg {...s} aria-hidden="true">
        <path
          d="M20 3l-3 3 7 7 3-3L20 3z"
          stroke="#b87941"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M17 6L5.5 17.5a2.5 2.5 0 000 3.54l3.46 3.46a2.5 2.5 0 003.54 0L24 13"
          stroke="#b87941"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path d="M3 27l4.5-4.5" stroke="#b87941" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }
  // consultation
  return (
    <svg {...s} aria-hidden="true">
      <path
        d="M5 4h14l6 6v16a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z"
        stroke="#b87941"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M19 4v6h6" stroke="#b87941" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M9 15h12M9 20h8" stroke="#b87941" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

const ORDINALS = ['01', '02', '03', '04'];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      style={{ backgroundColor: '#1a1714', padding: '7rem 2rem' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          style={{ marginBottom: '4rem' }}
        >
          <div>
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
            <h2
              id="services-heading"
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 300,
                color: '#f5f2ed',
                lineHeight: 1.1,
                maxWidth: '480px',
                margin: 0,
              }}
            >
              A full spectrum of design services.
            </h2>
          </div>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              fontWeight: 300,
              color: 'rgba(245, 242, 237, 0.45)',
              maxWidth: '320px',
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            From the first sketch to the final finish, we are with you at every stage of the journey.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2"
          style={{ gap: '1.5px', backgroundColor: 'rgba(184, 121, 65, 0.08)' }}
        >
          {SERVICES.map((service, i) => (
            <div key={service.id} className="service-card">
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
              <div style={{ marginBottom: '1.25rem' }}>
                <ServiceIcon id={service.id as ServiceId} />
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: '1.625rem',
                  fontWeight: 400,
                  color: '#f5f2ed',
                  lineHeight: 1.2,
                  marginBottom: '0.875rem',
                }}
              >
                {service.title}
              </h3>

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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
