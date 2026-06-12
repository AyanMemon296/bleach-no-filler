export type EntryKind = "canon" | "filler" | "recap";

export type Entry = {
  id: string;
  block: "OS" | "TYBW";
  label: string;
  startEp: number;
  endEp: number;
  episodeCount: number;
  kind: EntryKind;
  arc: string;
};

const mk = (
  block: "OS" | "TYBW",
  startEp: number,
  endEp: number,
  kind: EntryKind,
  arc: string,
  labelOverride?: string,
): Entry => ({
  id: `${block}-${startEp}-${endEp}`,
  block,
  label: labelOverride ?? (startEp === endEp ? `${startEp}` : `${startEp} to ${endEp}`),
  startEp,
  endEp,
  episodeCount: endEp - startEp + 1,
  kind,
  arc,
});

export const ORIGINAL_SERIES: Entry[] = [
  mk("OS", 1, 32, "canon", "Agent of the Shinigami Arc & Soul Society: Sneak Entry Arc"),
  mk("OS", 33, 33, "filler", "Karakura Heroes side story"),
  mk("OS", 34, 49, "canon", "Soul Society: Sneak Entry Arc & Soul Society: The Rescue Arc"),
  mk("OS", 50, 50, "filler", "Don Kanonji & Karakura Heroes rescue mission"),
  mk("OS", 51, 63, "canon", "Soul Society: The Rescue Arc Climax"),
  mk("OS", 64, 109, "filler", "The Bount Arc & Bount Assault on Soul Society Arc"),
  mk("OS", 110, 127, "canon", "Arrancar: The Arrival Arc"),
  mk("OS", 128, 137, "filler", "Stolen Hogyoku plot & standalone training episodes"),
  mk("OS", 138, 146, "canon", "Arrancar: The Hueco Mundo Sneak Entry Arc"),
  mk("OS", 147, 149, "filler", "Forest of Menos sub-arc"),
  mk("OS", 150, 167, "canon", "Arrancar: The Fierce Fight Arc"),
  mk("OS", 168, 189, "filler", "The New Captain Shūsuke Amagai Arc"),
  mk("OS", 190, 203, "canon", "Arrancar vs. Shinigami Arc"),
  mk("OS", 204, 205, "filler", "204: Kemari tournament / 205: Karakura football match"),
  mk("OS", 206, 212, "canon", "The Past Arc: Turn Back the Pendulum"),
  mk("OS", 213, 214, "filler", "Karakuraizer superhero mini-arc"),
  mk("OS", 215, 226, "canon", "Arrancar: Decisive Battle of Karakura Arc"),
  mk(
    "OS",
    227,
    229,
    "filler",
    "227: Mizuiro backstory / 228: Beach vacation / 229: Ikkaku & Yumichika mission",
  ),
  mk("OS", 230, 265, "filler", "Zanpakutō Unknown Tales Arc"),
  mk("OS", 266, 266, "recap", "Recap of previous Arrancar battles"),
  mk("OS", 267, 286, "canon", "Arrancar: Downfall Arc"),
  mk("OS", 287, 287, "filler", "Magic Lamp / Arabian Nights parody"),
  mk("OS", 288, 297, "canon", "Arrancar: Downfall Arc Continued"),
  mk(
    "OS",
    298,
    299,
    "filler",
    "298: Soul Society film festival / 299: Movie 4 Hell Verse prologue",
  ),
  mk("OS", 300, 302, "canon", "Arrancar: Downfall Arc Continued"),
  mk(
    "OS",
    303,
    305,
    "filler",
    "303: New Year special / 304: Halloween special / 305: Hisagi's hot spring",
  ),
  mk("OS", 306, 310, "canon", "Arrancar: Downfall Arc Climax"),
  mk("OS", 311, 341, "filler", "Gotei 13 Invading Army Arc"),
  mk("OS", 342, 354, "canon", "The Lost Agent Arc / Fullbring Arc"),
  mk("OS", 355, 355, "filler", "Shinigami New Year celebration"),
  mk("OS", 356, 366, "canon", "The Lost Agent Arc Climax"),
];

export const TYBW_SERIES: Entry[] = [
  mk("TYBW", 1, 13, "canon", "The Blood Warfare", "TYBW 1 to 13 (Cour 1)"),
  mk("TYBW", 14, 26, "canon", "The Separation", "TYBW 14 to 26 (Cour 2)"),
  mk("TYBW", 27, 40, "canon", "The Conflict", "TYBW 27 to 40 (Cour 3)"),
  mk("TYBW", 41, 53, "canon", "The Calamity", "TYBW 41 to 53 (Cour 4)"),
];

export const ALL_ENTRIES: Entry[] = [...ORIGINAL_SERIES, ...TYBW_SERIES];

export const MINUTES_PER_EPISODE = 24;
export const TOTAL_CANON_EPISODES = 254;
export const TOTAL_FILLER_EPISODES = 165;
export const HOURS_SAVED = 66;

export type ExtraKind = "movie" | "special" | "ova";
export type ExtraEntry = {
  id: string;
  label: string;
  title: string;
  kind: ExtraKind;
  runtime: string;
};

export const EXTRA_CONTENT: ExtraEntry[] = [
  {
    id: "M-1",
    label: "Movie 1",
    title: "Memories of Nobody (2006)",
    kind: "movie",
    runtime: "93 min",
  },
  {
    id: "M-2",
    label: "Movie 2",
    title: "The DiamondDust Rebellion (2007)",
    kind: "movie",
    runtime: "92 min",
  },
  { id: "M-3", label: "Movie 3", title: "Fade to Black (2008)", kind: "movie", runtime: "95 min" },
  { id: "M-4", label: "Movie 4", title: "Hell Verse (2010)", kind: "movie", runtime: "94 min" },
  {
    id: "S-1",
    label: "Special 1",
    title: "Memories in the Rain (2004)",
    kind: "special",
    runtime: "30 min",
  },
  {
    id: "S-2",
    label: "Special 2",
    title: "The Sealed Sword Frenzy (2006)",
    kind: "special",
    runtime: "30 min",
  },
  {
    id: "O-1",
    label: "OVA 1",
    title: "Gotei Juusan Yatai Daisakusen! (2008)",
    kind: "ova",
    runtime: "13 min",
  },
];
