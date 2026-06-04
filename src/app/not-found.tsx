import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1a1714',
        color: '#f5f2ed',
        gap: '2rem',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-dm-mono), monospace',
          fontSize: '0.58rem',
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: '#b87941',
        }}
      >
        404 — Page Not Found
      </div>

      <h1
        style={{
          fontFamily: 'var(--font-cormorant), Georgia, serif',
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          fontWeight: 300,
          lineHeight: 1.1,
          margin: 0,
        }}
      >
        This space doesn&apos;t exist yet.
      </h1>

      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.9375rem',
          fontWeight: 300,
          color: 'rgba(245, 242, 237, 0.5)',
          maxWidth: '380px',
          lineHeight: 1.8,
          margin: 0,
        }}
      >
        The page you&apos;re looking for hasn&apos;t been built. Let&apos;s take you somewhere real.
      </p>

      <Link
        href="/"
        id="not-found-home"
        style={{
          fontFamily: 'var(--font-dm-mono), monospace',
          fontSize: '0.58rem',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: '#b87941',
          textDecoration: 'none',
          border: '1px solid rgba(184, 121, 65, 0.4)',
          padding: '0.875rem 1.75rem',
          transition: 'border-color 0.2s ease, color 0.2s ease',
        }}
      >
        Return Home
      </Link>
    </main>
  );
}
