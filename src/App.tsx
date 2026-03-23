import StyleControls from "./components/config/style-controls";
import StudioLayout from "./components/layout/studio-layout";

export default function App() {
  return (
    <StudioLayout
      controls={<StyleControls />}
      preview={
        <div className="preview-surface">
          <h2>Preview</h2>
          <p>Live style preview will appear here.</p>
        </div>
      }
    />
  );
}
