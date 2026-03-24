export type OverallStyle = "minimal" | "tech" | "brand";
export type ColorTendency = "cool" | "warm" | "high-contrast" | "low-saturation";
export type ComponentCharacter = "flat" | "card" | "bordered";
export type MotionIntensity = "none" | "light" | "strong";

export interface StyleSelection {
  overallStyle: OverallStyle;
  colorTendency: ColorTendency;
  componentCharacter: ComponentCharacter;
  motionIntensity: MotionIntensity;
}

export interface StyleOption<T extends string> {
  value: T;
  label: string;
}
