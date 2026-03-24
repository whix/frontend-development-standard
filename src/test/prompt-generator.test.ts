import { describe, expect, it } from "vitest";
import { buildStylePrompt } from "../lib/prompt-generator";
import { buildTailwindHelpers } from "../lib/tailwind-helpers";

describe("buildStylePrompt", () => {
  it("describes the chosen visual direction", () => {
    const prompt = buildStylePrompt({
      overallStyle: "tech",
      colorTendency: "cool",
      componentCharacter: "card",
      motionIntensity: "light"
    });

    expect(prompt).toBe(
      "Visual direction: tech. Color tendency: cool. Component character: card. Motion intensity: light. Use React and Ant Design components. Keep the result cohesive, restrained, and consistent with the chosen direction."
    );
  });
});

describe("buildTailwindHelpers", () => {
  it("returns compact layout helper classes", () => {
    const helpers = buildTailwindHelpers({
      overallStyle: "minimal",
      colorTendency: "low-saturation",
      componentCharacter: "bordered",
      motionIntensity: "none"
    });

    expect(helpers).toEqual({
      container: "mx-auto max-w-5xl px-6 py-8",
      panel: "rounded-xl border-2 border-slate-300 bg-white",
      stack: "flex flex-col gap-4"
    });
  });
});
