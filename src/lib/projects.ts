// ─────────────────────────────────────────────────────────────────────────────
// Project Schema
// ─────────────────────────────────────────────────────────────────────────────
// To add a new project in the future:
//   1. Copy one of the entries below as a template.
//   2. Give it a unique `id` and `slug` (URL-friendly, lowercase, hyphenated).
//   3. Set `featured: true` if it should appear on the homepage carousel.
//   4. Replace placeholder copy with real client data.
//   5. Replace placeholder image paths with real asset paths under /public/projects/[slug]/
// ─────────────────────────────────────────────────────────────────────────────

export type ProjectCategory =
  | 'Residential'
  | 'Commercial'
  | 'Interiors'
  | 'Landscape'
  | 'Renovation'
  | 'Hospitality';

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id:          string;
  slug:        string;
  title:       string;
  category:    ProjectCategory;
  location:    string;
  year:        string;
  area:        string;       // e.g. "4,200 sq ft"
  client:      string;       // e.g. "Private Client" or actual name
  description: string;       // Full project description (2–3 paragraphs)
  heroImage:   string;       // Path relative to /public
  gallery:     GalleryImage[];
  featured:    boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// Project Data
// ─────────────────────────────────────────────────────────────────────────────

export const PROJECTS: Project[] = [
  // ── 01 ──────────────────────────────────────────────────────────────────────
  {
    id:       'luxury-residence',
    slug:     'luxury-residence',
    title:    'The Aranya Residence',
    category: 'Residential',
    location: 'Warangal, Telangana',
    year:     '2024',
    area:     '5,400 sq ft',
    client:   'Private Client',
    description: [
      'A luxury family residence designed around the concept of layered privacy — where the public arrival sequence gradually gives way to increasingly intimate living spaces, each framed by curated views of the landscape beyond.',
      'The ground floor is anchored by a double-height living pavilion open on three sides, blurring the threshold between inside and outside. Natural stone, hand-finished plaster, and sustainably sourced timber form the material palette — warm, tactile, and built to age beautifully.',
      'Every room has a considered relationship with natural light. Roof overhangs, perforated screens, and careful orientation manage solar gain while maintaining the sense of openness that defines the house.',
    ].join('\n\n'),
    heroImage: '/projects/luxury-residence/hero.jpg',
    gallery: [
      { src: '/projects/luxury-residence/gallery-01.jpg', alt: 'Living pavilion with double-height ceiling', caption: 'Living Pavilion' },
      { src: '/projects/luxury-residence/gallery-02.jpg', alt: 'Primary bedroom with landscape view', caption: 'Primary Suite' },
      { src: '/projects/luxury-residence/gallery-03.jpg', alt: 'Kitchen and dining area', caption: 'Kitchen & Dining' },
      { src: '/projects/luxury-residence/gallery-04.jpg', alt: 'Courtyard and water feature', caption: 'Central Courtyard' },
    ],
    featured: true,
  },

  // ── 02 ──────────────────────────────────────────────────────────────────────
  {
    id:       'contemporary-villa',
    slug:     'contemporary-villa',
    title:    'The Kaveri Villa',
    category: 'Residential',
    location: 'Hanamkonda, Telangana',
    year:     '2024',
    area:     '3,800 sq ft',
    client:   'Private Client',
    description: [
      'A contemporary villa that reconciles modern form with vernacular sensibility — crisp white volumes punctuated by deep-shaded verandas and a central garden that acts as the social heart of the home.',
      'The plan is organised around a series of transitional outdoor spaces — covered terraces, planted courts, and a rooftop garden — that blur the boundary between interior and landscape. The result is a home that feels generous even at a measured footprint.',
      'Locally sourced Kadappa stone, exposed concrete ceilings, and brass hardware form a material language that is understated yet unmistakably considered.',
    ].join('\n\n'),
    heroImage: '/projects/contemporary-villa/hero.jpg',
    gallery: [
      { src: '/projects/contemporary-villa/gallery-01.jpg', alt: 'Front elevation', caption: 'Entrance Facade' },
      { src: '/projects/contemporary-villa/gallery-02.jpg', alt: 'Central garden', caption: 'Garden Court' },
      { src: '/projects/contemporary-villa/gallery-03.jpg', alt: 'Rooftop terrace', caption: 'Rooftop Garden' },
      { src: '/projects/contemporary-villa/gallery-04.jpg', alt: 'Master bathroom', caption: 'Master Bath' },
    ],
    featured: true,
  },

  // ── 03 ──────────────────────────────────────────────────────────────────────
  {
    id:       'modern-interiors',
    slug:     'modern-interiors',
    title:    'Nakshatra Interiors',
    category: 'Interiors',
    location: 'Warangal, Telangana',
    year:     '2024',
    area:     '2,200 sq ft',
    client:   'Private Client',
    description: [
      'A complete interior design commission for a 4BHK apartment — designed to feel curated rather than decorated. The brief called for spaces that were warm but not heavy, modern but not cold.',
      'The living and dining areas share a continuous material language of fluted wood panels, matte limestone floors, and indirect lighting that shifts the mood from morning to evening. Bespoke joinery throughout means every storage solution is also a design statement.',
      'The kitchen is a chef\'s environment first — professional appliances, ample prep surface, and a pass-through that connects cook and guest without sacrificing either function or intimacy.',
    ].join('\n\n'),
    heroImage: '/projects/modern-interiors/hero.jpg',
    gallery: [
      { src: '/projects/modern-interiors/gallery-01.jpg', alt: 'Living room with fluted wood panelling', caption: 'Living Room' },
      { src: '/projects/modern-interiors/gallery-02.jpg', alt: 'Open kitchen with island', caption: 'Kitchen' },
      { src: '/projects/modern-interiors/gallery-03.jpg', alt: 'Master bedroom', caption: 'Master Bedroom' },
      { src: '/projects/modern-interiors/gallery-04.jpg', alt: 'Study room', caption: 'Study' },
    ],
    featured: false,
  },

  // ── 04 ──────────────────────────────────────────────────────────────────────
  {
    id:       'landscape-design',
    slug:     'landscape-design',
    title:    'The Vana Garden',
    category: 'Landscape',
    location: 'Warangal, Telangana',
    year:     '2024',
    area:     '1.2 acres',
    client:   'Private Estate',
    description: [
      'A private estate landscape commission — transforming a flat, featureless plot into a layered garden that moves through distinct spatial experiences: a formal arrival grove, a productive kitchen garden, an informal wildflower meadow, and a sheltered pool garden.',
      'The design draws on traditional Deccan horticultural patterns while meeting the client\'s contemporary lifestyle needs. Native and drought-tolerant species were prioritised throughout, reducing long-term maintenance while increasing ecological value.',
      'Stone pathways, sculpted earth berms, and a series of pavilions tie the landscape together — giving the estate a sense of depth and discovery that rewards every visit.',
    ].join('\n\n'),
    heroImage: '/projects/landscape-design/hero.jpg',
    gallery: [
      { src: '/projects/landscape-design/gallery-01.jpg', alt: 'Arrival grove', caption: 'Arrival Grove' },
      { src: '/projects/landscape-design/gallery-02.jpg', alt: 'Pool garden', caption: 'Pool Garden' },
      { src: '/projects/landscape-design/gallery-03.jpg', alt: 'Kitchen garden', caption: 'Kitchen Garden' },
      { src: '/projects/landscape-design/gallery-04.jpg', alt: 'Wildflower meadow', caption: 'Meadow' },
    ],
    featured: false,
  },

  // ── 05 ──────────────────────────────────────────────────────────────────────
  {
    id:       'renovation-project',
    slug:     'renovation-project',
    title:    'The Heritage House Revival',
    category: 'Renovation',
    location: 'Warangal, Telangana',
    year:     '2024',
    area:     '2,900 sq ft',
    client:   'Private Client',
    description: [
      'A 60-year-old family home, structurally sound but in need of radical reinvention — the brief was to strip it back, honour the bones, and bring it forward without erasing its memory.',
      'Original lime plaster walls and teak window frames were retained and restored. A new contemporary service wing was added to the rear — visually distinct but materially sympathetic — freeing the original structure to function as pure living space.',
      'The transformation is striking but not aggressive. The house reads as a layered conversation between its past and its present — exactly as it should.',
    ].join('\n\n'),
    heroImage: '/projects/renovation-project/hero.jpg',
    gallery: [
      { src: '/projects/renovation-project/gallery-01.jpg', alt: 'Restored facade', caption: 'Restored Facade' },
      { src: '/projects/renovation-project/gallery-02.jpg', alt: 'New living wing', caption: 'New Living Wing' },
      { src: '/projects/renovation-project/gallery-03.jpg', alt: 'Original teak windows restored', caption: 'Restored Windows' },
      { src: '/projects/renovation-project/gallery-04.jpg', alt: 'Courtyard between old and new', caption: 'Courtyard' },
    ],
    featured: true,
  },

  // ── 06 ──────────────────────────────────────────────────────────────────────
  {
    id:       'commercial-space',
    slug:     'commercial-space',
    title:    'Studio 41 — Commercial Office',
    category: 'Commercial',
    location: 'Hyderabad, Telangana',
    year:     '2024',
    area:     '6,800 sq ft',
    client:   'Tech Startup',
    description: [
      'A 6,800 sq ft commercial office fit-out for a growing technology company — designed to attract talent, support focused work, and represent the brand with confidence.',
      'The office is organised around three distinct zones: a high-energy collaborative core, a quiet deep-work periphery, and a hospitality zone that functions as both client reception and team social space. Biophilic elements — living walls, abundant natural light, and exposed timber — run through all three.',
      'The design deliberately avoids the visual noise of typical tech offices. The result is a workspace that is calm, considered, and genuinely inspiring — a place people choose to come to.',
    ].join('\n\n'),
    heroImage: '/projects/commercial-space/hero.jpg',
    gallery: [
      { src: '/projects/commercial-space/gallery-01.jpg', alt: 'Collaborative core', caption: 'Collaboration Zone' },
      { src: '/projects/commercial-space/gallery-02.jpg', alt: 'Deep work periphery', caption: 'Focus Zone' },
      { src: '/projects/commercial-space/gallery-03.jpg', alt: 'Reception and hospitality', caption: 'Reception' },
      { src: '/projects/commercial-space/gallery-04.jpg', alt: 'Living wall feature', caption: 'Biophilic Feature' },
    ],
    featured: false,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Helper utilities
// ─────────────────────────────────────────────────────────────────────────────

/** All featured projects (for homepage carousel) */
export const FEATURED_PROJECTS_FULL = PROJECTS.filter((p) => p.featured);

/** Look up a project by slug */
export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

/** All unique categories */
export const PROJECT_CATEGORIES: ProjectCategory[] = [
  'Residential',
  'Commercial',
  'Interiors',
  'Landscape',
  'Renovation',
  'Hospitality',
];

// ─── Utility ─────────────────────────────────────────────────────────────────
/**
 * Returns a project by its slug ID, or undefined if not found.
 * Useful for dynamic route pages: /projects/[slug]
 */
export function getProjectById(id: string) {
  return PROJECTS.find((p) => p.id === id);
}
