/**
 * ProjectPlaceholder
 * ──────────────────
 * A branded, elegant placeholder used wherever a project hero or gallery image
 * would appear. Built with pure CSS gradients + an SVG architectural grid mark.
 *
 * Replace: once real project photography is available, swap the <img> src in
 * each project card/page. The placeholder will no longer render because the
 * `<img>` will load successfully.
 */

'use client';

import { type ProjectCategory } from '@/lib/projects';

// Curated gradient per category — warm, architectural tones
const GRADIENT: Record<ProjectCategory, string> = {
  Residential:  'linear-gradient(145deg, #1e1b17 0%, #2a2218 50%, #1a1714 100%)',
  Commercial:   'linear-gradient(145deg, #18191e 0%, #1e2228 50%, #14151a 100%)',
  Interiors:    'linear-gradient(145deg, #1e1917 0%, #2a2018 50%, #1a1614 100%)',
  Landscape:    'linear-gradient(145deg, #161c18 0%, #1c2620 50%, #121814 100%)',
  Renovation:   'linear-gradient(145deg, #1e1a16 0%, #282018 50%, #1a1612 100%)',
  Hospitality:  'linear-gradient(145deg, #1c1818 0%, #261e1c 50%, #181414 100%)',
};

const OVERLAY: Record<ProjectCategory, string> = {
  Residential: 'rgba(184,121,65,0.06)',
  Commercial:  'rgba(100,120,160,0.06)',
  Interiors:   'rgba(184,121,65,0.08)',
  Landscape:   'rgba(80,140,80,0.06)',
  Renovation:  'rgba(160,100,80,0.06)',
  Hospitality: 'rgba(140,100,120,0.06)',
};

interface Props {
  category:   ProjectCategory;
  title?:     string;
  aspectRatio?: string;   // default '16/9'
  showGrid?:  boolean;
}

export default function ProjectPlaceholder({
  category,
  title,
  aspectRatio = '16/9',
  showGrid = true,
}: Props) {
  return (
    <div
      role="img"
      aria-label={title ? `${title} — image coming soon` : 'Project image coming soon'}
      style={{
        aspectRatio,
        width: '100%',
        background: GRADIENT[category] ?? GRADIENT.Residential,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Radial copper glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse 60% 50% at 40% 60%, ${OVERLAY[category]} 0%, transparent 70%)`,
        }}
      />

      {/* Architectural grid */}
      {showGrid && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(245,242,237,0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245,242,237,0.025) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
      )}

      {/* SVG architectural mark */}
      <svg
        aria-hidden="true"
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        style={{ opacity: 0.12, position: 'relative', zIndex: 1 }}
      >
        <rect x="1" y="1" width="70" height="70" stroke="#b87941" strokeWidth="1" />
        <rect x="10" y="10" width="52" height="52" stroke="#b87941" strokeWidth="0.5" />
        <line x1="36" y1="1" x2="36" y2="71" stroke="#b87941" strokeWidth="0.5" />
        <line x1="1" y1="36" x2="71" y2="36" stroke="#b87941" strokeWidth="0.5" />
        <circle cx="36" cy="36" r="8" stroke="#b87941" strokeWidth="0.75" />
      </svg>

      {/* Category label */}
      <span
        style={{
          position: 'absolute',
          bottom: '1.125rem',
          left: '1.25rem',
          fontFamily: 'var(--font-dm-mono), monospace',
          fontSize: '0.48rem',
          letterSpacing: '0.24em',
          textTransform: 'uppercase',
          color: 'rgba(184,121,65,0.55)',
        }}
      >
        {category}
      </span>
    </div>
  );
}
