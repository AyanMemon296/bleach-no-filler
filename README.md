# ⚔️ Bleach Ultimate No-Filler Watch Guide & Tracker

An interactive, responsive, and aesthetically stunning tracking guide designed for Bleach fans to skip the fillers and follow the core manga-canon storyline. Track your progress automatically from the Original Series (2000s era) up through the Thousand-Year Blood War (TYBW).

Save **66 hours** of watch time by skipping **165 filler episodes** (approximately 45% of the original run) with an elegant checklist.

---

## ✨ Key Features

- 📊 **Dynamic Progress Dashboard**: Keep track of your exact completion percentage, total canon episodes watched, and remaining watch hours. All statistics update in real-time.
- ⚡ **Time Savings Metrics**: Visual stats demonstrating hours saved by skipping filler arcs, based on a standard 24 minutes per episode.
- ⏱️ **Local Persistence**: State is saved automatically to browser `localStorage` (via a custom hook), so your checklist progress persists across browser refreshes and sessions.
- 🗺️ **Comprehensive Watch Views (3 Tabs)**:
  - **Chronological View**: Interleaved checklist showing both the Original Series and TYBW series in release order, featuring clear visual labels.
  - **Split by Category View**: Separated panels grouping Manga Canon episodes and Filler episodes to skip side-by-side on desktop.
  - **Movies & Specials**: An optional checklist for theatrical movies, OVAs, and standalone special releases.
- 📱 **Mobile Optimized & Responsive UX**:
  - Aspect-ratio scaling (`16:9`) for all high-resolution posters to prevent cropping on any device size.
  - Responsive tab triggers (`Chrono`, `Split`, `Extras` on mobile; full titles on desktop) to prevent layouts from overlapping.
  - Responsive flex layouts for episode and movie cards that automatically stack badges below descriptions on mobile to maximize horizontal readability.

---

## 🎨 Visual Identity & Theme

The user interface uses a high-end dark glassmorphism theme styled with curated modern palettes:

- **Background**: Deep obsidian slate (`oklch(0.16 0.008 260)`)
- **Canon Color**: Radiant Quincy blue glow (`oklch(0.74 0.2 240)`)
- **Filler/Skip Color**: Crimson Hollow red (`oklch(0.48 0.18 22)`)
- **Typography**: Space-age futuristic headings using `Orbitron` coupled with clean, readable content using `Inter` sans-serif.

---

## 🛠️ Technology Stack

- **Framework**: [TanStack Start](https://tanstack.com/router/v1/docs/start/overview) (Vite + TanStack Router)
- **Library**: React 19
- **Type Safety**: TypeScript
- **Styling**: Tailwind CSS v4 + Vanilla CSS custom variables (`src/styles.css`)
- **Icons**: Lucide React
- **Bundler**: Vite

---

## 📂 Project Structure

```bash
bleach-watch-guide/
├── assets/                    # Original image source files
├── src/
│   ├── assets/                # App-bundled image assets (posters, icons)
│   │   ├── Aizen.jpg          # Clean cover visual for the skipping dashboard
│   │   ├── Bleach-Classic.jpg # Original series chronological banner
│   │   ├── Bleach-TYBW.jpg    # Thousand-Year Blood War banner
│   │   └── favicon.png        # Web app tab favicon
│   ├── components/
│   │   ├── bleach/            # Bleach-specific components
│   │   │   ├── AizenPlanCard.tsx       # "All according to plan" skip feature
│   │   │   ├── ChronologicalView.tsx    # Release order checklist
│   │   │   ├── EpisodeCard.tsx          # Interactive card for checkable items
│   │   │   ├── EraBanner.tsx            # Poster aspect-ratio wrapper
│   │   │   ├── ExtraContentView.tsx     # Movies & Specials checklist
│   │   │   ├── ProgressDashboard.tsx    # Completion dashboard and stats
│   │   │   └── SplitCategoryView.tsx    # Canon vs Filler side-by-side view
│   │   └── ui/                # Base reusable Radix-UI elements
│   ├── hooks/
│   │   └── use-checked.ts     # LocalStorage state sync hook
│   ├── lib/
│   │   ├── bleach-data.ts     # Complete Bleach episode dataset & metadata
│   │   ├── utils.ts           # Styling className mergers (clsx + tailwind-merge)
│   │   └── lovable-error-reporting.ts # SSR error handling helper
│   ├── routes/
│   │   ├── __root.tsx         # Root layout, head scripts, CSS, and favicon imports
│   │   └── index.tsx          # Main Dashboard entry point with tabs
│   ├── styles.css             # Main styling system, design system tokens
│   ├── router.tsx             # TanStack Router configuration
│   └── start.ts               # App entry point bootstrap
└── package.json               # Package configurations and scripts
```

---

## 📝 Guide Categories

Within the checklist, episodes are categorized using the following color-coded guides:

- 🔵 **WATCH — CANON**: Core manga chapters adapted to anime. Recommended watching.
- 🔴 **SKIP — FILLER**: Standalone side stories or independent anime-only filler arcs. Safe to skip.
- 🔴 **SKIP — RECAP**: Recap episodes summarizing past battles. Safe to skip.

---

_All according to plan._ 👓
