'use client';

import { FEATURED_PROJECTS, type Project } from '@/lib/constants';

const THUMB_COLORS: Record<string, string> = {
  'ravi-residence':    '#1e1b17',
  'meridian-offices':  '#23201c',
  'lakeside-pavilion': '#1a1916',
};

function ProjectCard({ project }: { project: Project }) {
  const thumbBg = THUMB_COLORS[project.id] ?? '#1e1b17';
  const initial = project.title.charAt(0);

  return (
    <article className="project-card">
      {/* Placeholder thumbnail */}
      <div className="project-card-thumb" style={{ height: '340px', position: 'relative' }}>
        <div
          className="project-card-thumb-inner"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: thumbBg,
            backgroundImage: project.dark
              ? `linear-gradient(145deg, rgba(184,121,65,0.06) 0%, transparent 60%)`
              : `linear-gradient(145deg, rgba(245,242,237,0.04) 0%, transparent 60%)`,
          }}
        >
          {/* Decorative large letter */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: '-16px',
              right: '1.25rem',
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: '11rem',
              fontWeight: 300,
              color: 'rgba(245, 242, 237, 0.04)',
              lineHeight: 1,
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          >
            {initial}
          </div>

          {/* Subtle grid lines */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `
                linear-gradient(rgba(245,242,237,0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(245,242,237,0.02) 1px, transparent 1px)
              `,
              backgroundSize: '48px 48px',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Category tag */}
        <div
          style={{
            position: 'absolute',
            top: '1.25rem',
            left: '1.25rem',
            zIndex: 1,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-dm-mono), monospace',
              fontSize: '0.52rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#b87941',
              backgroundColor: 'rgba(26, 23, 20, 0.75)',
              padding: '0.3rem 0.625rem',
              backdropFilter: 'blur(8px)',
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Year */}
        <div
          style={{
            position: 'absolute',
            bottom: '1.25rem',
            right: '1.25rem',
            zIndex: 1,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-dm-mono), monospace',
              fontSize: '0.52rem',
              letterSpacing: '0.18em',
              color: 'rgba(245, 242, 237, 0.35)',
            }}
          >
            {project.year}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: '1.625rem 0.25rem 0' }}>
        <h3
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: '1.625rem',
            fontWeight: 400,
            color: '#1a1714',
            lineHeight: 1.2,
            marginBottom: '0.625rem',
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.875rem',
            fontWeight: 300,
            color: 'rgba(26, 23, 20, 0.6)',
            lineHeight: 1.8,
            marginBottom: '1rem',
          }}
        >
          {project.description}
        </p>

        {/* Location + CTA row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-dm-mono), monospace',
              fontSize: '0.52rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(26, 23, 20, 0.35)',
            }}
          >
            {project.location}
          </span>
          <a
            href={`#${project.id}`}
            style={{
              fontFamily: 'var(--font-dm-mono), monospace',
              fontSize: '0.58rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#b87941',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              transition: 'gap 0.2s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.gap = '0.625rem';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.gap = '0.375rem';
            }}
          >
            View Project
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
              <path
                d="M1 5.5h9M6 1.5l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      style={{ backgroundColor: '#f5f2ed', padding: '7rem 2rem' }}
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

          <a
            href="#contact"
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
            Start a Project
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
              <path
                d="M1 5.5h9M6 1.5l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom note */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-dm-mono), monospace',
              fontSize: '0.55rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(26, 23, 20, 0.3)',
              margin: 0,
            }}
          >
            Client images will be added in Phase 2 — placeholders shown
          </p>
        </div>
      </div>
    </section>
  );
}
