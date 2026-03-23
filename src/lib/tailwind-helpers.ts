import type { StyleSelection } from "../types/style";

export interface TailwindHelpers {
  container: string;
  panel: string;
  stack: string;
}

const containerClasses: Record<StyleSelection["overallStyle"], string> = {
  minimal: "mx-auto max-w-5xl px-6 py-8",
  tech: "mx-auto max-w-6xl px-6 py-8",
  brand: "mx-auto max-w-5xl px-8 py-10"
};

const panelClasses: Record<StyleSelection["componentCharacter"], string> = {
  flat: "rounded-xl border border-slate-200 bg-white",
  card: "rounded-2xl border border-slate-200 bg-white shadow-sm",
  bordered: "rounded-xl border-2 border-slate-300 bg-white"
};

const stackClasses: Record<StyleSelection["motionIntensity"], string> = {
  none: "flex flex-col gap-4",
  light: "flex flex-col gap-6",
  strong: "flex flex-col gap-8"
};

export function buildTailwindHelpers(selection: StyleSelection): TailwindHelpers {
  return {
    container: containerClasses[selection.overallStyle],
    panel: panelClasses[selection.componentCharacter],
    stack: stackClasses[selection.motionIntensity]
  };
}
