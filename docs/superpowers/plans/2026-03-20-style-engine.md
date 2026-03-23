# Style Engine Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a v1 web-based style engine for `React + Ant Design` that lets developers choose style dimensions, preview the result, and export `Ant Design` theme config plus AI style constraints.

**Architecture:** Use a `React + TypeScript` app with a small domain core for style selections and token mapping, a preview surface driven by `Ant Design`'s theming system, and export panels that derive artifacts from the same normalized style state. Keep the style input model framework-agnostic, but implement only one output adapter for `React + Ant Design` in v1.

**Tech Stack:** `Vite`, `React`, `TypeScript`, `Ant Design`, `Vitest`, `Testing Library`, limited `Tailwind CSS` helpers

---

## File Structure

- Create: `package.json`
- Create: `tsconfig.json`
- Create: `vite.config.ts`
- Create: `index.html`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/styles.css`
- Create: `src/types/style.ts`
- Create: `src/data/style-options.ts`
- Create: `src/lib/style-engine.ts`
- Create: `src/lib/antd-adapter.ts`
- Create: `src/lib/prompt-generator.ts`
- Create: `src/lib/tailwind-helpers.ts`
- Create: `src/components/layout/studio-layout.tsx`
- Create: `src/components/config/style-controls.tsx`
- Create: `src/components/preview/component-preview.tsx`
- Create: `src/components/preview/page-fragment-preview.tsx`
- Create: `src/components/export/export-panel.tsx`
- Create: `src/components/export/code-block.tsx`
- Create: `src/components/export/export-tabs.tsx`
- Create: `src/test/style-engine.test.ts`
- Create: `src/test/antd-adapter.test.ts`
- Create: `src/test/prompt-generator.test.ts`
- Create: `src/test/app.test.tsx`

## Chunk 1: Scaffold The App Shell

### Task 1: Create project bootstrap files

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `vite.config.ts`
- Create: `index.html`

- [ ] **Step 1: Write the failing smoke test**

```tsx
import { describe, expect, it } from "vitest";

describe("project bootstrap", () => {
  it("defines a test runner", () => {
    expect(true).toBe(true);
  });
});
```

- [ ] **Step 2: Run test to verify the environment is not ready**

Run: `npm test`
Expected: FAIL because project dependencies and scripts do not exist yet

- [ ] **Step 3: Add bootstrap files and scripts**

```json
{
  "name": "style-engine",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "test": "vitest run"
  }
}
```

- [ ] **Step 4: Run install and test**

Run: `npm install && npm test`
Expected: PASS for the smoke test

- [ ] **Step 5: Commit**

```bash
git add package.json tsconfig.json vite.config.ts index.html
git commit -m "chore: scaffold style engine app"
```

### Task 2: Add React entrypoint and base app shell

**Files:**
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/styles.css`
- Test: `src/test/app.test.tsx`

- [ ] **Step 1: Write the failing app shell test**

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";

