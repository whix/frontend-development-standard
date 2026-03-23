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
  options: { value: string; label: string }[];
}) {
  return (
    <section className="style-group" aria-label={label}>
      <h2 className="style-group__title">{label}</h2>
      <div className="style-group__options">
        {options.map((option) => (
          <button key={option.value} type="button" className="style-chip">
            {option.label}
          </button>
        ))}
      </div>
    </section>
  );
}

export default function StyleControls() {
  return (
    <div className="style-controls">
      <div className="style-controls__header">
        <p className="style-controls__eyebrow">Configure</p>
        <h2>Style Controls</h2>
      </div>

      <OptionGroup label="Overall Style" options={overallStyleOptions} />
      <OptionGroup label="Color Tendency" options={colorTendencyOptions} />
      <OptionGroup label="Component Character" options={componentCharacterOptions} />
      <OptionGroup label="Motion Intensity" options={motionIntensityOptions} />
    </div>
  );
}
