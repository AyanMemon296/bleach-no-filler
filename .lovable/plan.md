## Bleach Ultimate No-Filler Watch Guide & Interactive Tracker

A single-page TanStack Start app at `/` with a cinematic TYBW-inspired dark theme: deep charcoal background, sharp white type, neon electric blue for WATCH/canon elements, muted deep crimson for SKIP/filler elements.

### Layout (top → bottom)

1. **Header** — Title "Bleach Ultimate No-Filler Watch Guide" + subtitle.
2. **Hero Analytics Dashboard**
   - Large hero metric card: **"66 Hours Saved by Skipping Filler"** with supporting line ("Skip 165 filler episodes • Cut ~45% off the original run").
   - Progress card with:
     - Percentage complete (canon episodes checked / 254)
     - "X / 254 Total Canon Episodes" counter
     - Live remaining watch time in hours (remaining canon × 24 min, formatted to 1 decimal)
     - Animated neon-blue progress bar
     - "Reset Progress" button (with confirm)
3. **View Toggle Tabs** (shadcn Tabs)
   - **Tab 1 — Chronological Timeline:** two stacked section containers
     - "Original Series: 1 to 366" — full ordered list of all WATCH + SKIP entries from Block A
     - "Thousand-Year Blood War: 1 to 53" — all 4 TYBW cours
   - **Tab 2 — Split Category:** two stacked lists
     - "Manga Canon Episodes" — all WATCH entries from Block A + Block B merged
     - "Filler Episodes to Skip" — all SKIP entries (reference list; checkboxes still functional but excluded from canon progress math)
4. **Footer** — short data note (24 min/ep runtime basis, totals).

### Episode Card Component

- Full-width card, clickable surface toggles its checkbox.
- Left: native checkbox (styled).
- Center: range label ("110 to 127") + arc description.
- Right: bold badge — **WATCH – CANON** (neon blue bg) or **SKIP – FILLER** (deep crimson bg). Recap entry (266) uses SKIP – RECAP variant of crimson.
- Checked state: reduce opacity to ~0.5, strikethrough title.

### Data Engine

Single typed dataset in `src/lib/bleach-data.ts`:

```ts
type Entry = {
  id: string; // stable key e.g. "OS-110-127" or "TYBW-1-13"
  block: "OS" | "TYBW";
  label: string; // "110 to 127" or "TYBW 1 to 13 (Cour 1)"
  startEp: number;
  endEp: number;
  episodeCount: number; // endEp - startEp + 1
  kind: "canon" | "filler" | "recap";
  arc: string; // description
};
```

All 31 Block A entries + 4 TYBW entries hardcoded exactly per spec. Order in array = chronological order (used for Tab 1).

### Progress Math

- Canon entries only count toward the 254 total.
- Checked canon episodes = sum of `episodeCount` for checked canon entries.
- Percent = checkedCanonEps / 254.
- Remaining hours = (254 − checkedCanonEps) × 24 / 60.
- Filler checks are tracked (for reset + visual state) but do not affect dashboard numbers.

### State & Persistence

- `useChecked()` hook: `Record<entryId, boolean>` in React state, hydrated from `localStorage["bleach-tracker-v1"]` on mount, persisted on every change. SSR-safe (read inside `useEffect`).
- Reset clears the key and state.

### Theme (src/styles.css)

Add semantic tokens (oklch):

- `--background`: deep charcoal (~oklch(0.16 0.01 260))
- `--foreground`: near-white
- `--card`: slightly elevated charcoal
- `--canon` / `--canon-foreground`: neon electric blue
- `--filler` / `--filler-foreground`: muted deep crimson
- `--canon-glow`: blue shadow for hero accents
- Display font: load Orbitron (display) + Inter (body) via `<link>` in `__root.tsx`; register in `@theme` as `--font-display` / `--font-sans`.

### Files to create / edit

- **edit** `src/styles.css` — add tokens + font registration
- **edit** `src/routes/__root.tsx` — Google Fonts `<link>` for Orbitron + Inter; update title/meta to Bleach guide
- **edit** `src/routes/index.tsx` — page composition + SEO head
- **new** `src/lib/bleach-data.ts` — dataset + derived totals
- **new** `src/hooks/use-checked.ts` — localStorage-backed checked map
- **new** `src/components/bleach/HeroMetric.tsx`
- **new** `src/components/bleach/ProgressDashboard.tsx`
- **new** `src/components/bleach/EpisodeCard.tsx`
- **new** `src/components/bleach/ChronologicalView.tsx`
- **new** `src/components/bleach/SplitCategoryView.tsx`

### Verification

- Confirm hardcoded canon episode count sums to 254 and filler to 165 before shipping.
- Manual check: toggle entries across views, refresh page, confirm persistence; reset clears.
- Responsive at 390px (mobile-first) and ≥1024px (cards expand, dashboard widens).
