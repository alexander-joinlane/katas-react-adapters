type Props = {
  value: string;
  options: string[];
  onChange: (v: string) => void;
  label?: string;
};

function EnumSelector({ value, options, label = "ClumsyEnumSelector" }: Props) {
  return (
    <div
      style={{
        padding: 12,
        borderStyle: "solid",
        borderColor: "chartreuse",
        borderWidth: 1,
      }}
    >
      <h2>{label}</h2>

      <select value={value} onChange={(e) => e.currentTarget.value}>
        {options.map((o) => (
          <option value={o} label={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

export default EnumSelector;
