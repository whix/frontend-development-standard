import { buildStylePrompt } from "../../lib/prompt-generator";
import { buildTailwindHelpers } from "../../lib/tailwind-helpers";
import { buildStyleResult } from "../../lib/style-engine";
import { defaultStyleSelection } from "../../data/style-options";
import { toAntdTheme } from "../../lib/antd-adapter";
import ExportTabs from "./export-tabs";

function formatJson(value: unknown): string {
  return JSON.stringify(value, null, 2);
}

export default function ExportPanel() {
  const styleResult = buildStyleResult(defaultStyleSelection);
  const antdTheme = toAntdTheme(styleResult.semantic);
  const promptText = buildStylePrompt(defaultStyleSelection);
  const tailwindHelpers = buildTailwindHelpers(defaultStyleSelection);

  return (
    <section style={{ display: "grid", gap: 16 }}>
      <div>
        <p
          style={{
            margin: "0 0 8px",
            textTransform: "uppercase",
            letterSpacing: "0.16em",
            fontSize: "0.72rem",
            color: "#64748b"
          }}
        >
          Exports
        </p>
        <h2 style={{ margin: 0 }}>Generated Outputs</h2>
      </div>

      <ExportTabs
        antdThemeCode={formatJson(antdTheme)}
        promptText={promptText}
        tailwindHelpersCode={formatJson(tailwindHelpers)}
      />
    </section>
  );
}
