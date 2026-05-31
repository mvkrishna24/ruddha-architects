'use client';

import Link from 'next/link';
import { PROJECTS } from '@/lib/projects';
import ProjectImage from '@/components/ui/ProjectImage';

const featured = PROJECTS.filter((p) => p.featured);

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      style={{ backgroundColor: '#f5f2ed', padding: '7rem 2rem' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* ── Header ── */}
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
                Selected Work
              </span>
            </div>
            <h2
              id="projects-heading"
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 300,
                color: '#1a1714',
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Projects that define spaces.
            </h2>
          </div>

          <Link
            href="/projects"
            id="projects-view-all"
            style={{
              fontFamily: 'var(--font-dm-mono), monospace',
              fontSize: '0.58rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#1a1714',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              borderBottom: '1px solid rgba(26, 23, 20, 0.25)',
              paddingBottom: '2px',
              transition: 'border-color 0.2s ease, color 0.2s ease',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = '#b87941';
              el.style.color = '#b87941';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = 'rgba(26, 23, 20, 0.25)';
              el.style.color = '#1a1714';
            }}
          >
            View All Projects
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
              <path d="M1 5.5h9M6 1.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0"
          style={{ border: '1px solid rgba(26,23,20,0.08)' }}
        >
          {featured.map((project, i) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="featured-card"
              style={{
                textDecoration: 'none',
                display: 'block',
                borderRight: i < featured.length - 1 ? '1px solid rgba(26,23,20,0.08)' : 'none',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Image / Placeholder */}
              <div className="featured-card-thumb" style={{ position: 'relative', overflow: 'hidden' }}>
                <div className="featured-card-thumb-inner">
                  <ProjectImage
                    src={project.heroImage}
                    alt={project.title}
                    category={project.category}
                    aspectRatio="4/3"
                    priority={false}
                  />
                </div>

                {/* Hover overlay */}
                <div
                  className="featured-card-overlay"
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(26,23,20,0)',
                    transition: 'background-color 0.4s ease',
                  }}
                />

                {/* Category tag */}
                <span
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    left: '1.25rem',
                    zIndex: 2,
                    fontFamily: 'var(--font-dm-mono), monospace',
                    fontSize: '0.48rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: '#b87941',
                    backgroundColor: 'rgba(26,23,20,0.72)',
                    padding: '0.3rem 0.625rem',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {project.category}
                </span>

                {/* Year */}
                <span
                  style={{
                    position: 'absolute',
                    bottom: '1.25rem',
                    right: '1.25rem',
                    zIndex: 2,
                    fontFamily: 'var(--font-dm-mono), monospace',
                    fontSize: '0.48rem',
                    letterSpacing: '0.18em',
                    color: 'rgba(245,242,237,0.4)',
                  }}
                >
                  {project.year}
                </span>
              </div>

              {/* Card body */}
              <div style={{ padding: '1.75rem 1.5rem', backgroundColor: '#f5f2ed' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: '#1a1714',
                    lineHeight: 1.2,
                    marginBottom: '0.5rem',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-mono), monospace',
                    fontSize: '0.5rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'rgba(26,23,20,0.4)',
                    marginBottom: '1.25rem',
                  }}
                >
                  {project.location} &nbsp;·&nbsp; {project.area}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    fontWeight: 300,
                    color: 'rgba(26,23,20,0.6)',
                    lineHeight: 1.8,
                    marginBottom: '1.5rem',
                  }}
                >
                  {project.description.split('\n\n')[0]}
                </p>

                {/* CTA */}
                <span
                  style={{
                    fontFamily: 'var(--font-dm-mono), monospace',
                    fontSize: '0.52rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#b87941',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    borderBottom: '1px solid rgba(184,121,65,0.3)',
                    paddingBottom: '1px',
                  }}
                >
                  View Project
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="M1 5h8M5.5 1.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>

              {/* Bottom copper reveal bar */}
              <div
                className="featured-card-bar"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: '#b87941',
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
