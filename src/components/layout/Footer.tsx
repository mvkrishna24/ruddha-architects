'use client';

import { NAV_LINKS, BRAND } from '@/lib/constants';

export default function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: '#0f0e0c',
        borderTop: '1px solid rgba(184, 121, 65, 0.1)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '5rem 2rem 2.5rem',
        }}
      >
        {/* ── Top Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16"
          style={{ paddingBottom: '3rem', borderBottom: '1px solid rgba(245, 242, 237, 0.07)' }}
        >
          {/* Col 1: Brand */}
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <div
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: '1.4rem',
                  fontWeight: 500,
                  letterSpacing: '0.24em',
                  color: '#f5f2ed',
                  textTransform: 'uppercase',
                  lineHeight: 1,
                }}
              >
                Ruddha
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-dm-mono), monospace',
                  fontSize: '0.475rem',
                  letterSpacing: '0.3em',
                  color: '#b87941',
                  textTransform: 'uppercase',
                  marginTop: '5px',
                }}
              >
                Architects &amp; Interiors
              </div>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                fontWeight: 300,
                color: 'rgba(245, 242, 237, 0.45)',
                lineHeight: 1.85,
                maxWidth: '280px',
                margin: 0,
              }}
            >
              A studio built on the belief that every space tells a story. We design architecture that endures.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-dm-mono), monospace',
                fontSize: '0.55rem',
                fontWeight: 400,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#b87941',
                marginBottom: '1.75rem',
              }}
            >
              Navigate
            </h3>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.875rem',
              }}
            >
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      fontWeight: 300,
                      color: 'rgba(245, 242, 237, 0.5)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = '#f5f2ed';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        'rgba(245, 242, 237, 0.5)';
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-dm-mono), monospace',
                fontSize: '0.55rem',
                fontWeight: 400,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#b87941',
                marginBottom: '1.75rem',
              }}
            >
              Get in Touch
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <a
                href={`mailto:${BRAND.email}`}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  fontWeight: 300,
                  color: 'rgba(245, 242, 237, 0.5)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#b87941';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    'rgba(245, 242, 237, 0.5)';
                }}
              >
                {BRAND.email}
              </a>
              <a
                href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  fontWeight: 300,
                  color: 'rgba(245, 242, 237, 0.5)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#f5f2ed';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    'rgba(245, 242, 237, 0.5)';
                }}
              >
                {BRAND.phone}
              </a>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  fontWeight: 300,
                  color: 'rgba(245, 242, 237, 0.3)',
                  margin: 0,
                }}
              >
                {BRAND.address}
              </p>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div
          className="flex flex-col md:flex-row justify-between items-center md:items-center gap-3"
          style={{ paddingTop: '1.75rem' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-dm-mono), monospace',
              fontSize: '0.55rem',
              letterSpacing: '0.14em',
              color: 'rgba(245, 242, 237, 0.25)',
              margin: 0,
            }}
          >
            &copy; {year} {BRAND.full}. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-dm-mono), monospace',
              fontSize: '0.55rem',
              letterSpacing: '0.14em',
              color: 'rgba(245, 242, 237, 0.2)',
              margin: 0,
            }}
          >
            Designed with precision &mdash; Hyderabad, India
          </p>
        </div>
      </div>
    </footer>
  );
}
