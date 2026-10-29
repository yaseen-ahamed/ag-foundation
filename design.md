# Ayurgreen Foundation — UI/UX Design System (`design.md`)
**Structural Reference:** Personalis Corporate Web Architecture (Adapted for Healthcare, Rehabilitation & Social Impact)

---

## 1. Design Philosophy & Core Adaptation Principles

This design system adapts the **Personalis** corporate healthcare interface architecture—characterised by clinical authority, generous whitespace, thin editorial hairlines, oversized typographic statements, and interactive portrait showcase cards—to **Ayurgreen Foundation**, without copying Personalis's branding, oncology copy, or lime/electric-blue palette.

### Governing Principles
1. **Clarity & Clinical Credibility**: Every page reads with the composure of an established healthcare and academic institution. Typography is spacious, claims are paired with verifiable proof, and decorative clutter is eliminated.
2. **Predictable 12-Column Grid Alignment**: Every section, hairline rule, card boundary, and split banner locks strictly to a `1280px` (`max-w-7xl`) container with aligned horizontal page margins (`px-4 sm:px-6 lg:px-8`).
3. **Progressive Information Disclosure**: Complex healthcare and rehabilitation initiatives follow a strict five-stage narrative flow:
   $$\text{1. Concept Introduction} \longrightarrow \text{2. Community Benefits} \longrightarrow \text{3. How It Works (Mechanism)} \longrightarrow \text{4. Institutional Proof} \longrightarrow \text{5. Contextual Next Action}$$
4. **60–30–10 Sovereign Brand Palette**:
   - **60% Neutral Canvas**: Crisp White (`#FFFFFF`) and Soft Clinical Alabaster (`#F7F9FA`) for maximum scanability and visual breathing room.
   - **30% Structural Surfaces & Deep Navy Typography**: Ayurgreen Deep Navy (`#102C4B`), Slate (`#536477`), Pale Ice Blue (`#EFF7FA`), and Hairline Border (`#DFE6EB`).
   - **10% High-Intent Accent Budget**: Ayurgreen Clinical Teal (`#087F83`) and Deep Teal (`#07565B`) concentrated on primary CTAs, top editorial rules, and active interactive states.

---

## 2. Layout Grid, Spacing & Container Mathematics

| Token / Breakpoint | Specification | Purpose |
| :--- | :--- | :--- |
| **Max Content Width** | `1280px` (`max-w-7xl`) | Consistent outer alignment across Header, Hero, Sections, and Footer |
| **Horizontal Page Padding** | `16px` (Mobile), `24px` (Tablet), `32px` (Desktop) | Ensures aligned left/right page margins across all viewports |
| **Grid Columns** | 12-column CSS Grid (`grid-cols-1 lg:grid-cols-12`) | Supports `6/6` splits, `7/5` asymmetric narratives, and `4/4/4` modular triads |
| **Section Vertical Rhythm** | `py-16 sm:py-20 lg:py-24` (`64px`–`96px`) | Generous vertical breathing room between distinct thematic sections |
| **Card Internal Spacing** | `p-6 sm:p-8` (`24px`–`32px`), `gap-6 lg:gap-8` | Ensures outer container padding $\ge$ internal child element gaps |
| **Corner Radii Scale** | Outer Showcase: `rounded-3xl` (`24px`) · Modular Cards: `rounded-2xl` (`16px`) · CTAs: `rounded-full` | Cohesive geometric softness matching modern clinical architecture |

---

## 3. Slim Corporate Header & Navigation Architecture

Directly inspired by the Personalis header layout (see attached reference screenshot), the top bar uses a **single-row, three-zone contract** with high visual discipline:

```
[Zone 1: Official Brand Logo] ──────── [Zone 2: Grouped Uppercase Nav + Dropdowns] ── [Zone 3: Primary CTA + Search Icon]
```

