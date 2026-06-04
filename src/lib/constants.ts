// ─── Navigation ────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Work',      href: '/projects'   },
  { label: 'About',     href: '/#philosophy' },
  { label: 'Services',  href: '/#services'   },
  { label: 'Process',   href: '/#process'    },
  { label: 'Contact',   href: '/#contact'    },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];

// ─── Brand ──────────────────────────────────────────────────────────────────
export const BRAND = {
  name:     'Ruddha',
  full:     'Ruddha Architects & Interiors',
  tagline:  'Where Space Becomes Story',
  email:    'ruddha.arch@gmail.com',
  phone:    '+91 99660 24626',
  address:  'Kashibugga, Warangal, Telangana, India',
  city:     'Warangal',
  state:    'Telangana',
  est:      '2024',
  whatsapp: 'https://wa.me/919966024626',
  instagram: 'https://instagram.com/ruddha.architects',
} as const;

// ─── Founder ─────────────────────────────────────────────────────────────────
export const FOUNDER = {
  name:      'Ar. Sathkruth Gone',
  degree:    'B.Arch — Chandigarh University',
  role:      'Principal Architect & Founder',
  bio: [
    'Ruddha Architects & Interiors was founded on a simple but deeply held conviction — that good architecture should not be a privilege of the few. Every family, every business, and every community deserves spaces that are beautifully designed, functionally sound, and built to last.',
    'Led by Ar. Sathkruth Gone, a graduate of Chandigarh University, our studio integrates classical architectural thinking with contemporary AI-assisted workflows — reducing design iteration time while dramatically improving precision and client clarity.',
    'Based in Kashibugga, Warangal, we serve residential and commercial clients across Telangana, bringing the discipline of a large studio and the personal attention of a boutique practice to every project we take on.',
  ],
  philosophy:
    '"Great architecture is not about statements. It is about listening — to the site, to the client, and to the silence between their words."',
} as const;

// ─── Services ────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id:          'architecture',
    title:       'Architectural Planning',
    tagline:     'Structure that endures.',
    description:
      'From initial concept through working drawings and approvals, we design buildings that are structurally disciplined, spatially generous, and visually cohesive — residential to commercial, intimate to expansive.',
  },
  {
    id:          'interiors',
    title:       'Interior Design',
    tagline:     'Spaces that feel inevitable.',
    description:
      'We curate interiors where every surface, fixture, and material earns its place. Our interiors are never decorated — they are designed from the inside out, responding to how each space is actually lived in.',
  },
  {
    id:          'landscape',
    title:       'Landscape Design',
    tagline:     'Where built meets natural.',
    description:
      'Outdoor spaces are not afterthoughts. We design gardens, courtyards, terraces, and site transitions that connect architecture to its landscape — creating environments that breathe alongside the building.',
  },
  {
    id:          'renovation',
    title:       'Renovation & Remodeling',
    tagline:     'Honour the past. Reimagine the future.',
    description:
      'We transform underperforming or outdated spaces with the same care we bring to new builds. Whether it is a heritage home or an ageing office, we restore structural integrity and elevate the lived experience.',
  },
  {
    id:          'turnkey',
    title:       'Turnkey Execution',
    tagline:     'One team. Complete accountability.',
    description:
      'We manage the entire project lifecycle — design, procurement, contractor coordination, site supervision, and handover. You receive a finished space without managing multiple vendors or navigating construction complexity.',
  },
  {
    id:          'consultation',
    title:       'Design Consultation',
    tagline:     'Clarity before commitment.',
    description:
      'Before breaking ground, we help you make the right decisions. Site evaluation, feasibility studies, design direction, material strategy, and budget structuring — expert guidance at every critical decision point.',
  },
] as const;

export type Service = (typeof SERVICES)[number];

