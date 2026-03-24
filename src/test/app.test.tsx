// @vitest-environment jsdom

import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";

describe("App", () => {
  it("updates previews and exports when the overall style changes", async () => {
    render(<App />);

    expect(screen.getByText("样式规范引擎")).toBeTruthy();
    expect(screen.getByLabelText("样式工作区")).toBeTruthy();
    expect(screen.getByText("整体风格")).toBeTruthy();
    expect(screen.getByRole("tab", { name: "组件预览" })).toBeTruthy();
    expect(screen.getByRole("tab", { name: "页面片段" })).toBeTruthy();
    const antdThemeTab = screen.getByRole("tab", { name: "Ant Design 主题" });
    const aiPromptTab = screen.getByRole("tab", { name: "AI 提示词" });
    const tailwindHelpersTab = screen.getByRole("tab", { name: "Tailwind 辅助" });

    expect(antdThemeTab).toBeTruthy();
    expect(aiPromptTab).toBeTruthy();
    expect(tailwindHelpersTab).toBeTruthy();
    expect(antdThemeTab.getAttribute("aria-selected")).toBe("true");
    expect(aiPromptTab.getAttribute("aria-selected")).toBe("false");
    expect(tailwindHelpersTab.getAttribute("aria-selected")).toBe("false");
    expect(screen.getByText(/"borderRadius": 6/)).toBeTruthy();
    expect(screen.getByText("主按钮")).toBeTruthy();
    expect(screen.getByText("首屏区块")).toBeTruthy();
    expect(screen.getByText(/整体风格预览：简约/i)).toBeTruthy();

    fireEvent.click(aiPromptTab);
    expect(antdThemeTab.getAttribute("aria-selected")).toBe("false");
    expect(aiPromptTab.getAttribute("aria-selected")).toBe("true");
    expect(
      screen.getByText(
        "Visual direction: minimal. Color tendency: cool. Component character: flat. Motion intensity: light. Use React and Ant Design components. Keep the result cohesive, restrained, and consistent with the chosen direction."
      )
    ).toBeTruthy();

    fireEvent.click(tailwindHelpersTab);
    expect(aiPromptTab.getAttribute("aria-selected")).toBe("false");
    expect(tailwindHelpersTab.getAttribute("aria-selected")).toBe("true");
    expect(screen.getByText(/"stack": "flex flex-col gap-6"/)).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: "科技" }));
    expect(screen.getByText(/整体风格预览：科技/i)).toBeTruthy();
    expect(screen.getByText(/片段气质：科技/i)).toBeTruthy();

    fireEvent.click(antdThemeTab);
    expect(screen.getByText(/"colorPrimary": "#4f8cff"/)).toBeTruthy();
    expect(screen.getByText(/"borderRadius": 6/)).toBeTruthy();

    fireEvent.click(aiPromptTab);
    expect(
      screen.getByText(
        "Visual direction: tech. Color tendency: cool. Component character: flat. Motion intensity: light. Use React and Ant Design components. Keep the result cohesive, restrained, and consistent with the chosen direction."
      )
    ).toBeTruthy();
  });
});
