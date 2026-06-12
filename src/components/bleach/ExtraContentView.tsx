import { Check } from "lucide-react";
import { EXTRA_CONTENT, type ExtraEntry } from "@/lib/bleach-data";
import type { CheckedMap } from "@/hooks/use-checked";
import { cn } from "@/lib/utils";

type Props = { checked: CheckedMap; onToggle: (id: string) => void };

function ExtraCard({
  entry,
  checked,
  onToggle,
}: {
  entry: ExtraEntry;
  checked: boolean;
  onToggle: (id: string) => void;
}) {
  const badge = entry.kind === "movie" ? "THEATRICAL MOVIE" : "SPECIAL / OVA";

  return (
    <button
      type="button"
      onClick={() => onToggle(entry.id)}
      aria-pressed={checked}
      className={cn(
        "group w-full text-left rounded-xl border border-filler/20 bg-card p-4 transition-all",
        "hover:border-filler/60 flex items-start sm:items-center gap-4",
        checked && "opacity-50",
      )}
    >
      <span
        className={cn(
          "flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-colors mt-0.5 sm:mt-0",
          checked
            ? "bg-filler border-filler text-filler-foreground"
            : "border-muted-foreground/40 bg-transparent",
        )}
        aria-hidden
      >
        {checked && <Check className="h-4 w-4" strokeWidth={3} />}
      </span>

      <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-4 justify-between">
        <div className="flex-1 min-w-0">
          <div
            className={cn(
              "font-display text-base sm:text-lg font-bold tracking-wide text-foreground",
              checked && "line-through",
            )}
          >
            <span className="text-canon">{entry.label}</span>
            <span className="mx-2 text-muted-foreground">·</span>
            <span>{entry.title}</span>
          </div>
          <div className="mt-0.5 text-sm text-muted-foreground">{entry.runtime}</div>
        </div>

        <span className="self-start sm:self-auto shrink-0 rounded-md px-2.5 py-1 text-[10px] sm:text-xs font-display font-bold tracking-wider whitespace-nowrap bg-filler text-filler-foreground">
          {badge}
        </span>
      </div>
    </button>
  );
}

export function ExtraContentView({ checked, onToggle }: Props) {
  return (
    <section className="rounded-2xl border border-filler/30 bg-card/40 p-4 sm:p-6">
      <header className="mb-4 border-b border-border pb-4">
        <h3 className="font-display text-xl sm:text-2xl font-black tracking-tight text-foreground">
          Movies &amp; Specials
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Optional theatrical films and standalone special releases. Excluded from core manga canon
          progress tracking.
        </p>
      </header>
      <div className="space-y-2.5">
        {EXTRA_CONTENT.map((e) => (
          <ExtraCard key={e.id} entry={e} checked={!!checked[e.id]} onToggle={onToggle} />
        ))}
      </div>
    </section>
  );
}
