import { Tabs } from "antd";
import StyleControls from "./components/config/style-controls";
import StudioLayout from "./components/layout/studio-layout";
import ComponentPreview from "./components/preview/component-preview";
import PageFragmentPreview from "./components/preview/page-fragment-preview";

export default function App() {
  return (
    <StudioLayout
      controls={<StyleControls />}
      preview={
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
      }
    />
  );
}