- **Height & Surface**: Slim `h-20` (`80px`) sticky bar (`bg-white/95 backdrop-blur-md border-b border-[#DFE6EB]`).
- **Zone 1 (Brand Identity)**: Official Ayurgreen Foundation logo (`h-10 lg:h-11 w-auto`), left-aligned on the outer grid line with zero cluttered sub-badges.
- **Zone 2 (Navigation Links)**:
  - Styled in crisp, tracked-out uppercase typography (`text-xs font-semibold uppercase tracking-[0.08em] text-[#102C4B]`).
  - Logical grouping: `WHO WE ARE` (`/about`), `OUR PROGRAMMES` (structured 2-column mega-dropdown), `STROKE FORCE` (`/stroke-force`), `OUR IMPACT` (`/impact`), `GET INVOLVED` (action dropdown), and `CONTACT` (`/contact`).
- **Zone 3 (Primary Action & Utility)**:
  - One prominent primary conversion action (`SUPPORT US` / `REQUEST INFO`) alongside a clean right-aligned Search trigger (`Search` icon button opening `Ctrl+K` instant site search).

---

## 4. Typography & Visual Hierarchy (Top-Rule Pattern)

Drawing from the Personalis reference screenshot—where a thin horizontal accent rule sits above an oversized, composed headline—section introductions follow a strict typographic hierarchy:

1. **Top Editorial Hairline Rule**:
   - A `72px` (`w-18` / `w-20`) horizontal rule (`h-[2px] bg-[#087F83] mb-5`) anchored to the left margin (or centred for focal introductions) to signal the start of a major thematic section.
2. **Oversized Display Headlines**:
   - **Hero Headline**: `clamp(2.5rem, 4.5vw, 3.75rem)` (`40px`–`60px`), line-height `1.08`, `text-wrap: balance`.
   - **Section Statement Headline**: `clamp(2rem, 3.5vw, 3.1rem)` (`32px`–`50px`), composed in `DM Serif Display` or light/regular editorial proportions so the scale carries authority without feeling heavy or shouted.
3. **Supporting Lead Copy**:
   - Concise 2–3 line explanation (`16px`–`18px`, `leading-relaxed`, `text-[#536477]`, `max-w-2xl`) that clarifies value immediately.
4. **Tabular Numerals**:
   - All verified impact counters, governance registrations, and timelines enforce `font-variant-numeric: tabular-nums`.

---

## 5. Signature Component: 3-Column Interactive Portrait Showcase Cards

Adapted directly from the attached Personalis screenshot (`Inform the future of cancer treatment.` + 3 tall vertical cards with bottom accent bars and full-card colour-wash reveal states):

### Visual & Structural Specification
- **Section Framing**:
  - Top horizontal accent line (`w-20 h-[2px] bg-[#087F83] mb-5`).
  - Oversized statement heading: *"Inform the future of community healthcare & rehabilitation."*
- **Grid Geometry**:
  - 3 equal-width tall portrait cards (`grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8`), aspect ratio `3:4` (`min-h-[440px] sm:min-h-[480px]`), `rounded-3xl` overflow-hidden containers.
- **Resting State (Photography-Forward)**:
  - Full-bleed documentary photography of Ayurgreen's clinical/rehabilitation work.
  - Top-right quiet category label (`text-xs font-semibold tracking-wide text-white/95`) positioned with measured contrast.
  - Bottom-left bold initiative wordmark/title (`text-2xl sm:text-3xl font-editorial text-white`) over a dark bottom luminance scrim (`bg-gradient-to-t from-[#102C4B]/85 via-[#102C4B]/25 to-transparent`).
  - **Bottom Signature Accent Bar**: A solid `10px` (`h-2.5`) colour bar along the bottom edge of each card differentiating the three flagship pillars:
    1. Card 1 (*Project Rehab Village*): Clinical Teal (`#087F83`)
    2. Card 2 (*Stroke Force — Fast Action*): Deep Navy (`#102C4B`)
    3. Card 3 (*Charity Care & Diagnostics*): Deep Teal (`#07565B`)
