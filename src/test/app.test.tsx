// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";

describe("App", () => {
  it("renders the studio title", () => {
    render(<App />);

    expect(screen.getByText("Style Engine")).toBeTruthy();
    expect(screen.getByText("Overall Style")).toBeTruthy();
    expect(screen.getByText("Preview")).toBeTruthy();
  });
});
