import { Tabs } from "antd";
import CodeBlock from "./code-block";

interface ExportTabsProps {
  antdThemeCode: string;
  promptText: string;
  tailwindHelpersCode: string;
}

export default function ExportTabs({
  antdThemeCode,
  promptText,
  tailwindHelpersCode
}: ExportTabsProps) {
  return (
    <Tabs
      defaultActiveKey="antd-theme"
      items={[
        {
          key: "antd-theme",
          label: "Ant Design Theme",
          children: <CodeBlock label="Ant Design Theme" code={antdThemeCode} />,
          forceRender: true
        },
        {
          key: "ai-prompt",
          label: "AI Prompt",
          children: <CodeBlock label="AI Prompt" code={promptText} />,
          forceRender: true
        },
        {
          key: "tailwind-helpers",
          label: "Tailwind Helpers",
          children: (
            <CodeBlock label="Tailwind Helpers" code={tailwindHelpersCode}>
              <p style={{ margin: 0, color: "#cbd5e1" }}>
                Layout helper classes for quick composition.
              </p>
            </CodeBlock>
          ),
          forceRender: true
        }
      ]}
    />
  );
}
