'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProjectImage from '@/components/ui/ProjectImage';
import { PROJECTS, PROJECT_CATEGORIES, type ProjectCategory } from '@/lib/projects';

const ALL = 'All' as const;
type FilterValue = typeof ALL | ProjectCategory;

export default function ProjectsPage() {
  const [active, setActive] = useState<FilterValue>(ALL);

  const filtered = active === ALL ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      <Navbar />

      <main id="main-content">
        {/* ── Hero ── */}
        <section
          aria-label="Projects hero"
          style={{
            backgroundColor: '#1a1714',
            paddingTop: '10rem',
            paddingBottom: '5rem',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background grid */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `
                linear-gradient(rgba(184,121,65,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(184,121,65,0.03) 1px, transparent 1px)
              `,
              backgroundSize: '64px 64px',
            }}
          />

          <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            {/* Eyebrow */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.875rem',
                marginBottom: '2rem',
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
                Ruddha Architects &amp; Interiors
              </span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(2.75rem, 7vw, 6rem)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                lineHeight: 0.95,
                color: '#f5f2ed',
                marginBottom: '1.5rem',
                textShadow: '0 0 40px rgba(184,121,65,0.15)',
              }}
            >
              Selected Works
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.0625rem',
                fontWeight: 300,
                color: 'rgba(245,242,237,0.5)',
                maxWidth: '480px',
                lineHeight: 1.8,
                marginBottom: '3.5rem',
              }}
            >
              A curated collection of architecture, interiors, and built environments — designed and delivered from Warangal, Telangana.
            </p>

            {/* ── Filter Bar ── */}
            <div
              role="group"
              aria-label="Filter projects by category"
              style={{
                display: 'flex',
                gap: '2rem',
                flexWrap: 'wrap',
                borderBottom: '1px solid rgba(245,242,237,0.08)',
                paddingBottom: '0',
              }}
            >
              <button
                id="filter-all"
                className={`filter-tab${active === ALL ? ' active' : ''}`}
                onClick={() => setActive(ALL)}
              >
                All ({PROJECTS.length})
              </button>
              {PROJECT_CATEGORIES.map((cat) => {
                const count = PROJECTS.filter((p) => p.category === cat).length;
                if (count === 0) return null;
                return (
                  <button
                    key={cat}
                    id={`filter-${cat.toLowerCase()}`}
                    className={`filter-tab${active === cat ? ' active' : ''}`}
                    onClick={() => setActive(cat)}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Projects Grid ── */}
        <section
          aria-label="Projects grid"
          style={{ backgroundColor: '#1a1714', padding: '4rem 2rem 7rem' }}
        >
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

            {/* Count */}
            <p
              style={{
                fontFamily: 'var(--font-dm-mono), monospace',
                fontSize: '0.52rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(245,242,237,0.25)',
                marginBottom: '2.5rem',
              }}
            >
              {filtered.length} project{filtered.length !== 1 ? 's' : ''} shown
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '1.5px', backgroundColor: 'rgba(184,121,65,0.06)' }}>
              {filtered.map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.slug}`}
                  className="projects-grid-card"
                  style={{ backgroundColor: '#1a1714' }}
                >
                  {/* Thumbnail */}
                  <div className="projects-grid-card-thumb-inner" style={{ overflow: 'hidden' }}>
                    <ProjectImage
                      src={project.heroImage}
                      alt={project.title}
                      category={project.category}
                      aspectRatio="4/3"
                    />
                  </div>

                  {/* Meta */}
                  <div style={{ padding: '1.5rem 1.25rem 1.75rem' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '0.625rem',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-dm-mono), monospace',
                          fontSize: '0.48rem',
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          color: '#b87941',
                        }}
                      >
                        {project.category}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-dm-mono), monospace',
                          fontSize: '0.48rem',
                          letterSpacing: '0.14em',
                          color: 'rgba(245,242,237,0.25)',
                        }}
                      >
                        {project.year}
                      </span>
                    </div>

                    <h2
                      style={{
                        fontFamily: 'var(--font-cormorant), Georgia, serif',
                        fontSize: '1.375rem',
                        fontWeight: 400,
                        color: '#f5f2ed',
                        lineHeight: 1.2,
                        marginBottom: '0.375rem',
                      }}
                    >
                      {project.title}
                    </h2>

                    <p
                      style={{
                        fontFamily: 'var(--font-dm-mono), monospace',
                        fontSize: '0.48rem',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'rgba(245,242,237,0.3)',
                        marginBottom: '0',
                      }}
                    >
                      {project.location} &nbsp;·&nbsp; {project.area}
                    </p>
                  </div>

                  <div className="projects-grid-card-bar" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
