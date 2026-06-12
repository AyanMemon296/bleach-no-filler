import aizen from "@/assets/Aizen.jpg";

export function AizenPlanCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8 h-full flex flex-col">
      <div className="flex items-center gap-2 text-canon">
        <span className="h-1.5 w-1.5 rounded-full bg-canon shadow-[0_0_8px_var(--canon-glow)]" />
        <span className="text-xs font-display font-bold tracking-[0.2em] uppercase">
          The Ultimate Skip Plan
        </span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        Engineered precision — every filler arc accounted for.
      </p>

      <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-xl border border-border bg-gradient-to-br from-secondary via-card to-background">
        <img
          src={aizen}
          alt="Sosuke Aizen — All according to plan"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
    </div>
  );
}
