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
        {/* Eyebrow */}
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
            Our Philosophy
          </span>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Left: Manifesto Quote */}
          <div>
            <blockquote style={{ margin: 0, padding: 0 }}>
              <h2
                id="philosophy-heading"
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: 'clamp(2rem, 3.75vw, 3.5rem)',
                  fontWeight: 300,
                  lineHeight: 1.18,
                  letterSpacing: '-0.01em',
                  color: '#1a1714',
                  margin: 0,
                }}
              >
                &ldquo;We believe great architecture is not built. It is{' '}
                <em style={{ fontStyle: 'italic', color: '#b87941' }}>grown</em>
                {' '}— from context, culture, and human need.&rdquo;
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
              &mdash; Ruddha Design Manifesto
            </p>
          </div>

          {/* Right: Body */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: '1.875rem',
                fontWeight: 400,
                lineHeight: 1.2,
                color: '#1a1714',
                marginBottom: '1.375rem',
              }}
            >
              Spaces that outlast trends.
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                fontWeight: 300,
                color: 'rgba(26, 23, 20, 0.65)',
                lineHeight: 1.9,
                marginBottom: '1.375rem',
              }}
            >
              At Ruddha, we approach each project as a dialogue — between the land and the structure,
              between the client&apos;s vision and the architect&apos;s intuition, between what is
              needed now and what will endure.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                fontWeight: 300,
                color: 'rgba(26, 23, 20, 0.65)',
                lineHeight: 1.9,
                marginBottom: '3.25rem',
              }}
            >
              We work across scales — from intimate residences to expansive commercial complexes —
              always guided by a commitment to material integrity, spatial quality, and the poetry
              of light.
            </p>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-6"
              style={{
                paddingTop: '2rem',
                borderTop: '1px solid rgba(26, 23, 20, 0.1)',
              }}
            >
              {[
                { number: '10+', label: 'Years' },
                { number: '50+', label: 'Projects' },
                { number: '05',  label: 'Awards' },
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
