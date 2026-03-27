import { describe, expect, it } from "vitest";
import { buildStylePrompt } from "../lib/prompt-generator";
import { buildTailwindHelpers } from "../lib/tailwind-helpers";

describe("buildStylePrompt", () => {
  it("exports a structured prompt with layout-aware sections", () => {
    const prompt = buildStylePrompt({
      overallStyle: "tech",
      colorTendency: "cool",
      componentCharacter: "card",
      motionIntensity: "light"
    });

    expect(prompt).toContain("## 整体风格目标");
    expect(prompt).toContain("## 页面布局骨架");
    expect(prompt).toContain("## 视觉约束");
    expect(prompt).toContain("## 片段级布局要求");
    expect(prompt).toContain("Hero 使用左右双栏，左侧标题和按钮，右侧指标面板。");
    expect(prompt).toContain("使用 React + Ant Design 组件。");
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
