'use client';

/**
 * ProjectImage
 * ────────────
 * Smart image component for all project photography.
 *
 * Behaviour:
 *   • When a real image exists at `src`, renders it as an optimised
 *     Next/Image with lazy loading, blur placeholder, and responsive srcSet.
 *   • When the image is missing (404) or `src` is empty, gracefully
 *     degrades to the branded <ProjectPlaceholder> — no broken images,
 *     no layout shifts.
 *
 * Usage:
 *   <ProjectImage
 *     src="/projects/luxury-residence/hero.jpg"
 *     alt="The Aranya Residence — living pavilion"
 *     category="Residential"
 *     aspectRatio="16/9"
 *     priority          ← add this for the hero / LCP image
 *   />
 *
 * Replacing placeholders:
 *   Drop real photography at the correct path in /public.
 *   The component will automatically switch from placeholder to photo.
 *   No code changes needed.
 */

import { useState } from 'react';
import Image from 'next/image';
import ProjectPlaceholder from '@/components/ui/ProjectPlaceholder';
import { type ProjectCategory } from '@/lib/projects';

interface Props {
  src:         string;
  alt:         string;
  category:    ProjectCategory;
  aspectRatio?: string;    // CSS aspect-ratio, e.g. '16/9', '4/3'
  priority?:   boolean;   // true for hero / LCP images
  className?:  string;
}

export default function ProjectImage({
  src,
  alt,
  category,
  aspectRatio = '16/9',
  priority    = false,
  className,
}: Props) {
  const [error, setError] = useState(false);
  const hasRealImage = src && src.trim() !== '' && !error;

  if (!hasRealImage) {
    return (
      <ProjectPlaceholder
        category={category}
        title={alt}
        aspectRatio={aspectRatio}
        showGrid
      />
    );
  }

  return (
    <div
      className={className}
      style={{
        position:    'relative',
        width:       '100%',
        aspectRatio,
        overflow:    'hidden',
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority={priority}
        quality={85}
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        onError={() => setError(true)}
        // Inline blur data URI — elegant warm blur while loading
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWExNzE0Ii8+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNnKSIvPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0iZyIgY3g9IjQwJSIgY3k9IjYwJSIgcj0iNjAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjYjg3OTQxIiBzdG9wLW9wYWNpdHk9IjAuMDgiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxYTE3MTQiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg=="
      />
    </div>
  );
}
