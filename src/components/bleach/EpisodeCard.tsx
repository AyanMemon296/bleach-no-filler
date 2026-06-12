import { Check } from "lucide-react";
import type { Entry } from "@/lib/bleach-data";
import { cn } from "@/lib/utils";

type Props = {
  entry: Entry;
  checked: boolean;
  onToggle: (id: string) => void;
};

export function EpisodeCard({ entry, checked, onToggle }: Props) {
  const isCanon = entry.kind === "canon";
  const badgeLabel =
    entry.kind === "canon" ? "WATCH — CANON" : entry.kind === "recap" ? "SKIP — RECAP" : "SKIP — FILLER";

  return (
    <button
      type="button"
      onClick={() => onToggle(entry.id)}
      aria-pressed={checked}
      className={cn(
        "group w-full text-left rounded-xl border bg-card p-4 transition-all",
        "hover:border-canon/60 hover:shadow-[0_0_0_1px_var(--canon)/40,0_8px_30px_-12px_var(--canon-glow)]",
        "flex items-start sm:items-center gap-4",
        isCanon ? "border-canon/20" : "border-filler/20",
        checked && "opacity-50",
      )}
    >
      <span
        className={cn(
          "flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-colors mt-0.5 sm:mt-0",
          checked
            ? isCanon
              ? "bg-canon border-canon text-canon-foreground"
              : "bg-filler border-filler text-filler-foreground"
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
            Episode {entry.label}
          </div>
          <div className="mt-0.5 text-sm text-muted-foreground">{entry.arc}</div>
        </div>

        <span
          className={cn(
            "self-start sm:self-auto shrink-0 rounded-md px-2.5 py-1 text-[10px] sm:text-xs font-display font-bold tracking-wider whitespace-nowrap",
            isCanon
              ? "bg-canon text-canon-foreground shadow-[0_0_20px_-4px_var(--canon-glow)]"
              : "bg-filler text-filler-foreground",
          )}
        >
          {badgeLabel}
        </span>
      </div>
    </button>
  );
}
