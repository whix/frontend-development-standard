// @vitest-environment jsdom

import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";

describe("App", () => {
  it("renders the preview and export surfaces", async () => {
    render(<App />);

    expect(screen.getByText("Style Engine")).toBeTruthy();
    expect(screen.getByLabelText("Studio workspace")).toBeTruthy();
    expect(screen.getByText("Overall Style")).toBeTruthy();
    expect(screen.getByRole("tab", { name: "Components" })).toBeTruthy();
    expect(screen.getByRole("tab", { name: "Page Fragments" })).toBeTruthy();
    const antdThemeTab = screen.getByRole("tab", { name: "Ant Design Theme" });
    const aiPromptTab = screen.getByRole("tab", { name: "AI Prompt" });
    const tailwindHelpersTab = screen.getByRole("tab", { name: "Tailwind Helpers" });

    expect(antdThemeTab).toBeTruthy();
    expect(aiPromptTab).toBeTruthy();
    expect(tailwindHelpersTab).toBeTruthy();
    expect(antdThemeTab.getAttribute("aria-selected")).toBe("true");
    expect(aiPromptTab.getAttribute("aria-selected")).toBe("false");
    expect(tailwindHelpersTab.getAttribute("aria-selected")).toBe("false");
    expect(screen.getByText(/"borderRadius": 6/)).toBeTruthy();
    expect(screen.getByText("Primary Button")).toBeTruthy();
    expect(screen.getByText("Hero Section")).toBeTruthy();

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
  });
});
