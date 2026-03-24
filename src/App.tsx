import { useState } from "react";
import { ConfigProvider, Tabs } from "antd";
import { defaultStyleSelection } from "./data/style-options";
import { toAntdTheme } from "./lib/antd-adapter";
import { buildStylePrompt } from "./lib/prompt-generator";
import { buildStyleResult } from "./lib/style-engine";
import { buildTailwindHelpers } from "./lib/tailwind-helpers";
import StyleControls from "./components/config/style-controls";
import ExportPanel from "./components/export/export-panel";
import StudioLayout from "./components/layout/studio-layout";
import ComponentPreview from "./components/preview/component-preview";
import PageFragmentPreview from "./components/preview/page-fragment-preview";

function formatJson(value: unknown): string {
  return JSON.stringify(value, null, 2);
}

export default function App() {
  const [selection, setSelection] = useState(defaultStyleSelection);
  const styleResult = buildStyleResult(selection);
  const antdTheme = toAntdTheme(styleResult.semantic);
  const antdThemeCode = formatJson(antdTheme);
  const promptText = buildStylePrompt(selection);
  const tailwindHelpersCode = formatJson(buildTailwindHelpers(selection));

  return (
    <StudioLayout
      controls={
        <StyleControls selection={selection} onSelectionChange={setSelection} />
      }
      preview={
        <ConfigProvider theme={antdTheme}>
          <div style={{ display: "grid", gap: 20 }}>
            <Tabs
              defaultActiveKey="components"
              items={[
                {
                  key: "components",
                  label: "Components",
                  children: (
                    <ComponentPreview selection={selection} styleResult={styleResult} />
                  ),
                  forceRender: true
                },
                {
                  key: "page-fragments",
                  label: "Page Fragments",
                  children: (
                    <PageFragmentPreview
                      selection={selection}
                      styleResult={styleResult}
                    />
                  ),
                  forceRender: true
                }
              ]}
            />
            <ExportPanel
              antdThemeCode={antdThemeCode}
              promptText={promptText}
              tailwindHelpersCode={tailwindHelpersCode}
            />
          </div>
        </ConfigProvider>
      }
    />
  );
}
