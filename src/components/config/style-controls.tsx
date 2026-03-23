import type { StyleOption } from "../../types/style";
import {
  colorTendencyOptions,
  componentCharacterOptions,
  motionIntensityOptions,
  overallStyleOptions
} from "../../data/style-options";

function OptionGroup({
  label,
  options
}: {
  label: string;
  options: StyleOption<string>[];
}) {
  return (
    <section aria-label={label} style={{ display: "grid", gap: 12 }}>
      <h2 style={{ margin: 0, fontSize: "1rem" }}>{label}</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            style={{
              border: "1px solid rgba(148, 163, 184, 0.35)",
              borderRadius: 999,
              padding: "10px 14px",
              background: "#fff",
              color: "#0f172a"
            }}
          >
            {option.label}
          </button>
        ))}
      </div>
    </section>
  );
}

export default function StyleControls() {
  return (
    <div style={{ display: "grid", gap: 20 }}>
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
          Configure
        </p>
        <h2>Style Controls</h2>
      </div>

      <OptionGroup label="Overall Style" options={overallStyleOptions} />
      <OptionGroup label="Color Tendency" options={colorTendencyOptions} />
      <OptionGroup label="Component Character" options={componentCharacterOptions} />
      <OptionGroup label="Motion Intensity" options={motionIntensityOptions} />
    </div>
  );
}