describe("App", () => {
  it("renders the studio title", () => {
    render(<App />);
    expect(screen.getByText("Style Engine")).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- src/test/app.test.tsx`
Expected: FAIL because `App` does not exist yet

- [ ] **Step 3: Implement the minimal shell**

```tsx
export default function App() {
  return <h1>Style Engine</h1>;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- src/test/app.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/main.tsx src/App.tsx src/styles.css src/test/app.test.tsx
git commit -m "feat: add base app shell"
```

## Chunk 2: Build The Style Domain Core

### Task 3: Define style types and option metadata

**Files:**
- Create: `src/types/style.ts`
- Create: `src/data/style-options.ts`
- Test: `src/test/style-engine.test.ts`

- [ ] **Step 1: Write the failing domain test**

```ts
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- src/test/style-engine.test.ts`
Expected: FAIL because style metadata is missing

- [ ] **Step 3: Implement types and default options**

```ts
export type OverallStyle = "minimal" | "tech" | "brand";
export type ColorTendency = "cool" | "warm" | "high-contrast" | "low-saturation";
export type ComponentCharacter = "flat" | "card" | "bordered";
export type MotionIntensity = "none" | "light" | "strong";
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- src/test/style-engine.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/types/style.ts src/data/style-options.ts src/test/style-engine.test.ts
git commit -m "feat: define style configuration model"
```

### Task 4: Implement the semantic style mapping engine

**Files:**
- Create: `src/lib/style-engine.ts`
- Modify: `src/test/style-engine.test.ts`

- [ ] **Step 1: Write failing token generation tests**

```ts
it("produces semantic tokens for a tech style selection", () => {
  const result = buildStyleResult({
    overallStyle: "tech",
    colorTendency: "cool",
    componentCharacter: "card",
    motionIntensity: "light"
  });

  expect(result.semantic.colorPrimary).toBeTruthy();
  expect(result.semantic.shadowCard).toBeTruthy();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- src/test/style-engine.test.ts`
Expected: FAIL because `buildStyleResult` is undefined

- [ ] **Step 3: Implement deterministic mapping rules**

```ts
export function buildStyleResult(selection: StyleSelection) {
  return {
    selection,
    semantic: {
      colorPrimary: "#1677ff",
      shadowCard: "0 12px 32px rgba(6, 24, 44, 0.18)"
    }
  };
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- src/test/style-engine.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/lib/style-engine.ts src/test/style-engine.test.ts
git commit -m "feat: add style mapping engine"
```

## Chunk 3: Add Export Adapters

### Task 5: Generate Ant Design theme config output

**Files:**
- Create: `src/lib/antd-adapter.ts`
- Create: `src/test/antd-adapter.test.ts`

- [ ] **Step 1: Write the failing adapter test**

```ts
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- src/test/antd-adapter.test.ts`
Expected: FAIL because adapter is missing

- [ ] **Step 3: Implement the adapter**

```ts
export function toAntdTheme(semantic: SemanticTokens) {
  return {
    token: {
      colorPrimary: semantic.colorPrimary,
      borderRadius: semantic.radiusBase
    }
  };
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- src/test/antd-adapter.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/lib/antd-adapter.ts src/test/antd-adapter.test.ts
git commit -m "feat: add antd theme adapter"
```

### Task 6: Generate AI prompt and Tailwind helper exports

**Files:**
- Create: `src/lib/prompt-generator.ts`
- Create: `src/lib/tailwind-helpers.ts`
- Create: `src/test/prompt-generator.test.ts`

- [ ] **Step 1: Write failing export tests**

```ts
import { describe, expect, it } from "vitest";
import { buildStylePrompt } from "../lib/prompt-generator";

describe("buildStylePrompt", () => {
  it("describes the chosen visual direction", () => {
    const prompt = buildStylePrompt({
      overallStyle: "minimal",
      colorTendency: "low-saturation",
      componentCharacter: "bordered",
      motionIntensity: "none"
    });

    expect(prompt).toContain("minimal");
    expect(prompt).toContain("low-saturation");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- src/test/prompt-generator.test.ts`
Expected: FAIL because export generators are missing

- [ ] **Step 3: Implement prompt and helper generators**

```ts
export function buildStylePrompt(selection: StyleSelection) {
  return `Build the UI with a ${selection.overallStyle} visual direction.`;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- src/test/prompt-generator.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/lib/prompt-generator.ts src/lib/tailwind-helpers.ts src/test/prompt-generator.test.ts
git commit -m "feat: add export generators"
```

## Chunk 4: Build The Studio UI

### Task 7: Create the split studio layout and style controls

**Files:**
- Create: `src/components/layout/studio-layout.tsx`
- Create: `src/components/config/style-controls.tsx`
- Modify: `src/App.tsx`
- Modify: `src/test/app.test.tsx`

- [ ] **Step 1: Write the failing studio layout test**

```tsx
it("renders controls and preview sections", () => {
  render(<App />);
  expect(screen.getByText("Overall Style")).toBeInTheDocument();
  expect(screen.getByText("Preview")).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- src/test/app.test.tsx`
Expected: FAIL because the studio UI is not implemented

- [ ] **Step 3: Implement the split studio layout**

```tsx
<StudioLayout
  controls={<StyleControls />}
  preview={<div>Preview</div>}
  exports={<div>Exports</div>}
/>
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- src/test/app.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/layout/studio-layout.tsx src/components/config/style-controls.tsx src/App.tsx src/test/app.test.tsx
git commit -m "feat: add studio layout and controls"
```

### Task 8: Add live preview surfaces

**Files:**
- Create: `src/components/preview/component-preview.tsx`
- Create: `src/components/preview/page-fragment-preview.tsx`
- Modify: `src/App.tsx`
- Modify: `src/test/app.test.tsx`

- [ ] **Step 1: Write the failing preview test**

```tsx
it("shows component and page fragment preview tabs", () => {
  render(<App />);
  expect(screen.getByText("Components")).toBeInTheDocument();
  expect(screen.getByText("Page Fragments")).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- src/test/app.test.tsx`
Expected: FAIL because preview tabs do not exist yet

- [ ] **Step 3: Implement preview components using Ant Design**

```tsx
<Tabs
  items={[
    { key: "components", label: "Components", children: <ComponentPreview /> },
    { key: "fragments", label: "Page Fragments", children: <PageFragmentPreview /> }
  ]}
/>
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- src/test/app.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/preview/component-preview.tsx src/components/preview/page-fragment-preview.tsx src/App.tsx src/test/app.test.tsx
git commit -m "feat: add live preview surfaces"
```

### Task 9: Add export tabs and generated outputs

**Files:**
- Create: `src/components/export/code-block.tsx`
- Create: `src/components/export/export-tabs.tsx`
- Create: `src/components/export/export-panel.tsx`
- Modify: `src/App.tsx`
- Modify: `src/test/app.test.tsx`

- [ ] **Step 1: Write the failing export panel test**

```tsx
it("shows export tabs for antd theme and ai prompt", () => {
  render(<App />);
  expect(screen.getByText("Ant Design Theme")).toBeInTheDocument();
  expect(screen.getByText("AI Prompt")).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- src/test/app.test.tsx`
Expected: FAIL because export panel is not implemented

- [ ] **Step 3: Implement the export UI**

```tsx
<ExportTabs
  themeCode={themeCode}
  promptText={promptText}
  tailwindHelpers={tailwindHelpers}
/>
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- src/test/app.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/export/code-block.tsx src/components/export/export-tabs.tsx src/components/export/export-panel.tsx src/App.tsx src/test/app.test.tsx
git commit -m "feat: add export panel"
```

## Chunk 5: Wire State, Validation, And Final Verification

### Task 10: Connect style state to engine, preview, and exports

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/components/config/style-controls.tsx`
- Modify: `src/components/export/export-panel.tsx`
- Modify: `src/components/preview/component-preview.tsx`
- Modify: `src/components/preview/page-fragment-preview.tsx`
- Modify: `src/test/app.test.tsx`

- [ ] **Step 1: Write the failing integration test**

```tsx
it("updates exports when a style option changes", async () => {
  render(<App />);
  await userEvent.click(screen.getByRole("radio", { name: /tech/i }));
  expect(screen.getByText(/tech/i)).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- src/test/app.test.tsx`
Expected: FAIL because controls are not wired to generated output

- [ ] **Step 3: Implement app state wiring**

```tsx
const [selection, setSelection] = useState(defaultStyleSelection);
const styleResult = buildStyleResult(selection);
const antdTheme = toAntdTheme(styleResult.semantic);
const promptText = buildStylePrompt(selection);
```

- [ ] **Step 4: Run focused tests**

Run: `npm test -- src/test/app.test.tsx src/test/style-engine.test.ts src/test/antd-adapter.test.ts src/test/prompt-generator.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/App.tsx src/components/config/style-controls.tsx src/components/export/export-panel.tsx src/components/preview/component-preview.tsx src/components/preview/page-fragment-preview.tsx src/test/app.test.tsx
git commit -m "feat: connect style engine flow"
```

### Task 11: Run full verification and document setup

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Write the failing docs expectation**

Document the exact setup command sequence before claiming the project is ready.

- [ ] **Step 2: Add the README**

```md
# Style Engine

## Setup

- `npm install`
- `npm run dev`
- `npm test`
```

- [ ] **Step 3: Run full verification**

Run: `npm test`
Expected: PASS

Run: `npm run build`
Expected: PASS

- [ ] **Step 4: Record remaining v1 limitations**

Document that only `React + Ant Design` is supported in v1 and `Tailwind` output is limited to layout helpers.

- [ ] **Step 5: Commit**

```bash
git add README.md
git commit -m "docs: add project setup and limitations"
```

## Notes For The Implementer

- Keep the mapping engine deterministic and data-driven where practical.
- Do not introduce backend services or persistence in v1.
- Do not expand the style dimensions beyond the approved four inputs.
- Use `Ant Design` components directly in preview so the generated theme is validated against the actual target library.
- Treat `Tailwind` as a helper output only, not the main theme layer.
- This workspace is currently not a git repository, so commit steps require git initialization or a different repository root before execution.
