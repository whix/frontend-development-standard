import { describe, expect, it } from "vitest";
import { defaultStyleSelection } from "../data/style-options";
import { buildStyleResult } from "../lib/style-engine";

describe("style options", () => {
  it("provides defaults for all four dimensions", () => {
    expect(defaultStyleSelection).toEqual({
      overallStyle: "minimal",
      colorTendency: "cool",
      componentCharacter: "flat",
      motionIntensity: "light"
    });
  });

  it("builds semantic tokens for a tech style selection", () => {
    const result = buildStyleResult({
      overallStyle: "tech",
      colorTendency: "cool",
      componentCharacter: "card",
      motionIntensity: "light"
    });

    expect(result.selection).toEqual({
      overallStyle: "tech",
      colorTendency: "cool",
      componentCharacter: "card",
      motionIntensity: "light"
    });
    expect(result.semantic.colorPrimary).toBe("#4f8cff");
    expect(result.semantic.radiusBase).toBe(12);
    expect(result.semantic.shadowCard).toBe("0 12px 32px rgba(15, 23, 42, 0.12)");
  });
});
