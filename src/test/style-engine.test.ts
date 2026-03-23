import { describe, expect, it } from "vitest";
import { defaultStyleSelection } from "../data/style-options";

describe("style options", () => {
  it("provides defaults for all four dimensions", () => {
    expect(defaultStyleSelection).toEqual({
      overallStyle: "minimal",
      colorTendency: "cool",
      componentCharacter: "flat",
      motionIntensity: "light"
    });
  });
});
