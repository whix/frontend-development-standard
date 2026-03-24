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
          label: "Ant Design 主题",
          children: <CodeBlock label="Ant Design 主题" code={antdThemeCode} />,
          forceRender: true
        },
        {
          key: "ai-prompt",
          label: "AI 提示词",
          children: <CodeBlock label="AI 提示词" code={promptText} />,
          forceRender: true
        },
        {
          key: "tailwind-helpers",
          label: "Tailwind 辅助",
          children: (
            <CodeBlock label="Tailwind 辅助" code={tailwindHelpersCode}>
              <p style={{ margin: 0, color: "#cbd5e1" }}>
                用于快速搭建布局的辅助类。
              </p>
            </CodeBlock>
          ),
          forceRender: true
        }
      ]}
    />
  );
}
