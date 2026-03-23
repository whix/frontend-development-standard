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

    expect(prompt).toContain("tech");
    expect(prompt).toContain("cool");
    expect(prompt).toContain("card");
    expect(prompt).toContain("light");
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

    expect(helpers.container).toContain("mx-auto");
    expect(helpers.panel).toContain("border");
    expect(helpers.stack).toContain("gap");
  });
});
