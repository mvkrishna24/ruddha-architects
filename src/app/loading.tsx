export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading"
      style={{
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1a1714',
        flexDirection: 'column',
        gap: '1.25rem',
      }}
    >
      {/* Copper animated bar */}
      <div
        style={{
          width: '48px',
          height: '2px',
          backgroundColor: '#b87941',
          animation: 'loadingPulse 1.2s ease-in-out infinite',
        }}
      />
      <style>{`
        @keyframes loadingPulse {
          0%, 100% { opacity: 0.2; transform: scaleX(0.5); }
          50%       { opacity: 1;   transform: scaleX(1);   }
        }
      `}</style>
      <span
        style={{
          fontFamily: 'var(--font-dm-mono), monospace',
          fontSize: '0.48rem',
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: 'rgba(245, 242, 237, 0.25)',
        }}
      >
        Ruddha
      </span>
    </div>
  );
}
