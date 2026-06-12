import { ORIGINAL_SERIES, TYBW_SERIES, type Entry } from "@/lib/bleach-data";
import { EpisodeCard } from "./EpisodeCard";
import { EraBanner } from "./EraBanner";
import type { CheckedMap } from "@/hooks/use-checked";
import bannerOriginal from "@/assets/Bleach-Classic.jpg";
import bannerTybw from "@/assets/Bleach-TYBW.jpg";

type Props = { checked: CheckedMap; onToggle: (id: string) => void };

function Section({
  title,
  subtitle,
  entries,
  checked,
  onToggle,
  banner,
}: {
  title: string;
  subtitle: string;
  entries: Entry[];
  checked: CheckedMap;
  onToggle: (id: string) => void;
  banner: { src: string; alt: string };
}) {
  return (
    <section className="rounded-2xl border border-border bg-card/40 p-4 sm:p-6">
      <EraBanner src={banner.src} alt={banner.alt} />
      <header className="mb-4 border-b border-border pb-4">
        <h3 className="font-display text-xl sm:text-2xl font-black tracking-tight text-foreground">
          {title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      </header>
      <div className="space-y-2.5">
        {entries.map((e) => (
          <EpisodeCard key={e.id} entry={e} checked={!!checked[e.id]} onToggle={onToggle} />
        ))}
      </div>
    </section>
  );
}

export function ChronologicalView({ checked, onToggle }: Props) {
  return (
    <div className="space-y-6">
      <Section
        title="Original Series: 1 to 366"
        subtitle="Full chronological order — watch and skip entries interleaved."
        entries={ORIGINAL_SERIES}
        checked={checked}
        onToggle={onToggle}
        banner={{ src: bannerOriginal, alt: "Classic Bleach 2000s era — Original Series" }}
      />
      <Section
        title="Thousand-Year Blood War: 1 to 53"
        subtitle="100% canon — four cours, no filler."
        entries={TYBW_SERIES}
        checked={checked}
        onToggle={onToggle}
        banner={{ src: bannerTybw, alt: "Bleach Thousand-Year Blood War 2022 era" }}
      />
    </div>
  );
}
