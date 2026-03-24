import type {
  ColorTendency,
  ComponentCharacter,
  MotionIntensity,
  OverallStyle,
  StyleOption,
  StyleSelection
} from "../types/style";

export const overallStyleOptions: StyleOption<OverallStyle>[] = [
  { value: "minimal", label: "Minimal" },
  { value: "tech", label: "Tech" },
  { value: "brand", label: "Brand" }
];

export const colorTendencyOptions: StyleOption<ColorTendency>[] = [
  { value: "cool", label: "Cool" },
  { value: "warm", label: "Warm" },
  { value: "high-contrast", label: "High Contrast" },
  { value: "low-saturation", label: "Low Saturation" }
];

export const componentCharacterOptions: StyleOption<ComponentCharacter>[] = [
  { value: "flat", label: "Flat" },
  { value: "card", label: "Card" },
  { value: "bordered", label: "Bordered" }
];

export const motionIntensityOptions: StyleOption<MotionIntensity>[] = [
  { value: "none", label: "None" },
  { value: "light", label: "Light" },
  { value: "strong", label: "Strong" }
];

export const defaultStyleSelection: StyleSelection = {
  overallStyle: "minimal",
  colorTendency: "cool",
  componentCharacter: "flat",
  motionIntensity: "light"
};
