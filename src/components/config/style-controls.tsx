import type { StyleOption, StyleSelection } from "../../types/style";
import {
  colorTendencyOptions,
  componentCharacterOptions,
  motionIntensityOptions,
  overallStyleOptions
} from "../../data/style-options";

function OptionGroup({
  label,
  options,
  selectedValue,
  onSelect
}: {
  label: string;
  options: StyleOption<string>[];
  selectedValue: string;
  onSelect: (value: string) => void;
}) {
  return (
    <section aria-label={label} style={{ display: "grid", gap: 12 }}>
      <h2 style={{ margin: 0, fontSize: "1rem" }}>{label}</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            aria-pressed={option.value === selectedValue}
            onClick={() => onSelect(option.value)}
            style={{
              border:
                option.value === selectedValue
                  ? "1px solid #0f172a"
                  : "1px solid rgba(148, 163, 184, 0.35)",
              borderRadius: 999,
              padding: "10px 14px",
              background: option.value === selectedValue ? "#e2e8f0" : "#fff",
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

function SelectionGroup<T extends string>({
  label,
  options,
  selectedValue,
  onSelect
}: {
  label: string;
  options: StyleOption<T>[];
  selectedValue: T;
  onSelect: (value: T) => void;
}) {
  return (
    <OptionGroup
      label={label}
      options={options}
      selectedValue={selectedValue}
      onSelect={(value) => onSelect(value as T)}
    />
  );
}

interface StyleControlsProps {
  selection: StyleSelection;
  onSelectionChange: (selection: StyleSelection) => void;
}

export default function StyleControls({
  selection,
  onSelectionChange
}: StyleControlsProps) {
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

      <SelectionGroup
        label="Overall Style"
        options={overallStyleOptions}
        selectedValue={selection.overallStyle}
        onSelect={(overallStyle) => onSelectionChange({ ...selection, overallStyle })}
      />
      <SelectionGroup
        label="Color Tendency"
        options={colorTendencyOptions}
        selectedValue={selection.colorTendency}
        onSelect={(colorTendency) => onSelectionChange({ ...selection, colorTendency })}
      />
      <SelectionGroup
        label="Component Character"
        options={componentCharacterOptions}
        selectedValue={selection.componentCharacter}
        onSelect={(componentCharacter) =>
          onSelectionChange({ ...selection, componentCharacter })
        }
      />
      <SelectionGroup
        label="Motion Intensity"
        options={motionIntensityOptions}
        selectedValue={selection.motionIntensity}
        onSelect={(motionIntensity) => onSelectionChange({ ...selection, motionIntensity })}
      />
    </div>
  );
}
