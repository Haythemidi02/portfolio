---
name: Obsidian Kinetic
colors:
  surface: '#10131a'
  surface-dim: '#10131a'
  surface-bright: '#363941'
  surface-container-lowest: '#0b0e15'
  surface-container-low: '#191b23'
  surface-container: '#1d1f27'
  surface-container-high: '#272a32'
  surface-container-highest: '#32353d'
  on-surface: '#e1e2ec'
  on-surface-variant: '#bec8d2'
  inverse-surface: '#e1e2ec'
  inverse-on-surface: '#2d3038'
  outline: '#88929b'
  outline-variant: '#3e4850'
  surface-tint: '#89ceff'
  primary: '#89ceff'
  on-primary: '#00344d'
  primary-container: '#0ea5e9'
  on-primary-container: '#003751'
  inverse-primary: '#006591'
  secondary: '#c0c1ff'
  on-secondary: '#1000a9'
  secondary-container: '#3131c0'
  on-secondary-container: '#b0b2ff'
  tertiary: '#4edea3'
  on-tertiary: '#003824'
  tertiary-container: '#00b17b'
  on-tertiary-container: '#003b26'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c9e6ff'
  primary-fixed-dim: '#89ceff'
  on-primary-fixed: '#001e2f'
  on-primary-fixed-variant: '#004c6e'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#10131a'
  on-background: '#e1e2ec'
  surface-variant: '#32353d'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  code-block:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  tech-badge:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
  metric-stat:
    fontFamily: JetBrains Mono
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 12px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
The design system articulates an aura of high-caliber software engineering, systems design rigor, and editorial clarity. Developed for an aspiring staff-level engineer presenting as an exceptional student or new graduate, this system discards juvenile "hackathon flashy" tropes in favor of restrained, instrument-grade computing aesthetics.

The visual style merges **technical precision** with **subtle glassmorphic depth**:
- **Tone:** Authoritative, architectural, hyper-competent, calm, and performant.
- **Visual Tenets:** Razor-sharp typographic hierarchy, monospaced metadata density, micro-border delineations, translucent obsidian containers, and purposeful glowing semantic indicators that signal runtime metrics, system statuses, and operational latency.
- **Emotional Response:** Inspires instant hiring confidence, technical credibility, and aesthetic respect from engineering leaders, staff architects, and tier-1 recruiters.

## Colors
The color architecture relies on an obsidian substrate punctuated by high-clarity spectral luminescence. Color is treated strictly as an information instrument, never as decorative wash.

### Color Distribution & Roles
- **Canvas Base (`#0A0D14`):** Deep obsidian-slate base representing terminal and IDE foundations.
- **Layer 1 Surface (`#0F172A` / `rgba(15, 23, 42, 0.65)`):** Translucent card and surface baseline with backdrop blur.
- **Layer 2 Raised Surface (`#1E293B` / `rgba(30, 41, 59, 0.60)`):** Interactive modules, deep-dive code containers, and active tabs.
- **Primary Beam (`#0EA5E9` transitioning to `#00F2FE`):** Electric Cyan; indicates primary interaction pathways, hyperlinked commits, and interactive node linkages.
- **Secondary Accent (`#6366F1`):** Refined Violet; reserved for system architecture demarcations, distributed consensus highlights, and AI/ML pipeline abstractions.
- **Tertiary System Pulse (`#10B981`):** Precision Emerald; dedicated to operational metrics, availability badges (e.g., active internship candidacy), low p99 latencies, and git status verifications.
- **High-Contrast Text Hierarchy:**
  - `Primary Text` (`#F8FAFC`): 100% white-slate for absolute headline and metric clarity.
  - `Secondary Text` (`#94A3B8`): Desaturated slate for narrative prose, specs, and descriptions.
  - `Tertiary Text` (`#64748B`): Muted slate for peripheral logs, labels, timestamps, and line numbers.
- **Hairline Grid & Strokes (`rgba(255, 255, 255, 0.08)`):** 1px structural boundaries isolating technical blocks without visual bulk.

## Typography
Typography creates a stark dichotomy between human editorial reasoning and machine-level execution:
- **Primary Interface (`Plus Jakarta Sans`):** Clean, geometric sans-serif tuned with subtle humanized quirks that offset rigid technical structures. Applied to headers, editorial abstracts, rationale narratives, and systemic retrospectives.
- **System Monospace (`JetBrains Mono`):** Precision monospace applied to all technical telemetry, commit hashes, code blocks, parameter values, runtime measurements, and interface metadata chips.
- **Micro Typography Rules:** Always uppercase and apply tracked letter-spacing to `label-mono` and `tech-badge` elements to enforce a hardware console cadence.

## Layout & Spacing
The layout follows a 12-column dynamic fluid grid architecture bound by a strict 1280px max-width container, grounded against an engineering grid coordinate background.

