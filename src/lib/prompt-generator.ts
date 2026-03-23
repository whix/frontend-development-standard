import type { StyleSelection } from "../types/style";

export function buildStylePrompt(selection: StyleSelection): string {
  return [
    `Visual direction: ${selection.overallStyle}.`,
    `Color tendency: ${selection.colorTendency}.`,
    `Component character: ${selection.componentCharacter}.`,
    `Motion intensity: ${selection.motionIntensity}.`,
    "Use React and Ant Design components.",
    "Keep the result cohesive, restrained, and consistent with the chosen direction."
  ].join(" ");
}
