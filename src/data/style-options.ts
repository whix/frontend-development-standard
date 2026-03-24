import type {
  ColorTendency,
  ComponentCharacter,
  MotionIntensity,
  OverallStyle,
  StyleOption,
  StyleSelection
} from "../types/style";

export const overallStyleOptions: StyleOption<OverallStyle>[] = [
  { value: "minimal", label: "简约" },
  { value: "tech", label: "科技" },
  { value: "brand", label: "品牌" }
];

export const colorTendencyOptions: StyleOption<ColorTendency>[] = [
  { value: "cool", label: "冷色" },
  { value: "warm", label: "暖色" },
  { value: "high-contrast", label: "高对比" },
  { value: "low-saturation", label: "低饱和" }
];

export const componentCharacterOptions: StyleOption<ComponentCharacter>[] = [
  { value: "flat", label: "扁平" },
  { value: "card", label: "卡片化" },
  { value: "bordered", label: "边框感" }
];

export const motionIntensityOptions: StyleOption<MotionIntensity>[] = [
  { value: "none", label: "无" },
  { value: "light", label: "轻" },
  { value: "strong", label: "明显" }
];

export const defaultStyleSelection: StyleSelection = {
  overallStyle: "minimal",
  colorTendency: "cool",
  componentCharacter: "flat",
  motionIntensity: "light"
};

function getOptionLabel<T extends string>(
  options: StyleOption<T>[],
  value: T
): string {
  return options.find((option) => option.value === value)?.label ?? value;
}

export function getOverallStyleLabel(value: OverallStyle): string {
  return getOptionLabel(overallStyleOptions, value);
}

export function getColorTendencyLabel(value: ColorTendency): string {
  return getOptionLabel(colorTendencyOptions, value);
}

export function getComponentCharacterLabel(value: ComponentCharacter): string {
  return getOptionLabel(componentCharacterOptions, value);
}

export function getMotionIntensityLabel(value: MotionIntensity): string {
  return getOptionLabel(motionIntensityOptions, value);
}
