# React + Ant Design Style Engine Design

## Summary

This project is a web-based style engine that helps developers define a frontend style direction before using AI to build pages. The first version focuses on generating a consistent, reusable style system for `React + Ant Design`, with limited `Tailwind` support for layout assistance.

The product goal is to make AI-generated frontend output more visually unified and more project-specific at the same time. Developers should be able to choose a small set of style dimensions up front, preview the resulting look, and export concrete implementation artifacts instead of relying on vague aesthetic prompts.

## Product Shape

The first version is a `Web UI` product with a `Split Studio` layout:

- Left panel: style configuration controls
- Right panel: live preview and export results

This is not a general design platform and not a page builder. It is a style definition tool that turns aesthetic intent into engineering-ready outputs.

## Primary Inputs

The first version supports four configurable style dimensions:

1. Overall style
   - Example values: `minimal`, `tech`, `brand`
2. Color tendency
   - Example values: `cool`, `warm`, `high-contrast`, `low-saturation`
3. Component character
   - Example values: `flat`, `card`, `bordered`
4. Motion intensity
   - Example values: `none`, `light`, `strong`

These inputs form the product's style model. They should stay small, explicit, and structured.

## Primary Outputs

The first version exports three result types:

1. `Ant Design` theme token configuration
2. AI style constraint prompt for frontend generation
3. Limited `Tailwind` layout helper snippets

`Ant Design` theme output is the main implementation artifact. `Tailwind` is only used as a supporting layer for layout and spacing patterns, not as the primary theme system.

## Architecture

The system is divided into four modules with clear responsibilities:

### 1. Style Configuration Model

Defines the supported style dimensions, available options, defaults, and the normalized structure used throughout the app.

Responsibilities:

- Store allowed style options
- Validate selected combinations
- Provide a stable input shape to downstream modules

### 2. Style Mapping Engine

Translates the chosen style dimensions into an internal token model and then into framework-specific outputs.

Responsibilities:

- Generate neutral semantic style tokens
- Map semantic tokens into `Ant Design` theme tokens
- Generate prompt fragments and layout helper guidance
- Resolve unsafe or conflicting combinations through controlled fallback rules

This is the core domain logic of the product.

### 3. Preview Renderer

Renders the current style selection in real time so the user can judge whether the style direction is coherent.

Preview scope for v1:

- Component set:
  - buttons
  - inputs
  - cards
  - tags
  - navigation
  - modal or dialog
- Page fragments:
  - hero section
  - feature section
  - dashboard card strip

The preview is meant to validate the style system, not to simulate a complete application.

### 4. Export Module

Formats the current style result into explicit artifacts that developers can use immediately.

Responsibilities:

- Export `Ant Design` token config object
- Export AI prompt text with style constraints
- Export small `Tailwind` layout helper snippets

## Data Flow

The runtime flow should remain simple:

1. User changes one or more style dimensions
2. Configuration model normalizes the selection
3. Mapping engine generates semantic tokens and framework outputs
4. Preview renderer re-renders using the current `Ant Design` theme
5. Export panel refreshes all generated artifacts

The mapping engine should be deterministic so the same input always yields the same output.

## UI Design

The first version uses a two-column studio layout.

### Left Panel

Contains only the four style dimensions and reset/apply controls if needed. The panel should stay focused and avoid advanced settings in v1.

### Right Panel

Split into two areas:

- Preview area with tabs:
  - `Components`
  - `Page Fragments`
- Export area with tabs:
  - `Ant Design Theme`
  - `AI Prompt`
  - `Tailwind Helpers`

The right side should update immediately when the user changes a selection.

## Framework Constraints

The first version is optimized for `React + Ant Design`.

This affects the system in an important way:

- The style input model should stay framework-agnostic
- The output adapters are framework-specific

For v1, only one framework adapter is required:

- `react-antd`

The architecture should make future adapters possible, but no additional adapters should be implemented in the first version.

## Conflict Handling

The app should not fail hard for strong or awkward style combinations. Instead:

- apply documented fallback mappings
- keep preview and exports available
- prefer "balanced output" over validation errors

If a combination exceeds what v1 can represent cleanly, the engine should degrade to the nearest supported output and stay explicit in code comments or generated metadata if helpful.

## Testing Strategy

Testing should cover three layers:

### Mapping Engine Tests

- verifies each style dimension contributes expected token changes
- verifies selected combinations generate stable `Ant Design` theme output
- verifies fallback rules behave deterministically

### Preview Tests

- verifies configuration changes update preview state
- verifies key preview components render under generated theme values

### Export Tests

- verifies `Ant Design` config shape is valid
- verifies AI prompt text includes the selected style intent and constraints
- verifies `Tailwind` helper output remains structurally correct

## Out of Scope for v1

- user accounts
- cloud sync
- multi-project management
- AI scoring or aesthetic ranking
- Figma plugins
- multi-framework export support
- full page generation
- collaboration features

## Success Criteria

The first version is successful if a developer can:

1. pick a style combination in the browser
2. see a coherent `Ant Design`-based preview
3. export usable theme configuration and AI style instructions
4. apply those results in a `React + Ant Design` project with minimal manual adjustment

## Assumptions

- The implementation will use `React + TypeScript`
- The preview experience will use `Ant Design` components directly
- `Tailwind` support remains intentionally limited to layout helpers in v1
- The current workspace is not a git repository, so this spec cannot be committed yet