- **Active / Hover / Focus State (Translucent Colour-Wash Overlay)**:
  - Hovering, focusing, or tapping a card smoothly transitions a rich translucent colour wash (`bg-[#087F83]/92` or `bg-[#102C4B]/92` with subtle background photo bleed-through, exactly like the middle *"NeXT Dx"* card in the Personalis reference).
  - Reveals the initiative title at mid-height, a concise 3–4 line plain-language explanation of how the programme helps patients/communities, and a high-contrast white pill CTA button (`bg-white text-[#102C4B] px-6 py-2.5 rounded-full text-xs font-semibold`).
  - By default, the middle card (Card 2) starts in the expanded colour-wash state on initial render so visitors immediately understand the interactive affordance and see a primary contextual CTA without needing to hover first.

---

## 6. Page Rhythm & Progressive Section Architecture

To prevent repetitive "wall-of-cards" fatigue, every page alternates structural patterns deliberately:

1. **Section 1 — Split Corporate Hero**:
   - Left column (`lg:col-span-6`): Legal trust kicker, oversized headline, concise 2-sentence mission explanation, primary CTA (`Explore Our Work`), and secondary action (`Get Involved`).
   - Right column (`lg:col-span-6`): High-resolution clinical rehabilitation photography with seamless edge blending.
2. **Section 2 — Personalis-Style 3-Column Flagship Showcase**:
   - Thin top rule + oversized statement headline + 3 tall interactive portrait cards (*Project Rehab Village*, *Stroke Force*, *Charity Care*) with translucent colour-wash hover/active states and bottom signature accent bars.
3. **Section 3 — Progressive 4-Step Mechanism ("From Awareness to Dignified Recovery")**:
   - Explains complex healthcare & rehabilitation delivery progressively across 4 numbered stages (`01. Early Detection & Outreach`, `02. Clinical & Diagnostic Access`, `03. Multidisciplinary Rehabilitation`, `04. Social Reintegration & Livelihood`) with contextual links.
4. **Section 4 — Split Text-and-Evidence Institutional Overview**:
   - Asymmetric `7/5` split pairing narrative context with verifiable governance facts, vision statement, and a contextual link to Section 8 compliance.
5. **Section 5 — Modular 8-Programme Grid**:
   - Uniform card heights, aligned top imagery (`16:9` / `4:3`), consistent internal padding, unboxed category metadata (`Category · Pillar`), and bottom-aligned CTA links.
6. **Section 6 — Associated Institutions & Credible Proof**:
   - Highlights *Ayurgreen Hospitals*, *Ayurgreen Center for Research and Development (ACRD)*, and *Ayurgreen College of Life Sciences* alongside the 5-pillar Impact Strip.
7. **Section 7 — Impact Stories, News & Contextual Conversion**:
   - Asymmetric `7/5` lead story + supporting case studies, followed by the high-contrast Donation & Volunteer conversion banner and a comprehensive 4-column institutional sitemap footer.

---

## 7. Interaction, Accessibility & Responsiveness Standards

- **Motion & Settling Budget**: Hover transitions on cards, overlays, and dropdown menus use `150ms–200ms` compositor-safe transitions (`opacity`, `transform`) with full `prefers-reduced-motion: reduce` compliance.
- **WCAG AA Contrast & Focus Visibility**:
  - Text on light surfaces uses `#102C4B` ($>12:1$ contrast) and `#536477` ($>5.5:1$ contrast).
  - Every interactive link, button, and card has an explicit `:focus-visible` outline (`outline-2 outline-offset-4 outline-[#087F83]`).
- **Mobile & Tablet Adaptability**:
  - Multi-column splits stack cleanly in reading order (`grid-cols-1` on mobile, `md:grid-cols-2` on tablet, `lg:grid-cols-12` on desktop).
  - Touch targets maintain a minimum `44px × 44px` hit area, and sticky header height remains well below 15% of the mobile viewport.
