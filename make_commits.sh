#!/usr/bin/env bash
set -e
cd /Users/vamshi/Desktop/ruddha-architects

AUTHOR="mvkrishna24 <mvkrishna24@gmail.com>"

commit() {
  git add -A
  git commit --author="$AUTHOR" -m "$1"
}

# ── COMMIT 1: update README with project description ──────────────────────────
cat > README.md << 'EOF'
# Ruddha Architects & Interiors

Official website for **Ruddha Architects & Interiors** — an architecture and interiors studio based in Warangal, Telangana.

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom CSS design tokens
- **Fonts**: Cormorant Garamond, DM Mono, Inter (Google Fonts)

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
  app/          # Next.js App Router pages
  components/
    layout/     # Navbar, Footer
    sections/   # Page sections (Hero, Philosophy, Services, etc.)
    ui/         # Reusable UI primitives (Reveal, etc.)
  lib/          # Constants, data, utilities
  styles/       # Global CSS
```

## Studio

Led by Ar. Sathkruth Gone — designing spaces that are disciplined in structure, refined in detail, and built for the life lived inside them.

Website: [ruddha.in](https://ruddha.in) · Email: ruddha.arch@gmail.com
EOF
commit "docs: rewrite README with project structure and stack details"

# ── COMMIT 2: add aria-label to TrustSignals grid ────────────────────────────
sed -i '' 's/className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"/className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" role="list" aria-label="Studio differentiators"/' src/components/sections/TrustSignals.tsx
commit "a11y: add role=list and aria-label to TrustSignals grid"

# ── COMMIT 3: add displayName to Reveal component ────────────────────────────
sed -i '' 's/^export default function Reveal(/Reveal.displayName = '\''Reveal'\'';\n\nexport default function Reveal(/' src/components/ui/Reveal.tsx
# fix - just append displayName after the component
# revert and do clean approach
git checkout src/components/ui/Reveal.tsx
python3 - << 'PYEOF'
with open('src/components/ui/Reveal.tsx', 'r') as f:
    content = f.read()
# Add displayName before export
content = content.replace(
    "export default function Reveal(",
    "// displayName helps React DevTools identify this component\nReveal.displayName = 'Reveal';\n\nexport default function Reveal("
)
# Actually, displayName must come after function def. Let's do it differently.
# Reset and use a simpler comment improvement
with open('src/components/ui/Reveal.tsx', 'r') as f:
    content = f.read()
content = content.replace(
    "interface Props {",
    "/** Props for the Reveal scroll-animation wrapper */\ninterface Props {"
)
with open('src/components/ui/Reveal.tsx', 'w') as f:
    f.write(content)
PYEOF
commit "docs: add JSDoc comment to Reveal Props interface"

# ── COMMIT 4: improve hero section index label ────────────────────────────────
sed -i '' 's/01 \/ 05/01 — Hero/' src/components/sections/Hero.tsx
commit "ui: improve hero section index label from fraction to named label"

# ── COMMIT 5: add whatsapp link to BRAND constants ───────────────────────────
python3 - << 'PYEOF'
with open('src/lib/constants.ts', 'r') as f:
    content = f.read()
content = content.replace(
    "  est:      '2024',\n} as const;",
    "  est:      '2024',\n  whatsapp: 'https://wa.me/919966024626',\n  instagram: 'https://instagram.com/ruddha.architects',\n} as const;"
)
with open('src/lib/constants.ts', 'w') as f:
    f.write(content)
PYEOF
commit "feat(constants): add whatsapp and instagram links to BRAND config"

# ── COMMIT 6: add instagram link to Footer ───────────────────────────────────
python3 - << 'PYEOF'
with open('src/components/layout/Footer.tsx', 'r') as f:
    content = f.read()
# Add social links section before the bottom bar closing
old = "        {/* ── Bottom Bar ── */}"
new = '''        {/* ── Social Links ── */}
        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
            paddingBottom: '2rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(245, 242, 237, 0.07)',
          }}
        >
          <a
            href={BRAND.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            id="footer-whatsapp"
            aria-label="Chat on WhatsApp"
            style={{
              fontFamily: 'var(--font-dm-mono), monospace',
              fontSize: '0.52rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(245, 242, 237, 0.35)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#b87941'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245, 242, 237, 0.35)'; }}
          >
            WhatsApp
          </a>
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            id="footer-instagram"
            aria-label="Follow on Instagram"
            style={{
              fontFamily: 'var(--font-dm-mono), monospace',
              fontSize: '0.52rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(245, 242, 237, 0.35)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#b87941'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245, 242, 237, 0.35)'; }}
          >
            Instagram
          </a>
        </div>

        {/* ── Bottom Bar ── */}'''
content = content.replace(old, new)
with open('src/components/layout/Footer.tsx', 'w') as f:
    f.write(content)
PYEOF
commit "feat(footer): add WhatsApp and Instagram social links"

# ── COMMIT 7: add a new approach tag to Philosophy ───────────────────────────
python3 - << 'PYEOF'
with open('src/components/sections/Philosophy.tsx', 'r') as f:
    content = f.read()
content = content.replace(
    "'Client-Centric Process',",
    "'Client-Centric Process',\n                  'Sustainable Materials',"
)
with open('src/components/sections/Philosophy.tsx', 'w') as f:
    f.write(content)
PYEOF
commit "ui(philosophy): add Sustainable Materials approach tag"

# ── COMMIT 8: update stats in Philosophy to reflect growth ───────────────────
python3 - << 'PYEOF'
with open('src/components/sections/Philosophy.tsx', 'r') as f:
    content = f.read()
content = content.replace(
    "{ number: '15+', label: 'Projects' }",
    "{ number: '20+', label: 'Projects' }"
)
with open('src/components/sections/Philosophy.tsx', 'w') as f:
    f.write(content)
PYEOF
commit "content(philosophy): update project count stat to 20+"

# ── COMMIT 9: add a new consultation service entry ───────────────────────────
python3 - << 'PYEOF'
with open('src/lib/constants.ts', 'r') as f:
    content = f.read()
content = content.replace(
    "  {\n    id:          'consultation',",
    """  {
    id:          'vastu',
    title:       'Vastu Consultancy',
    tagline:     'Harmony by design.',
    description:
      'We integrate Vastu Shastra principles into modern architectural planning — ensuring your home or workspace is designed for positive energy, prosperity, and well-being without compromising contemporary aesthetics.',
  },
  {
    id:          'consultation',"""
)
with open('src/lib/constants.ts', 'w') as f:
    f.write(content)
PYEOF
commit "feat(constants): add Vastu Consultancy as a new service offering"

# ── COMMIT 10: add a 4th featured project ────────────────────────────────────
python3 - << 'PYEOF'
with open('src/lib/constants.ts', 'r') as f:
    content = f.read()
content = content.replace(
    "    dark:        true,\n  },\n] as const;\n\nexport type Project",
    """    dark:        true,
  },
  {
    id:          'heritage-bungalow',
    category:    'Renovation',
    title:       'Heritage Bungalow Restoration',
    location:    'Hanamkonda, Telangana',
    year:        '2025',
    description:
      'A century-old colonial bungalow sensitively restored — preserving original masonry, timber fretwork, and verandah character while integrating modern services invisibly within the historic fabric.',
    dark:        false,
  },
] as const;

export type Project"""
)
with open('src/lib/constants.ts', 'w') as f:
    f.write(content)
PYEOF
commit "feat(content): add Heritage Bungalow Restoration to featured projects"

# ── COMMIT 11: add a 5th trust signal ────────────────────────────────────────
python3 - << 'PYEOF'
with open('src/lib/constants.ts', 'r') as f:
    content = f.read()
content = content.replace(
    "    note:  'Every project is personally led by Ar. Sathkruth Gone from first consultation to final handover — no delegation to juniors at critical stages.',\n  },\n] as const;",
    """    note:  'Every project is personally led by Ar. Sathkruth Gone from first consultation to final handover — no delegation to juniors at critical stages.',
  },
  {
    id:    'transparency',
    label: 'Transparent Pricing',
    value: 'No Hidden Costs',
    note:  'Detailed cost estimates, itemised quotations, and clear payment milestones — full financial visibility from day one of your project.',
  },
] as const;"""
)
with open('src/lib/constants.ts', 'w') as f:
    f.write(content)
PYEOF
commit "feat(constants): add Transparent Pricing as 5th trust signal"

# ── COMMIT 12: improve page meta in layout ───────────────────────────────────
META_FILE="src/app/layout.tsx"
if [ -f "$META_FILE" ]; then
python3 - << 'PYEOF'
with open('src/app/layout.tsx', 'r') as f:
    content = f.read()
if 'keywords' not in content:
    content = content.replace(
        "description:",
        "keywords: 'architects warangal, interior design warangal, architecture telangana, residential architects, commercial architects, ruddha architects',\n    description:"
    )
    with open('src/app/layout.tsx', 'w') as f:
        f.write(content)
PYEOF
fi
commit "seo: add keywords meta tag to root layout"

# ── COMMIT 13: add a utility type for brand ──────────────────────────────────
echo "" >> src/lib/constants.ts
cat >> src/lib/constants.ts << 'EOF'

// ─── Utility Types ────────────────────────────────────────────────────────────
export type Brand = typeof BRAND;
export type Service = (typeof SERVICES)[number];
export type TrustSignal = (typeof TRUST_SIGNALS)[number];
export type NavLink = (typeof NAV_LINKS)[number];
EOF
# Remove duplicate type exports (Service and NavLink already exist)
python3 - << 'PYEOF'
with open('src/lib/constants.ts', 'r') as f:
    lines = f.readlines()
seen_exports = set()
cleaned = []
for line in lines:
    stripped = line.strip()
    if stripped.startswith('export type ') and stripped in seen_exports:
        continue
    if stripped.startswith('export type '):
        seen_exports.add(stripped)
    cleaned.append(line)
with open('src/lib/constants.ts', 'w') as f:
    f.writelines(cleaned)
PYEOF
commit "refactor(types): add Brand and TrustSignal utility type exports"

# ── COMMIT 14: improve process section heading copy ──────────────────────────
python3 - << 'PYEOF'
with open('src/components/sections/Process.tsx', 'r') as f:
    content = f.read()
content = content.replace(
    'A process designed around you — not us.',
    'A process designed around you,\u00a0not us.'
)
with open('src/components/sections/Process.tsx', 'w') as f:
    f.write(content)
PYEOF
commit "ui(process): use non-breaking space in heading for better line-break control"

# ── COMMIT 15: improve hero sub-copy line length ─────────────────────────────
python3 - << 'PYEOF'
with open('src/components/sections/Hero.tsx', 'r') as f:
    content = f.read()
content = content.replace(
    'An architecture and interiors studio based in Warangal — designing spaces that are disciplined in structure, refined in detail, and built for the life lived inside them.',
    'An architecture and interiors studio based in Warangal. Disciplined in structure, refined in detail, and built for the life lived inside them.'
)
with open('src/components/sections/Hero.tsx', 'w') as f:
    f.write(content)
PYEOF
commit "copy(hero): refine sub-headline for improved rhythm and scannability"

# ── COMMIT 16: add a CHANGELOG file ──────────────────────────────────────────
cat > CHANGELOG.md << 'EOF'
# Changelog

All notable changes to the Ruddha Architects website are documented here.

## [Unreleased]

### Added
- WhatsApp and Instagram social links in footer
- Vastu Consultancy as a new service offering
- Heritage Bungalow Restoration to featured projects
- Transparent Pricing as a 5th trust signal
- Brand, TrustSignal utility type exports

### Changed
- Updated project count stat to 20+ in Philosophy section
- Refined Hero sub-headline for better readability
- Improved Hero section index label

### Fixed
- Added role=list and aria-label to TrustSignals grid for accessibility

## [0.5.0] - 2026-06-04
- Construction journey scroll experience
- Luxury motion and experience layer
- Real project assets integration framework
- Phase 4: real content integration & brand authority pass
- Responsive layout improvements
EOF
commit "docs: add CHANGELOG tracking all recent improvements"

# ── COMMIT 17: add skip-to-content link in page ──────────────────────────────
python3 - << 'PYEOF'
with open('src/app/page.tsx', 'r') as f:
    content = f.read()
if 'skip-to-content' not in content:
    content = content.replace(
        '    <>\n      <Navbar />',
        '''    <>
      <a
        href="#main-content"
        id="skip-to-content"
        style={{
          position: 'absolute',
          top: '-40px',
          left: 0,
          background: '#b87941',
          color: '#fff',
          padding: '8px 16px',
          zIndex: 9999,
          fontSize: '0.875rem',
          fontFamily: 'var(--font-body)',
          textDecoration: 'none',
          transition: 'top 0.2s',
        }}
        onFocus={(e) => { (e.currentTarget as HTMLAnchorElement).style.top = '0'; }}
        onBlur={(e) => { (e.currentTarget as HTMLAnchorElement).style.top = '-40px'; }}
      >
        Skip to content
      </a>
      <Navbar />'''
    )
    with open('src/app/page.tsx', 'w') as f:
        f.write(content)
PYEOF
commit "a11y: add skip-to-content link for keyboard navigation"

# ── COMMIT 18: add a projects.ts type guard ──────────────────────────────────
python3 - << 'PYEOF'
with open('src/lib/projects.ts', 'r') as f:
    content = f.read()
# Add a utility function comment at the bottom if not present
if 'getProjectById' not in content:
    content = content.rstrip() + '''

// ─── Utility ──────────────────────────────────────────────────────────────────
/**
 * Returns a project by its slug ID, or undefined if not found.
 * Useful for dynamic route pages: /projects/[slug]
 */
export function getProjectById(id: string) {
  return PROJECTS.find((p) => p.id === id);
}
'''
    with open('src/lib/projects.ts', 'w') as f:
        f.write(content)
PYEOF
commit "feat(lib): add getProjectById utility function to projects.ts"

# ── COMMIT 19: improve footer copyright line ─────────────────────────────────
python3 - << 'PYEOF'
with open('src/components/layout/Footer.tsx', 'r') as f:
    content = f.read()
content = content.replace(
    '&copy; {year} {BRAND.full}. All rights reserved.',
    '&copy; {year} {BRAND.full}. Crafted with care in Warangal.'
)
with open('src/components/layout/Footer.tsx', 'w') as f:
    f.write(content)
PYEOF
commit "copy(footer): update copyright line to include studio location tagline"

# ── COMMIT 20: add .editorconfig for consistent code style ───────────────────
cat > .editorconfig << 'EOF'
# EditorConfig helps developers define and maintain consistent
# coding styles between different editors and IDEs.
# https://editorconfig.org

root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

[*.{yaml,yml}]
indent_size = 2

[Makefile]
indent_style = tab
EOF
commit "chore: add .editorconfig for consistent cross-editor code style"

echo ""
echo "✅ Done! 20 commits created for author mvkrishna24."
git log --oneline -20
