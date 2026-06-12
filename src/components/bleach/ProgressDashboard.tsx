import { RotateCcw, Zap, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ALL_ENTRIES,
  HOURS_SAVED,
  MINUTES_PER_EPISODE,
  TOTAL_CANON_EPISODES,
  TOTAL_FILLER_EPISODES,
} from "@/lib/bleach-data";
import type { CheckedMap } from "@/hooks/use-checked";

type Props = {
  checked: CheckedMap;
  onReset: () => void;
};

export function ProgressDashboard({ checked, onReset }: Props) {
  const checkedCanonEps = ALL_ENTRIES.filter((e) => e.kind === "canon" && checked[e.id]).reduce(
    (acc, e) => acc + e.episodeCount,
    0,
  );
  const percent = Math.round((checkedCanonEps / TOTAL_CANON_EPISODES) * 1000) / 10;
  const remainingHours = ((TOTAL_CANON_EPISODES - checkedCanonEps) * MINUTES_PER_EPISODE) / 60;

  return (
    <section className="space-y-4">
      {/* Hero metric */}
      <div className="relative overflow-hidden rounded-2xl border border-canon/30 bg-card p-6 sm:p-8">
        <div
          aria-hidden
          className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-canon/20 blur-3xl"
        />
        <div className="relative">
          <div className="flex items-center gap-2 text-canon">
            <Zap className="h-4 w-4" />
            <span className="text-xs font-display font-bold tracking-[0.2em] uppercase">
              Time Saved
            </span>
          </div>
          <h2 className="mt-3 font-display text-5xl sm:text-7xl font-black tracking-tight text-foreground">
            {HOURS_SAVED}
            <span className="text-canon"> Hours</span>
          </h2>
          <p className="mt-2 text-base sm:text-lg text-foreground/80 font-medium">
            Saved by Skipping Filler
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Skip {TOTAL_FILLER_EPISODES} filler episodes — cut roughly 45% off the original run.
          </p>
        </div>
      </div>

      {/* Progress card */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <TrendingUp className="h-4 w-4" />
              <span className="text-xs font-display font-bold tracking-[0.2em] uppercase">
                Your Progress
              </span>
            </div>
            <div className="mt-2 font-display text-4xl sm:text-5xl font-black text-foreground">
              {percent.toFixed(1)}
              <span className="text-canon">%</span>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              if (confirm("Reset all progress?")) onReset();
            }}
            className="gap-2"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset
          </Button>
        </div>

        <div className="mt-5 h-3 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-canon transition-all duration-500 shadow-[0_0_20px_var(--canon-glow)]"
            style={{ width: `${Math.min(100, percent)}%` }}
          />
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">
              Canon Episodes
            </div>
            <div className="mt-1 font-display text-2xl font-bold text-foreground">
              {checkedCanonEps}
              <span className="text-muted-foreground"> / {TOTAL_CANON_EPISODES}</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground">
              <Clock className="h-3 w-3" />
              Remaining
            </div>
            <div className="mt-1 font-display text-2xl font-bold text-foreground">
              {remainingHours.toFixed(1)}
              <span className="text-muted-foreground text-base"> hrs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
