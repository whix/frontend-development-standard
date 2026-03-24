# Style Engine

Web-based style engine for `React + Ant Design`.

## Setup

- `npm install`
- `npm run dev`
- `npm test`

## Build

- `npm run build`

## Current Scope

- Supports four style dimensions:
  - overall style
  - color tendency
  - component character
  - motion intensity
- Generates:
  - `Ant Design` theme config
  - AI style prompt
  - Tailwind helper snippets
- Includes:
  - interactive style controls
  - component preview
  - page fragment preview
  - export tabs

## Current Limitations

- Only `React + Ant Design` is supported in v1.
- Tailwind output is limited to layout helper snippets.
- Preview uses lightweight adaptations plus shared Ant Design theme input; it is not a full production design system renderer.
