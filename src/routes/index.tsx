import { createFileRoute } from "@tanstack/react-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useChecked } from "@/hooks/use-checked";
import { ProgressDashboard } from "@/components/bleach/ProgressDashboard";
import { ChronologicalView } from "@/components/bleach/ChronologicalView";
import { SplitCategoryView } from "@/components/bleach/SplitCategoryView";
import { AizenPlanCard } from "@/components/bleach/AizenPlanCard";
import { ExtraContentView } from "@/components/bleach/ExtraContentView";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bleach No-Filler Watch Guide & Interactive Tracker" },
      {
        name: "description",
        content:
          "Track the 254 canon Bleach episodes through Thousand-Year Blood War. Skip 165 fillers and save 66 hours with an interactive checklist.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { checked, toggle, reset } = useChecked();

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
        <header className="mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-canon/40 bg-canon/10 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-canon shadow-[0_0_8px_var(--canon-glow)]" />
            <span className="text-[10px] font-display font-bold tracking-[0.25em] uppercase text-canon">
              Manga Canon Edition
            </span>
          </div>
          <h1 className="mt-4 font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground">
            Bleach Ultimate
            <br />
            <span className="text-canon">No-Filler</span> Watch Guide
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-muted-foreground">
            An interactive tracker for the complete manga-canon run — Original Series through
            Thousand-Year Blood War. Your progress is saved automatically.
          </p>
        </header>

        <div className="grid gap-4 lg:grid-cols-2">
          <ProgressDashboard checked={checked} onReset={reset} />
          <AizenPlanCard />
        </div>

        <div className="mt-10">
          <Tabs defaultValue="chronological" className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-card border border-border">
              <TabsTrigger
                value="chronological"
                className="py-2 sm:py-1.5 font-display font-bold text-[10px] xs:text-xs sm:text-sm tracking-wide data-[state=active]:bg-canon data-[state=active]:text-canon-foreground"
              >
                <span className="hidden sm:inline">Chronological</span>
                <span className="inline sm:hidden">Chrono</span>
              </TabsTrigger>
              <TabsTrigger
                value="split"
                className="py-2 sm:py-1.5 font-display font-bold text-[10px] xs:text-xs sm:text-sm tracking-wide data-[state=active]:bg-canon data-[state=active]:text-canon-foreground"
              >
                <span className="hidden sm:inline">Split by Category</span>
                <span className="inline sm:hidden">Split</span>
              </TabsTrigger>
              <TabsTrigger
                value="extras"
                className="py-2 sm:py-1.5 font-display font-bold text-[10px] xs:text-xs sm:text-sm tracking-wide data-[state=active]:bg-filler data-[state=active]:text-filler-foreground"
              >
                <span className="hidden sm:inline">Movies &amp; Specials</span>
                <span className="inline sm:hidden">Extras</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="chronological" className="mt-6">
              <ChronologicalView checked={checked} onToggle={toggle} />
            </TabsContent>
            <TabsContent value="split" className="mt-6">
              <SplitCategoryView checked={checked} onToggle={toggle} />
            </TabsContent>
            <TabsContent value="extras" className="mt-6">
              <ExtraContentView checked={checked} onToggle={toggle} />
            </TabsContent>
          </Tabs>
        </div>

        <footer className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground space-y-1">
          <p>
            Calculations based on 24 min / episode. 419 total franchise episodes — 254 canon (101.6
            hrs), 165 filler (66 hrs saved).
          </p>
          <p>Progress stored locally in your browser. Reset anytime from the dashboard above.</p>
        </footer>
      </div>
    </main>
  );
}
