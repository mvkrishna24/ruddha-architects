import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProjectImage from '@/components/ui/ProjectImage';
import { PROJECTS, getProjectBySlug } from '@/lib/projects';
import { BRAND } from '@/lib/constants';

// ── Static param generation ───────────────────────────────────────────────────
export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

// ── Dynamic metadata ──────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${BRAND.full}`,
    description: project.description.split('\n\n')[0],
  };
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const paragraphs = project.description.split('\n\n');

  return (
    <>
      <Navbar />

      <main id="main-content">

        {/* ── Full-Width Hero ── */}
        <div style={{ position: 'relative' }}>
          <div style={{ width: '100%', overflow: 'hidden', maxHeight: '80vh' }}>
            <ProjectImage
              src={project.heroImage}
              alt={`${project.title} — ${project.category}`}
              category={project.category}
              aspectRatio="21/9"
              priority
            />
          </div>

          {/* Hero Overlay: title block */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(26,23,20,0.85) 0%, rgba(26,23,20,0.1) 50%, transparent 100%)',
              display: 'flex',
              alignItems: 'flex-end',
            }}
          >
            <div style={{ maxWidth: '1280px', width: '100%', margin: '0 auto', padding: '3rem 2rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-dm-mono), monospace',
                  fontSize: '0.52rem',
                  letterSpacing: '0.24em',
                  textTransform: 'uppercase',
                  color: '#b87941',
                  display: 'block',
                  marginBottom: '0.75rem',
                }}
              >
                {project.category} &nbsp;·&nbsp; {project.year}
              </span>
              <h1
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: 'clamp(2rem, 5vw, 4rem)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  color: '#f5f2ed',
                  margin: 0,
                  lineHeight: 1.05,
                  textShadow: '0 2px 24px rgba(0,0,0,0.4)',
                }}
              >
                {project.title}
              </h1>
            </div>
          </div>

          {/* Back link */}
          <Link
            href="/projects"
            style={{
              position: 'absolute',
              top: '6rem',
              left: '2rem',
              fontFamily: 'var(--font-dm-mono), monospace',
              fontSize: '0.52rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(245,242,237,0.6)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              transition: 'color 0.2s ease',
              zIndex: 5,
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M11 6H1M5 2L1 6l4 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All Projects
          </Link>
        </div>

        {/* ── Project Info Strip ── */}
        <div style={{ backgroundColor: '#0f0e0c', padding: '0 2rem', borderBottom: '1px solid rgba(184,121,65,0.1)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div className="grid grid-cols-2 sm:grid-cols-4"
              style={{ borderLeft: '1px solid rgba(184,121,65,0.08)' }}
            >
              {[
                { label: 'Location', value: project.location },
                { label: 'Area',     value: project.area      },
                { label: 'Year',     value: project.year      },
                { label: 'Client',   value: project.client    },
              ].map(({ label, value }) => (
                <div key={label}
                  style={{
                    padding: '2rem 1.5rem',
                    borderRight: '1px solid rgba(184,121,65,0.08)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-dm-mono), monospace',
                      fontSize: '0.44rem',
                      letterSpacing: '0.24em',
                      textTransform: 'uppercase',
                      color: 'rgba(184,121,65,0.55)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-cormorant), Georgia, serif',
                      fontSize: '1.125rem',
                      fontWeight: 300,
                      color: 'rgba(245,242,237,0.85)',
                      lineHeight: 1.2,
                    }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Project Description ── */}
        <section
          aria-label="Project description"
          style={{ backgroundColor: '#1a1714', padding: '6rem 2rem' }}
        >
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

              {/* Left: section label */}
              <div className="lg:col-span-3">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.875rem',
                    marginBottom: '1rem',
                  }}
                >
                  <div style={{ width: '28px', height: '1px', backgroundColor: '#b87941' }} />
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-mono), monospace',
                      fontSize: '0.52rem',
                      letterSpacing: '0.24em',
                      textTransform: 'uppercase',
                      color: '#b87941',
                    }}
                  >
                    The Story
                  </span>
                </div>
              </div>

              {/* Right: body text */}
              <div className="lg:col-span-9">
                {paragraphs.map((para, i) => (
                  <p
                    key={i}
                    style={{
                      fontFamily: i === 0 ? 'var(--font-cormorant), Georgia, serif' : 'var(--font-body)',
                      fontSize: i === 0 ? 'clamp(1.25rem, 2.5vw, 1.75rem)' : '0.9375rem',
                      fontWeight: i === 0 ? 300 : 300,
                      lineHeight: i === 0 ? 1.5 : 1.9,
                      color: i === 0 ? '#f5f2ed' : 'rgba(245,242,237,0.6)',
                      marginBottom: '1.75rem',
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Gallery ── */}
        <section
          aria-label="Project gallery"
          style={{ backgroundColor: '#1a1714', padding: '0 2rem 6rem' }}
        >
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.875rem',
                marginBottom: '2.5rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(245,242,237,0.06)',
              }}
            >
              <div style={{ width: '28px', height: '1px', backgroundColor: '#b87941' }} />
              <span
                style={{
                  fontFamily: 'var(--font-dm-mono), monospace',
                  fontSize: '0.52rem',
                  letterSpacing: '0.24em',
                  textTransform: 'uppercase',
                  color: '#b87941',
                }}
              >
                Gallery
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Image 1: Large full width (span 12) */}
              {project.gallery[0] && (
                <div className="lg:col-span-12 gallery-item group" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className="gallery-item-inner" style={{ overflow: 'hidden' }}>
                    <ProjectImage
                      src={project.gallery[0].src}
                      alt={project.gallery[0].alt}
                      category={project.category}
                      aspectRatio="16/7"
                    />
                  </div>
                  {project.gallery[0].caption && (
                    <div style={{
                      marginTop: '0.75rem',
                      fontFamily: 'var(--font-dm-mono), monospace',
                      fontSize: '0.48rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'rgba(245,242,237,0.3)',
                    }}>
                      [01] &nbsp; {project.gallery[0].caption}
                    </div>
                  )}
                </div>
              )}

              {/* Image 2: Mid-width left (span 7) */}
              {project.gallery[1] && (
                <div className="lg:col-span-7 gallery-item group" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className="gallery-item-inner" style={{ overflow: 'hidden' }}>
                    <ProjectImage
                      src={project.gallery[1].src}
                      alt={project.gallery[1].alt}
                      category={project.category}
                      aspectRatio="4/3"
                    />
                  </div>
                  {project.gallery[1].caption && (
                    <div style={{
                      marginTop: '0.75rem',
                      fontFamily: 'var(--font-dm-mono), monospace',
                      fontSize: '0.48rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'rgba(245,242,237,0.3)',
                    }}>
                      [02] &nbsp; {project.gallery[1].caption}
                    </div>
                  )}
                </div>
              )}

              {/* Image 3: Mid-width right (span 5) */}
              {project.gallery[2] && (
                <div className="lg:col-span-5 gallery-item group" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className="gallery-item-inner" style={{ overflow: 'hidden' }}>
                    <ProjectImage
                      src={project.gallery[2].src}
                      alt={project.gallery[2].alt}
                      category={project.category}
                      aspectRatio="4/3"
                    />
                  </div>
                  {project.gallery[2].caption && (
                    <div style={{
                      marginTop: '0.75rem',
                      fontFamily: 'var(--font-dm-mono), monospace',
                      fontSize: '0.48rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'rgba(245,242,237,0.3)',
                    }}>
                      [03] &nbsp; {project.gallery[2].caption}
                    </div>
                  )}
                </div>
              )}

              {/* Image 4: Full width bottom (span 12) */}
              {project.gallery[3] && (
                <div className="lg:col-span-12 gallery-item group" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className="gallery-item-inner" style={{ overflow: 'hidden' }}>
                    <ProjectImage
                      src={project.gallery[3].src}
                      alt={project.gallery[3].alt}
                      category={project.category}
                      aspectRatio="16/7"
                    />
                  </div>
                  {project.gallery[3].caption && (
                    <div style={{
                      marginTop: '0.75rem',
                      fontFamily: 'var(--font-dm-mono), monospace',
                      fontSize: '0.48rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'rgba(245,242,237,0.3)',
                    }}>
                      [04] &nbsp; {project.gallery[3].caption}
                    </div>
                  )}
                </div>
              )}
            </div>

          </div>
        </section>

        {/* ── Key Highlights ── */}
        <section
          aria-label="Project highlights"
          style={{ backgroundColor: '#211e1a', padding: '5rem 2rem' }}
        >
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.875rem',
                marginBottom: '3rem',
              }}
            >
              <div style={{ width: '28px', height: '1px', backgroundColor: '#b87941' }} />
              <span
                style={{
                  fontFamily: 'var(--font-dm-mono), monospace',
                  fontSize: '0.52rem',
                  letterSpacing: '0.24em',
                  textTransform: 'uppercase',
                  color: '#b87941',
                }}
              >
                Project Highlights
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px"
              style={{ backgroundColor: 'rgba(184,121,65,0.08)' }}
            >
              {[
                { label: 'Category',  value: project.category },
                { label: 'Total Area', value: project.area     },
                { label: 'Delivered', value: project.year      },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  style={{ backgroundColor: '#211e1a', padding: '2rem 1.75rem' }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-dm-mono), monospace',
                      fontSize: '0.48rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'rgba(184,121,65,0.6)',
                      marginBottom: '0.625rem',
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-cormorant), Georgia, serif',
                      fontSize: '1.625rem',
                      fontWeight: 300,
                      color: '#f5f2ed',
                    }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact CTA ── */}
        <section
          aria-label="Start a project"
          style={{ backgroundColor: '#1a1714', padding: '6rem 2rem' }}
        >
          <div
            style={{
              maxWidth: '760px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '1px',
                backgroundColor: '#b87941',
                margin: '0 auto 2.5rem',
              }}
            />
            <h2
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 300,
                color: '#f5f2ed',
                lineHeight: 1.1,
                marginBottom: '1.25rem',
              }}
            >
              Have a project in mind?
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                fontWeight: 300,
                color: 'rgba(245,242,237,0.5)',
                lineHeight: 1.8,
                marginBottom: '2.5rem',
              }}
            >
              Whether you have a fully formed vision or just the seed of an idea, we&apos;d love to hear from you.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/#contact"
                id="project-detail-cta"
                style={{
                  fontFamily: 'var(--font-dm-mono), monospace',
                  fontSize: '0.62rem',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#1a1714',
                  backgroundColor: '#b87941',
                  textDecoration: 'none',
                  padding: '1rem 2.25rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  transition: 'background-color 0.25s ease',
                }}
              >
                Start a Conversation
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/projects"
                style={{
                  fontFamily: 'var(--font-dm-mono), monospace',
                  fontSize: '0.62rem',
                  fontWeight: 400,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#f5f2ed',
                  textDecoration: 'none',
                  padding: '1rem 2.25rem',
                  border: '1px solid rgba(245,242,237,0.15)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'border-color 0.25s ease',
                }}
              >
                View All Projects
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
