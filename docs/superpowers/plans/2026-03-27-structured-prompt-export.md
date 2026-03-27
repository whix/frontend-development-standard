# Structured Prompt Export Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current lightweight AI prompt output with a structured four-section prompt that reflects both visual dimensions and layout-aware preview guidance.

**Architecture:** Keep prompt generation deterministic by splitting it into two layers: a schema builder that derives section content from `selection`, `previewLayout`, and fragment catalog data, and a formatter that renders those sections into a stable text template. Reuse the preview layout catalog rather than creating duplicate layout description logic.

**Tech Stack:** `TypeScript`, `React`, `Vitest`, `Testing Library`

---

## File Structure

- Modify: `src/lib/prompt-generator.ts`
- Modify: `src/test/prompt-generator.test.ts`
- Modify: `src/test/app.test.tsx`
- Modify: `src/components/preview/fragment-layouts.ts`

## Chunk 1: Add Structured Prompt Data Generation

### Task 1: Replace paragraph-style prompt logic with sectioned prompt output

**Files:**
- Modify: `src/lib/prompt-generator.ts`
- Modify: `src/test/prompt-generator.test.ts`

- [ ] **Step 1: Write a failing prompt test for the structured template**

Add a test that expects the generated prompt to contain:

- `整体风格目标`
- `页面布局骨架`
- `视觉约束`
- `片段级布局要求`

Also assert one layout-specific instruction, for example the `科技` hero split layout.

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- src/test/prompt-generator.test.ts`
Expected: FAIL because the prompt is still a single paragraph

- [ ] **Step 3: Implement a schema builder and formatter**

Refactor prompt generation so it:

- reads the current visual dimensions
- derives page skeleton text from `overallStyle`
- derives fragment instructions from layout metadata
- formats the result into four fixed sections

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- src/test/prompt-generator.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/lib/prompt-generator.ts src/test/prompt-generator.test.ts
git commit -m "feat: export structured ai prompts"
```

## Chunk 2: Reuse Preview Layout Catalog For Prompt Sections

### Task 2: Expose reusable fragment guidance metadata

**Files:**
- Modify: `src/components/preview/fragment-layouts.ts`
- Modify: `src/lib/prompt-generator.ts`

- [ ] **Step 1: Add prompt-friendly metadata to the layout catalog**

Expose enough descriptive information for prompt generation without copying the same layout descriptions into a second source.

- [ ] **Step 2: Keep preview rendering behavior unchanged**

Do not rewrite the preview renderer in this task. Only make catalog data easier to consume from prompt generation.

- [ ] **Step 3: Run focused prompt tests**

Run: `npm test -- src/test/prompt-generator.test.ts`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add src/components/preview/fragment-layouts.ts src/lib/prompt-generator.ts
git commit -m "refactor: share fragment prompt metadata"
```

## Chunk 3: Update App-Level Export Expectations

### Task 3: Verify the UI export tab reflects the structured prompt

**Files:**
- Modify: `src/test/app.test.tsx`

- [ ] **Step 1: Write failing app assertions for the new prompt sections**

Assert that the `AI 提示词` tab includes the four fixed headings and one style-specific fragment instruction.

- [ ] **Step 2: Run the focused app test to verify it fails**

Run: `npm test -- src/test/app.test.tsx`
Expected: FAIL because app tests still expect the old paragraph prompt

- [ ] **Step 3: Adjust the app expectation to the new prompt shape**

Update the app test to assert the structured prompt while keeping the existing preview/export flow unchanged.

- [ ] **Step 4: Run the focused app test to verify it passes**

Run: `npm test -- src/test/app.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/test/app.test.tsx
git commit -m "test: verify structured prompt export"
```

## Chunk 4: Final Verification

### Task 4: Verify the new prompt end to end

**Files:**
- Modify: `src/lib/prompt-generator.ts`
- Modify: `src/test/app.test.tsx`

- [ ] **Step 1: Run the full test suite**

Run: `npm test`
Expected: PASS

- [ ] **Step 2: Run the production build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 3: Review the AI prompt output manually**

Run: `npm run dev`
Expected: the `AI 提示词` tab shows the four fixed sections and changes when switching `整体风格`

- [ ] **Step 4: Commit any final polish**

```bash
git add src/lib/prompt-generator.ts src/test/app.test.tsx
git commit -m "fix: polish structured prompt output"
```
