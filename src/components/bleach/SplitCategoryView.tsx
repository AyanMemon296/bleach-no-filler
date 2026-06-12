import { ALL_ENTRIES } from "@/lib/bleach-data";
import { EpisodeCard } from "./EpisodeCard";
import type { CheckedMap } from "@/hooks/use-checked";

type Props = { checked: CheckedMap; onToggle: (id: string) => void };

export function SplitCategoryView({ checked, onToggle }: Props) {
  const canon = ALL_ENTRIES.filter((e) => e.kind === "canon");
  const skip = ALL_ENTRIES.filter((e) => e.kind !== "canon");

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="rounded-2xl border border-canon/30 bg-card/40 p-4 sm:p-6">
        <header className="mb-4 border-b border-border pb-4">
          <h3 className="font-display text-xl sm:text-2xl font-black tracking-tight text-foreground">
            Manga Canon Episodes
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {canon.length} ranges — your checklist for the no-filler watch.
          </p>
        </header>
        <div className="space-y-2.5">
          {canon.map((e) => (
            <EpisodeCard key={e.id} entry={e} checked={!!checked[e.id]} onToggle={onToggle} />
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-filler/30 bg-card/40 p-4 sm:p-6">
        <header className="mb-4 border-b border-border pb-4">
          <h3 className="font-display text-xl sm:text-2xl font-black tracking-tight text-foreground">
            Filler Episodes to Skip
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {skip.length} ranges — reference list. Skipping these saves 66 hours.
          </p>
        </header>
        <div className="space-y-2.5">
          {skip.map((e) => (
            <EpisodeCard key={e.id} entry={e} checked={!!checked[e.id]} onToggle={onToggle} />
          ))}
        </div>
      </section>
    </div>
  );
}
