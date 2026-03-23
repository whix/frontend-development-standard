import StyleControls from "./components/config/style-controls";
import StudioLayout from "./components/layout/studio-layout";

export default function App() {
  return (
    <StudioLayout
      controls={<StyleControls />}
      preview={
        <div
          style={{
            display: "grid",
            placeContent: "center",
            minHeight: "100%",
            borderRadius: 20,
            border: "1px dashed rgba(148, 163, 184, 0.45)",
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(248, 250, 252, 0.92))",
            textAlign: "center",
            gap: 12
          }}
        >
          <h2>Preview</h2>
          <p>Live style preview will appear here.</p>
        </div>
      }
    />
  );
}
