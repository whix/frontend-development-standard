import type {
  ColorTendency,
  ComponentCharacter,
  MotionIntensity,
  OverallStyle,
  StyleSelection
} from "../types/style";

export interface SemanticStyleTokens {
  colorPrimary: string;
  radiusBase: number;
  shadowCard: string;
}

export interface PreviewLayoutVariants {
  navVariant: "compact-actions" | "utility-status" | "slogan-cta";
  heroVariant: "centered-focus" | "split-metrics" | "asymmetric-story";
  featureVariant: "balanced-grid" | "stacked-capabilities" | "alternating-story";
  formVariant: "centered-form" | "split-explainer" | "brand-pitch";
  testimonialVariant: "quote-grid" | "metrics-quotes" | "editorial-quotes";
}

export interface StyleResult {
  selection: StyleSelection;
  semantic: SemanticStyleTokens;
  previewLayout: PreviewLayoutVariants;
}

const colorPalette: Record<OverallStyle, Record<ColorTendency, string>> = {
  minimal: {
    cool: "#3b82f6",
    warm: "#f97316",
    "high-contrast": "#0f172a",
    "low-saturation": "#64748b"
  },
  tech: {
    cool: "#4f8cff",
    warm: "#fb7185",
    "high-contrast": "#38bdf8",
    "low-saturation": "#7c8aa0"
  },
  brand: {
    cool: "#2563eb",
    warm: "#ea580c",
    "high-contrast": "#111827",
    "low-saturation": "#6b7280"
  }
};

const shadowPalette: Record<ComponentCharacter, Record<MotionIntensity, string>> = {
  flat: {
    none: "none",
    light: "0 4px 12px rgba(15, 23, 42, 0.08)",
    strong: "0 8px 20px rgba(15, 23, 42, 0.12)"
  },
  card: {
    none: "0 10px 24px rgba(15, 23, 42, 0.08)",
    light: "0 12px 32px rgba(15, 23, 42, 0.12)",
    strong: "0 18px 48px rgba(15, 23, 42, 0.18)"
  },
  bordered: {
    none: "0 0 0 1px rgba(148, 163, 184, 0.28)",
    light: "0 0 0 1px rgba(148, 163, 184, 0.36)",
    strong: "0 0 0 1px rgba(148, 163, 184, 0.44)"
  }
};

const radiusPalette: Record<ComponentCharacter, number> = {
  flat: 6,
  card: 12,
  bordered: 8
};

const previewLayoutPalette: Record<OverallStyle, PreviewLayoutVariants> = {
  minimal: {
    navVariant: "compact-actions",
    heroVariant: "centered-focus",
    featureVariant: "balanced-grid",
    formVariant: "centered-form",
    testimonialVariant: "quote-grid"
  },
  tech: {
    navVariant: "utility-status",
    heroVariant: "split-metrics",
    featureVariant: "stacked-capabilities",
    formVariant: "split-explainer",
    testimonialVariant: "metrics-quotes"
  },
  brand: {
    navVariant: "slogan-cta",
    heroVariant: "asymmetric-story",
    featureVariant: "alternating-story",
    formVariant: "brand-pitch",
    testimonialVariant: "editorial-quotes"
  }
};

export function buildStyleResult(selection: StyleSelection): StyleResult {
  return {
    selection: { ...selection },
    semantic: {
      colorPrimary: colorPalette[selection.overallStyle][selection.colorTendency],
      radiusBase: radiusPalette[selection.componentCharacter],
      shadowCard: shadowPalette[selection.componentCharacter][selection.motionIntensity]
    },
    previewLayout: previewLayoutPalette[selection.overallStyle]
  };
}
