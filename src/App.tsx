import { Tabs } from "antd";
import StyleControls from "./components/config/style-controls";
import ExportPanel from "./components/export/export-panel";
import StudioLayout from "./components/layout/studio-layout";
import ComponentPreview from "./components/preview/component-preview";
import PageFragmentPreview from "./components/preview/page-fragment-preview";

export default function App() {
  return (
    <StudioLayout
      controls={<StyleControls />}
      preview={
        <div style={{ display: "grid", gap: 20 }}>
          <Tabs
            defaultActiveKey="components"
            items={[
              {
                key: "components",
                label: "Components",
                children: <ComponentPreview />,
                forceRender: true
              },
              {
                key: "page-fragments",
                label: "Page Fragments",
                children: <PageFragmentPreview />,
                forceRender: true
              }
            ]}
          />
          <ExportPanel />
        </div>
      }
    />
  );
}