### Layout Mechanics
- **Grid Architecture:** 12 columns on desktop (`>= 1024px`), 8 columns on tablet (`>= 768px`), and 4 columns on mobile (`< 768px`).
- **Background Engineering Grid:** A persistent 24px × 24px subtle coordinate grid pattern (`rgba(255, 255, 255, 0.02)`) rendered over `#0A0D14` with a radial opacity falloff toward screen edges.
- **Component Density:** Strict 4px base rhythm. Code blocks, metrics strips, and architectural deep-dives optimize spatial density without compromising legibility.
- **Section Breaks:** Generous `space-xl` (40px) to `margin` (48px) separating projects to provide breathing room between complex architectural diagrams.

## Elevation & Depth
Elevation is achieved using ambient glassmorphism and luminous hairline boundaries instead of muddy drop shadows.

### Atmospheric Hierarchy
1. **Level 0 (Canvas Base):** Solid `#0A0D14` with faint SVG micro-grid. No blur.
2. **Level 1 (Structural Cards & Terminal Panes):** Surface `rgba(15, 23, 42, 0.65)` layered with `backdrop-filter: blur(12px)` and bordered by a crisp `1px solid rgba(255, 255, 255, 0.08)`.
3. **Level 2 (Active Modules & Hover Targets):** Surface `rgba(30, 41, 59, 0.75)` with `backdrop-filter: blur(16px)` and illuminated borders (`rgba(14, 165, 239, 0.35)` or `rgba(99, 102, 241, 0.35)`).
4. **Level 3 (Modals & Terminal Drawers):** High-opacity obsidian `rgba(10, 13, 20, 0.90)` backed by `backdrop-filter: blur(24px)` and framed with `1px solid rgba(255, 255, 255, 0.15)`.

### Photonic Glow Accents
Interactive cards project a soft, zero-distance radial back-glow upon cursor hover: `box-shadow: 0 0 35px -5px rgba(14, 165, 239, 0.15)`. Active statuses apply a pulsed radial halo: `box-shadow: 0 0 12px rgba(16, 185, 129, 0.4)`.

## Shapes
To reinforce an instrument-grade workstation look, geometric curvature is strictly kept to **Soft (`roundedness: 1`)**:
- Standard components (buttons, cards, inputs, terminal windows) utilize `0.375rem` (6px) or `0.5rem` (8px).
- Internal micro-elements (badges, metric tags, pill indicators) use `0.25rem` (4px).
- Status indicators remain strict geometric circles or 1px hairline horizontal rails. Full pill-shaped rounding is strictly restricted to active status availability pills to emulate hardware pill lamps.

## Components

### 1. Interactive Project Deep-Dive Cards
- **Structure:** Level 1 glassmorphic panel framed with `1px solid rgba(255,255,255,0.08)`. Features an integrated card header with macOS/terminal mock window controls (`red`, `yellow`, `green` micro dots at 8px).
- **Metric Strip:** Displays benchmark outcomes (e.g., `p99: 14ms`, `Throughput: 120k req/s`, `Mem: 14.2MB`) in high-contrast JetBrains Mono with electric cyan labels.
- **Hover Behavior:** 1px border shifts smoothly to `rgba(14, 165, 239, 0.30)`, with subtle +2px elevation and 12-bit neon ambient bleed.

### 2. Candidacy & Status Chips
- **Seeking Roles Chip:** Floating pill (`rounded-full`) composed of `rgba(16, 185, 129, 0.08)` fill and `1px solid rgba(16, 185, 129, 0.3)` stroke.
- **Indicator:** An active breathing emerald LED dot with continuous CSS-based keyframe scale/glow animation (`#10B981`), followed by `Seeking Summer 2025 SWE & ML Internships / New Grad Roles` in `label-mono`.

### 3. Deep-Dive Tabbed Panels
- **Tabs:** `Architecture`, `Trade-offs`, `Benchmarks & Metrics`, `Source & Diffs`.
- **States:** Inactive tabs are borderless with `rgba(148, 163, 184, 0.7)` text. Active tab holds a subtle highlight of `rgba(255, 255, 255, 0.06)`, a bottom indicator line in Cyan `#0EA5E9`, and high-contrast text (`#F8FAFC`).

### 4. Interactive Architecture Flow Nodes
- **Node Boxes:** Dark obsidian tiles (`#0F172A`) containing service names and protocol tags (`gRPC`, `Kafka`, `Redis Cluster`) in `tech-badge` styling.
- **Connectors:** 1px vector lines with `rgba(255, 255, 255, 0.15)` stroke that illuminate to `#00F2FE` on hover, simulating directional packet flow.

### 5. Buttons & Triggers
- **Primary:** High-density electric cyan gradient (`linear-gradient(135deg, #0EA5E9, #0284C7)`), `#FFFFFF` text, bold weight, and a subtle glowing outer border.
- **Secondary / Ghost:** Glassmorphic background (`rgba(255, 255, 255, 0.03)`), `1px solid rgba(255, 255, 255, 0.12)`, text in `#F8FAFC`.
- **Focus Rings:** Accessible, dual-ring outline: `2px solid #00F2FE` offset by `2px` of background obsidian `#0A0D14`.

### 6. Terminal Console & Code Blocks
- **Header:** Git commit hash (e.g., `commit 4f9b2d8`), active branch (`main`), and language runtime badge (`Rust 1.78`).
- **Body:** JetBrains Mono syntax highlighted code with a dark gutter column for line numbers (`#64748B`) and zero layout shift on copy actions.