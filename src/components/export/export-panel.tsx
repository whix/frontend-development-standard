import ExportTabs from "./export-tabs";

interface ExportPanelProps {
  antdThemeCode: string;
  promptText: string;
  tailwindHelpersCode: string;
}

export default function ExportPanel({
  antdThemeCode,
  promptText,
  tailwindHelpersCode
}: ExportPanelProps) {
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
          导出
        </p>
        <h2 style={{ margin: 0 }}>生成结果</h2>
      </div>

      <ExportTabs
        antdThemeCode={antdThemeCode}
        promptText={promptText}
        tailwindHelpersCode={tailwindHelpersCode}
      />
    </section>
  );
}
