# Ruddha Architects — Portfolio Assets & Content Integration Guide

This guide details how to add, modify, or update project content and imagery on the Ruddha Architects website. The portfolio uses Next.js Image Optimization with a zero-layout-shift architecture and automatic fallback.

---

## 1. Project Directory Structure

All project assets must reside in the static `public/projects/` directory. Each project has a dedicated folder matching its URL slug:

```
public/
└── projects/
    └── [project-slug]/
        ├── hero.jpg             # High-resolution landscape image for the detail header
        ├── gallery-01.jpg       # Lead gallery photo (16:7 aspect ratio)
        ├── gallery-02.jpg       # Grid item 2 (4:3 aspect ratio)
        ├── gallery-03.jpg       # Grid item 3 (4:3 aspect ratio)
        └── gallery-04.jpg       # Grid item 4 (4:3 aspect ratio)
```

> [!NOTE]
> Filenames must match **exactly** as defined in the project data. Standardized filenames (`hero.jpg`, `gallery-01.jpg`, etc.) are recommended for simplicity and ease of maintenance.

---

## 2. Recommended Image Specifications

To maintain the luxury editorial aesthetic and optimize performance, follow these guidelines before importing images:

| Image Type | Recommended Aspect Ratio | Recommended Resolution | Purpose / Grid Layout |
| :--- | :---: | :---: | :--- |
| **Hero Image** | `21:9` or `16:7` | `2560 × 1097 px` | Wide panoramic display at the top of detail page |
| **Gallery Lead (01)** | `16:7` | `1920 × 840 px` | Full-width landscape element anchoring the gallery |
| **Gallery Grid (02–04)** | `4:3` or `3:2` | `1440 × 1080 px` | Stacked grid layouts (portrait or vertical elements) |

### Optimization Best Practices:
* **Formats**: Use `.jpg` or `.png`. Next.js will automatically compress and serve them in modern `.webp` or `.avif` formats dynamically based on the client browser.
* **Compression**: Run files through an optimizer (e.g., [TinyJPG](https://tinyjpg.com/)) before saving. Ensure individual file size is under **350 KB**.
* **Naming**: Stick to lowercase and alphanumeric characters with hyphens. Avoid spaces or special characters in folder names.

---

## 3. Graceful Fallbacks (Zero-Layout-Shift)

The portfolio includes a built-in fallback helper (`ProjectImage.tsx`):
* If a real image file is missing, empty, or fails to load, it will automatically render a **luxurious dark-gold gradient placeholder**.
* The page layout will **never break or experience a layout shift** (CLS) when images are absent.
* This allows you to build, preview, and test new project entries before final client photos are ready.

---

## 4. How to Add a New Project (Step-by-Step)

### Step A: Place the assets
Create a new folder in `public/projects/` named after your project's slug (e.g., `modern-pavilion`), and place your images inside:
```bash
public/projects/modern-pavilion/hero.jpg
public/projects/modern-pavilion/gallery-01.jpg
public/projects/modern-pavilion/gallery-02.jpg
public/projects/modern-pavilion/gallery-03.jpg
public/projects/modern-pavilion/gallery-04.jpg
```

### Step B: Add the project data
Open [src/lib/projects.ts](file:///Users/vamshi/Desktop/ruddha-architects/src/lib/projects.ts) and add a new entry to the `PROJECTS` array:

```typescript
{
  id:       'modern-pavilion',
  slug:     'modern-pavilion',
  title:    'The Modern Pavilion',
  category: 'Residential',
  location: 'Kashibugga, Warangal',
  year:     '2025',
  area:     '4,500 sq ft',
  client:   'Private Client',
  description: [
    'A minimalist pavilion designed to capture the early morning sun while keeping out the midday heat. Floor-to-ceiling glass paneling connects interior living directly with the surrounding native garden.',
    'Crafted with hand-carved local stone cladding, clean steel portals, and premium teak details, the structure combines raw structural honesty with refined interior finishes.',
  ].join('\n\n'),
  heroImage: '/projects/modern-pavilion/hero.jpg',
  gallery: [
    { src: '/projects/modern-pavilion/gallery-01.jpg', alt: 'Exterior pavilion layout', caption: 'South Facade' },
    { src: '/projects/modern-pavilion/gallery-02.jpg', alt: 'Living and dining interior view', caption: 'Grand Lounge' },
    { src: '/projects/modern-pavilion/gallery-03.jpg', alt: 'Integrated kitchen workspace', caption: 'Prep Kitchen' },
    { src: '/projects/modern-pavilion/gallery-04.jpg', alt: 'Detailing of wood-to-stone joint', caption: 'Tectonic Detail' },
  ],
  featured: true, // Set to true to showcase on the homepage editorial grid
}
```

### Step C: Verify and Build
Validate the build locally to ensure Next.js successfully compiles and generates the new static pages:
```bash
pnpm build
```
The console output should display `/projects/modern-pavilion` under the static SSG list.
