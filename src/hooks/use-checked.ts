import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "bleach-tracker-v1";

export type CheckedMap = Record<string, boolean>;

export function useChecked() {
  const [checked, setChecked] = useState<CheckedMap>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setChecked(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
    } catch {}
  }, [checked, hydrated]);

  const toggle = useCallback((id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const reset = useCallback(() => {
    setChecked({});
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  }, []);

  return { checked, toggle, reset, hydrated };
}
