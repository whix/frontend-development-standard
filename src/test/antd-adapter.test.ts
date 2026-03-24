import { describe, expect, it } from "vitest";
import { toAntdTheme } from "../lib/antd-adapter";

describe("toAntdTheme", () => {
  it("maps semantic tokens to antd theme tokens", () => {
    const theme = toAntdTheme({
      colorPrimary: "#1769ff",
      radiusBase: 12
    });

    expect(theme.token.colorPrimary).toBe("#1769ff");
    expect(theme.token.borderRadius).toBe(12);
  });
});
