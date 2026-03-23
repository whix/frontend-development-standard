import { describe, expect, it } from "vitest";

describe("bootstrap smoke test", () => {
  it("runs in a jsdom test environment", () => {
    expect(document.body).toBeTruthy();
    expect(window).toBeTruthy();
    expect(1 + 1).toBe(2);
  });
});
