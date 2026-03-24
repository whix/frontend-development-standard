# Fragment Preview Layout Expansion Design

## Summary

The current page fragment preview is too small and too visually similar across overall style choices. Users can switch between `简约`, `科技`, and `品牌`, but the preview mostly changes color, radius, and shadow rather than page structure. That makes the product feel weaker than its promise.

This enhancement expands the page fragment preview into a richer layout showcase and makes `整体风格` directly affect layout skeletons, not just decoration. The goal is that developers can immediately see how a chosen style changes page structure before exporting theme tokens or AI guidance.

## Product Goal

The next version of the preview should answer two questions clearly:

1. What page sections are available in the current style direction?
2. How does the chosen overall style change layout composition and hierarchy?

The preview should feel meaningfully different when the user switches overall style, even if the same content categories are shown.

## Scope

This enhancement only changes the preview experience and the style engine logic needed to support layout-level variation.

In scope:

- richer page fragment preview content
- layout templates that differ by `整体风格`
- preview metadata that helps render style-specific structure
- tests for the new layout mapping and preview rendering

Out of scope:

- expanding export formats
- changing AI prompt output shape
- adding new top-level style dimensions
- full multi-page preview
- changing the component preview into a full design system browser

## Preview Content

The page fragment preview should expand from a small three-card sample into five named sections:

1. 导航栏
2. Hero 首屏
3. 功能介绍区
4. 表单区
5. 客户案例区

These are enough to show page structure, call-to-action placement, information rhythm, and trust-building without turning the preview into a full page builder.

## Core Product Rule

`整体风格` must control layout skeletons.

That means:

- `色彩倾向`, `组件气质`, and `动效强度` continue to affect visual treatment
- `整体风格` chooses which layout template each fragment uses

This creates a clear responsibility split:

- overall style = structural direction
- other dimensions = visual expression inside that structure

## Layout Strategy

Each fragment type keeps a shared semantic purpose, but renders through a style-specific layout template.

This is the preferred approach because it preserves a stable preview catalog while still making style differences obvious.

### 简约

Layout traits:

- large whitespace
- centered or balanced columns
- fewer competing elements
- restrained supporting content

Fragment behavior:

- 导航栏: low-height bar, few nav links, one primary action
- Hero: centered single-column composition
- 功能介绍区: regular grid with equal card widths
- 表单区: narrow centered form with minimal helper content
- 客户案例区: clean quote grid with consistent card rhythm

### 科技

Layout traits:

- split layouts
- denser supporting modules
- stronger panels, meters, or system surfaces
- information-rich composition

Fragment behavior:

- 导航栏: logo, status chip, nav links, and utility actions
- Hero: left copy + right metrics or system panel
- 功能介绍区: explanatory column paired with stacked capability cards
- 表单区: dual-column explanation plus form
- 客户案例区: case cards paired with result metrics

### 品牌

Layout traits:

- more dramatic hierarchy
- asymmetry where useful
- stronger editorial rhythm
- narrative and trust cues

Fragment behavior:

- 导航栏: taller bar with slogan or brand line
- Hero: asymmetric composition with stronger brand statement
- 功能介绍区: alternating text-media style blocks
- 表单区: form embedded in a broader brand pitch section
- 客户案例区: larger testimonials with customer identity emphasis

## Architecture Changes

The current preview renderer should be split conceptually into two layers.

### 1. Fragment Layout Schema

This layer defines the fragment catalog and layout templates for each overall style.

Responsibilities:

- list supported fragment types
- map each fragment to style-specific layout variants
- provide labels, section copy, and structure metadata

The schema should be declarative enough that a new style can later add its own templates without rewriting preview logic.

### 2. Fragment Renderer

This layer renders the selected templates using the current semantic style result.

Responsibilities:

- read the current `overallStyle`
- choose the correct layout variant for each fragment
- apply semantic tokens for color, radius, and shadows
- keep the preview readable across desktop and mobile

## Data Model Direction

The style engine should grow beyond pure semantic visual tokens and expose lightweight preview layout metadata.

Suggested additions:

- `layoutStyle`: mirrors the selected overall style for preview composition
- `heroVariant`
- `navVariant`
- `featureVariant`
- `formVariant`
- `testimonialVariant`

These do not need to affect exports yet. They only need to drive preview rendering in a deterministic way.

## UI Behavior

The right-side `页面片段` tab should render all five fragments in order so users can scan a coherent pseudo-page rather than isolated cards.

The preview should:

- feel like one page made of linked sections
- visibly reflow when overall style changes
- still inherit color and component treatment from the other style dimensions

The tab does not need sub-navigation in this iteration. A single long preview is more useful because it makes structure differences easier to compare.

## Testing Strategy

Testing should expand in two places.

### Style Engine Tests

- verify overall style maps to the expected layout variants
- verify existing semantic visual tokens still remain deterministic

### Preview Tests

- verify all five fragments render
- verify changing overall style changes layout-specific copy or structure markers
- verify the preview still updates when other dimensions change

## Success Criteria

This enhancement is successful if a user can:

1. switch between `简约`, `科技`, and `品牌`
2. immediately recognize different page structures
3. review a fuller set of practical page fragments
4. understand that style selection changes layout strategy, not only visual polish
