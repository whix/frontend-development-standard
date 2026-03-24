# Fragment Preview Layouts Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand the page fragment preview to cover five sections and make `整体风格` drive visibly different layout skeletons for each preview fragment.

**Architecture:** Keep the existing style engine and preview shell, but add deterministic preview layout metadata to the style result and render style-specific fragment templates from a declarative catalog. Preserve export behavior and focus all changes on preview richness and layout differentiation.

**Tech Stack:** `React`, `TypeScript`, `Ant Design`, `Vitest`, `Testing Library`

---

## File Structure

- Modify: `src/lib/style-engine.ts`
- Modify: `src/test/style-engine.test.ts`
- Modify: `src/components/preview/page-fragment-preview.tsx`
- Modify: `src/components/preview/component-preview.tsx`
- Modify: `src/test/app.test.tsx`
- Create: `src/components/preview/fragment-layouts.ts`

## Chunk 1: Add Layout Metadata To The Style Engine

### Task 1: Write failing tests for preview layout variants

**Files:**
- Modify: `src/test/style-engine.test.ts`
- Modify: `src/lib/style-engine.ts`

- [ ] **Step 1: Add a failing test for overall-style layout variants**

```ts
it("maps tech style to technology-oriented preview layouts", () => {
  const result = buildStyleResult({
    overallStyle: "tech",
    colorTendency: "cool",
    componentCharacter: "card",
    motionIntensity: "light"
  });

  expect(result.previewLayout.heroVariant).toBe("split-metrics");
  expect(result.previewLayout.navVariant).toBe("utility-status");
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- src/test/style-engine.test.ts`
Expected: FAIL because `previewLayout` is not implemented yet

- [ ] **Step 3: Implement minimal preview layout metadata**

Add a deterministic `previewLayout` object to `StyleResult` and map `overallStyle` to explicit fragment variants.

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- src/test/style-engine.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/lib/style-engine.ts src/test/style-engine.test.ts
git commit -m "feat: add preview layout variants"
```

## Chunk 2: Build A Declarative Fragment Layout Catalog

### Task 2: Add fragment layout definitions

**Files:**
- Create: `src/components/preview/fragment-layouts.ts`

- [ ] **Step 1: Create a typed fragment layout catalog**

Define the five supported fragment types:

- `navbar`
- `hero`
- `features`
- `form`
- `testimonials`

Each type should provide content and structure variants for:

- `minimal`
- `tech`
- `brand`

- [ ] **Step 2: Keep the catalog presentation-only**

Do not put style engine logic here. This file should only describe labels, section copy, and structural grouping used by the renderer.

- [ ] **Step 3: Commit**

```bash
git add src/components/preview/fragment-layouts.ts
git commit -m "feat: add fragment preview catalog"
```

## Chunk 3: Render Richer Fragment Previews

### Task 3: Replace the small fragment preview with a pseudo-page preview

**Files:**
- Modify: `src/components/preview/page-fragment-preview.tsx`
- Modify: `src/components/preview/component-preview.tsx`

- [ ] **Step 1: Write the failing app-level preview assertions**

Update `src/test/app.test.tsx` to expect the new fragment names:

- `导航栏`
- `首屏区块`
- `功能介绍区`
- `表单区`
- `客户案例区`

Also add one layout-specific assertion for each overall style, for example:

- `科技` shows a metrics-oriented hero marker
- `品牌` shows a narrative testimonial marker

- [ ] **Step 2: Run the focused app test to verify it fails**

Run: `npm test -- src/test/app.test.tsx`
Expected: FAIL because the preview still renders the smaller fragment set

- [ ] **Step 3: Rebuild `page-fragment-preview.tsx` around the catalog**

Render a continuous page-like preview with all five fragments in order. Use `styleResult.previewLayout` to choose structural variants.

- [ ] **Step 4: Keep component preview aligned**

Update `component-preview.tsx` only if needed so the preview language and visual treatment stay consistent with the new richer page preview.

- [ ] **Step 5: Run the focused app test to verify it passes**

Run: `npm test -- src/test/app.test.tsx`
Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add src/components/preview/page-fragment-preview.tsx src/components/preview/component-preview.tsx src/test/app.test.tsx
git commit -m "feat: expand fragment page preview"
```

## Chunk 4: Final Verification

### Task 4: Verify the merged behavior end to end

**Files:**
- Modify: `src/test/app.test.tsx`

- [ ] **Step 1: Run the full test suite**

Run: `npm test`
Expected: PASS

- [ ] **Step 2: Run the production build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 3: Review the preview manually**

Run: `npm run dev`
Expected: the `页面片段` tab shows five sections and visibly different layout skeletons for `简约`, `科技`, and `品牌`

- [ ] **Step 4: Commit any final polish**

```bash
git add src/components/preview/page-fragment-preview.tsx src/test/app.test.tsx
git commit -m "fix: polish fragment preview layouts"
```
