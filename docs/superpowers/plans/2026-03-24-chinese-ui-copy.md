# Chinese UI Copy Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update all visible application UI copy to Chinese without changing export payloads, internal style values, or project documentation.

**Architecture:** Keep the style engine behavior unchanged and localize only the display layer. Update component labels and preview text in the React UI, then adjust the app-level test to assert the new Chinese copy.

**Tech Stack:** React, TypeScript, Ant Design, Vitest, Testing Library

---

## Chunk 1: Baseline And Test-First UI Copy Update

### Task 1: Prepare workspace and baseline

**Files:**
- Modify: `/Users/huanghewan/cloudbility/frontend-development-standard/.worktrees/codex-ui-zh/docs/superpowers/plans/2026-03-24-chinese-ui-copy.md`

- [ ] **Step 1: Install dependencies in the worktree**

Run: `npm install`
Expected: install completes successfully in the worktree.

- [ ] **Step 2: Run the focused app test**

Run: `npm test -- src/test/app.test.tsx`
Expected: PASS on the current English UI baseline.

### Task 2: Write the failing localization test

**Files:**
- Modify: `/Users/huanghewan/cloudbility/frontend-development-standard/.worktrees/codex-ui-zh/src/test/app.test.tsx`
- Test: `/Users/huanghewan/cloudbility/frontend-development-standard/.worktrees/codex-ui-zh/src/test/app.test.tsx`

- [ ] **Step 1: Replace English UI assertions with Chinese expectations**

Update the test to assert Chinese labels for the page title, workspace label, tabs, control labels, and preview text while leaving export content assertions unchanged.

- [ ] **Step 2: Run the focused app test to verify it fails**

Run: `npm test -- src/test/app.test.tsx`
Expected: FAIL because the rendered UI is still in English.

### Task 3: Implement Chinese UI copy

**Files:**
- Modify: `/Users/huanghewan/cloudbility/frontend-development-standard/.worktrees/codex-ui-zh/src/App.tsx`
- Modify: `/Users/huanghewan/cloudbility/frontend-development-standard/.worktrees/codex-ui-zh/src/components/layout/studio-layout.tsx`
- Modify: `/Users/huanghewan/cloudbility/frontend-development-standard/.worktrees/codex-ui-zh/src/components/config/style-controls.tsx`
- Modify: `/Users/huanghewan/cloudbility/frontend-development-standard/.worktrees/codex-ui-zh/src/components/preview/component-preview.tsx`
- Modify: `/Users/huanghewan/cloudbility/frontend-development-standard/.worktrees/codex-ui-zh/src/components/preview/page-fragment-preview.tsx`
- Modify: `/Users/huanghewan/cloudbility/frontend-development-standard/.worktrees/codex-ui-zh/src/components/export/export-panel.tsx`
- Modify: `/Users/huanghewan/cloudbility/frontend-development-standard/.worktrees/codex-ui-zh/src/components/export/export-tabs.tsx`

- [ ] **Step 1: Update visible UI labels to Chinese**

Translate the app shell, control section labels, preview tab labels, export section labels, and preview helper text. Keep internal enum values and generated export payloads unchanged.

- [ ] **Step 2: Run the focused app test to verify it passes**

Run: `npm test -- src/test/app.test.tsx`
Expected: PASS.

### Task 4: Final verification

**Files:**
- Modify: `/Users/huanghewan/cloudbility/frontend-development-standard/.worktrees/codex-ui-zh/src/test/app.test.tsx`

- [ ] **Step 1: Run the full test suite**

Run: `npm test`
Expected: PASS.

- [ ] **Step 2: Run the production build**

Run: `npm run build`
Expected: PASS.

- [ ] **Step 3: Commit the update**

```bash
git add docs/superpowers/plans/2026-03-24-chinese-ui-copy.md src/App.tsx src/components/layout/studio-layout.tsx src/components/config/style-controls.tsx src/components/preview/component-preview.tsx src/components/preview/page-fragment-preview.tsx src/components/export/export-panel.tsx src/components/export/export-tabs.tsx src/test/app.test.tsx
git commit -m "feat: localize ui copy to chinese"
```
