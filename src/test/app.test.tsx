// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";

describe("App", () => {
  it("renders the preview surfaces", () => {
    render(<App />);

    expect(screen.getByText("Style Engine")).toBeTruthy();
    expect(screen.getByText("Components")).toBeTruthy();
    expect(screen.getByText("Page Fragments")).toBeTruthy();
    expect(screen.getByText("Primary Button")).toBeTruthy();
    expect(screen.getByText("Hero Section")).toBeTruthy();
  });
});
