# Structured Prompt Export Design

## Summary

The preview layer now shows meaningful layout differences across `简约`, `科技`, and `品牌`, but the exported AI prompt still behaves like a lightweight visual note. It only describes overall style, color tendency, component character, and motion intensity. That means the strongest new product capability, layout-aware style guidance, is not being exported.

This enhancement closes that gap by turning the AI prompt into a structured implementation template. The output should reflect both page-level layout intent and section-level layout instructions, with the strongest emphasis on fragment-by-fragment guidance.

## Product Goal

The exported prompt should help an AI coding model generate a page that follows the same structural logic the user sees in the preview.

The prompt should no longer say only:

- what the page should feel like
- what color tendency it should use

It should also say:

- how the page should be organized
- how each preview fragment should be laid out

## Fixed Output Shape

The prompt should always render four fixed sections:

1. `整体风格目标`
2. `页面布局骨架`
3. `视觉约束`
4. `片段级布局要求`

This fixed structure is important because it makes the output more reusable, more testable, and more stable when pasted into general-purpose AI coding tools.

## Section Responsibilities

### 1. 整体风格目标

This section explains the overall page attitude and experience target.

Examples:

- `简约`: restrained, readable, whitespace-first, low visual noise
- `科技`: system-oriented, modular, high-density but ordered
- `品牌`: narrative, expressive, identity-forward, stronger rhythm

This section should stay high-level. It should describe the page as a whole, not individual fragment rules.

### 2. 页面布局骨架

This section describes the global structure of the page.

It should summarize how the main fragments are arranged for the current overall style. For example:

- `简约`: compact nav, centered hero, balanced feature grid, centered form, quote grid
- `科技`: utility nav, split hero, capability stack, explainer-plus-form, metrics plus quotes
- `品牌`: slogan nav, asymmetric hero, alternating story blocks, brand-led form, editorial testimonials

This section answers: "How should the page be composed?"

### 3. 视觉约束

This section converts the selected dimensions into concrete visual constraints.

It should include:

- use `React + Ant Design`
- selected color tendency
- component character
- motion intensity
- consistency guidance
- clear avoid statements where useful

This section answers: "How should the page look while staying in bounds?"

### 4. 片段级布局要求

This is the most important section.

It should contain explicit instructions for:

- 导航栏
- Hero 首屏
- 功能介绍区
- 表单区
- 客户案例区

Each fragment should describe its target structure directly, not through vague adjectives.

Good example:

- "Hero 使用左右双栏，左侧标题和按钮，右侧指标面板。不要回到居中单栏。"

Bad example:

- "Hero 做得更科技一些。"

## Architecture

The prompt export should be split into two layers.

### 1. Prompt Schema Builder

This layer converts the current application state into a structured prompt data object.

Inputs:

- `StyleSelection`
- `StyleResult.previewLayout`
- fragment layout catalog content

Responsibilities:

- build the four fixed sections
- keep section data deterministic
- reuse preview metadata instead of duplicating layout assumptions

### 2. Prompt Formatter

This layer converts the structured data object into final text output.

Responsibilities:

- preserve a stable section order
- format headings consistently
- produce readable, copyable output

This separation keeps the logic maintainable and makes it easier to add future exports such as JSON or specialized prompt variants.

## Data Reuse Strategy

The preview layer already has the strongest available layout information through:

- `previewLayout`
- `fragmentLayoutsByStyle`

The prompt export should reuse this data instead of inventing a second parallel layout description system.

That means:

- overall structure comes from style-level layout variants
- fragment instructions come from the same catalog that drives preview rendering

This creates a real product loop:

preview shown -> layout understood -> prompt exported with matching structure

## Formatting Direction

The final exported prompt should read like a structured implementation brief, not a freeform paragraph.

It should:

- use the four fixed headings
- group related instructions together
- remain compact enough for direct AI input
- avoid prose drift between runs for the same input

The prompt should remain text-first in this iteration. No JSON export is needed yet.

## Testing Strategy

Tests should expand in two places.

### Prompt Logic Tests

- verify each overall style produces the correct page skeleton summary
- verify fragment-level requirements reflect the chosen layout variants
- verify visual constraints still include the selected visual dimensions

### App Export Tests

- verify the AI prompt tab now shows the structured four-section template
- verify switching overall style updates both page skeleton and fragment instructions

## Out Of Scope

- new export formats
- prompt variant switching
- editable prompt templates in UI
- localization of exported prompt text
- changes to `Ant Design Theme` or `Tailwind Helpers` exports

## Success Criteria

This enhancement is successful if a user can:

1. preview a layout-aware page structure
2. open the `AI Prompt` tab
3. see a structured prompt with the same layout logic
4. paste that prompt into an AI coding workflow and get output that better matches the preview
