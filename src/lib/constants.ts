export const NAV_LINKS = [
  { label: 'Work', href: '#projects' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];

export const SERVICES = [
  {
    id: 'architecture',
    title: 'Architecture',
    description:
      'From concept to construction, we design spaces that endure — structurally sound, visually timeless, and deeply human.',
  },
  {
    id: 'interiors',
    title: 'Interior Design',
    description:
      'Curated environments where light, material, and proportion converge to create spaces that feel inevitable.',
  },
  {
    id: 'renovation',
    title: 'Renovation',
    description:
      'We breathe new life into existing structures, honouring their history while reimagining their future.',
  },
  {
    id: 'consultation',
    title: 'Consultation',
    description:
      'Strategic guidance at every stage — site selection, feasibility, design direction, and material sourcing.',
  },
] as const;

export type Service = (typeof SERVICES)[number];

export const FEATURED_PROJECTS = [
  {
    id: 'ravi-residence',
    category: 'Residential',
    title: 'The Ravi Residence',
    location: 'Hyderabad, IN',
    year: '2024',
    description:
      'A minimalist family home where raw concrete meets warm timber, built around a light-filled central courtyard.',
    dark: true,
  },
  {
    id: 'meridian-offices',
    category: 'Commercial',
    title: 'Meridian Offices',
    location: 'Bangalore, IN',
    year: '2023',
    description:
      'A collaborative workspace designed for flow — open volumes, layered light, and purposeful materiality throughout.',
    dark: false,
  },
  {
    id: 'lakeside-pavilion',
    category: 'Hospitality',
    title: 'Lakeside Pavilion',
    location: 'Coorg, IN',
    year: '2023',
    description:
      'A hospitality retreat dissolving the boundary between interior luxury and the surrounding natural landscape.',
    dark: true,
  },
] as const;

export type Project = (typeof FEATURED_PROJECTS)[number];

export const BRAND = {
  name: 'Ruddha',
  full: 'Ruddha Architects & Interiors',
  tagline: 'Architecture That Speaks',
  email: 'hello@ruddhaarchitects.com',
  phone: '+91 98765 43210',
  address: 'Hyderabad, Telangana, India',
} as const;

export const PROJECT_TYPES = [
  'Residential Architecture',
  'Commercial Architecture',
  'Interior Design',
  'Hospitality',
  'Renovation',
  'Consultation',
] as const;