// ─── Process ─────────────────────────────────────────────────────────────────
export const PROCESS_STEPS = [
  {
    ordinal:     '01',
    title:       'Discovery',
    description:
      'We begin by listening. A deep-dive consultation to understand your vision, lifestyle, site constraints, budget parameters, and timeline — establishing the foundation every successful project is built on.',
  },
  {
    ordinal:     '02',
    title:       'Site Analysis',
    description:
      'A thorough assessment of the site — topography, orientation, access, natural light, ventilation, and regulatory context. Every design decision that follows is grounded in site reality.',
  },
  {
    ordinal:     '03',
    title:       'Concept Development',
    description:
      'We translate your brief and site data into a spatial concept — exploring massing, form, and flow through sketches, diagrams, and early 3D explorations until the idea feels right.',
  },
  {
    ordinal:     '04',
    title:       'Design Development',
    description:
      'The concept is refined into detailed architectural drawings, interior layouts, material palettes, and technical specifications. AI-assisted workflows allow rapid iteration without sacrificing precision.',
  },
  {
    ordinal:     '05',
    title:       'Visualisation & Approval',
    description:
      'Photorealistic renders and walkthroughs bring the design to life before a single brick is laid. We present, refine, and obtain your full approval before advancing to construction documents.',
  },
  {
    ordinal:     '06',
    title:       'Construction Execution',
    description:
      'Our team oversees every phase of construction — contractor coordination, material procurement, quality control, and site supervision. Design intent is protected through every stage of the build.',
  },
  {
    ordinal:     '07',
    title:       'Handover',
    description:
      'We deliver your project complete and documented — a final walkthrough, as-built drawings, vendor warranties, and maintenance guidance. The space is yours; we remain available for any post-occupancy needs.',
  },
] as const;

export type ProcessStep = (typeof PROCESS_STEPS)[number];

// ─── Trust Signals ────────────────────────────────────────────────────────────
export const TRUST_SIGNALS = [
  {
    id:    'location',
    label: 'Warangal Based',
    value: 'Local Expertise',
    note:  'Serving clients across Telangana with deep regional knowledge of site conditions, local authorities, and trusted contractor networks.',
  },
  {
    id:    'ai',
    label: 'AI-Assisted Design',
    value: 'Precision Workflows',
    note:  'We integrate AI-powered design tools into our workflow — accelerating ideation, improving construction documentation accuracy, and giving clients faster visual clarity.',
  },
  {
    id:    'delivery',
    label: 'End-to-End',
    value: 'Single-Point Delivery',
    note:  'Architecture, interiors, landscape, and execution — all under one roof, one contract, and one accountable team.',
  },
  {
    id:    'personal',
    label: 'Principal-Led',
    value: 'Senior Attention',
    note:  'Every project is personally led by Ar. Sathkruth Gone from first consultation to final handover — no delegation to juniors at critical stages.',
  },
] as const;

// ─── Featured Projects ────────────────────────────────────────────────────────
export const FEATURED_PROJECTS = [
  {
    id:          'ravi-residence',
    category:    'Residential',
    title:       'The Ravi Residence',
    location:    'Warangal, Telangana',
    year:        '2024',
    description:
      'A family home designed around a central light-filled courtyard — where raw concrete meets warm timber and every room has a considered relationship with the outdoors.',
    dark:        true,
  },
  {
    id:          'meridian-offices',
    category:    'Commercial',
    title:       'Meridian Offices',
    location:    'Hyderabad, Telangana',
    year:        '2024',
    description:
      'A collaborative workspace designed for flow — open volumes, layered natural light, and purposeful materiality that supports how modern teams actually work.',
    dark:        false,
  },
  {
    id:          'lakeside-pavilion',
    category:    'Hospitality',
    title:       'Lakeside Pavilion',
    location:    'Warangal, Telangana',
    year:        '2024',
    description:
      'A boutique hospitality retreat that dissolves the boundary between interior luxury and the surrounding natural landscape — site, structure, and landscape as one.',
    dark:        true,
  },
] as const;

export type Project = (typeof FEATURED_PROJECTS)[number];

// ─── Contact Form Options ─────────────────────────────────────────────────────
export const PROJECT_TYPES = [
  'Residential Architecture',
  'Commercial Architecture',
  'Interior Design',
  'Landscape Design',
  'Renovation & Remodeling',
  'Turnkey Execution',
  'Design Consultation',
] as const;
