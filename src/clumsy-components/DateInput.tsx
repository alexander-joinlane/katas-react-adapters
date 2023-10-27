export type DateInputProps = {
  value: string;
  onChange: (newValue: string) => void;
  label?: string;
  color?: string;
};

/**
 * @deprecated The use not clumsy DateInput
 */
function DateInput({
  value,
  onChange,
  label = "ClumsyDateInput",
  color = "transparent",
}: DateInputProps) {
  return (
    <div
      style={{
        padding: 12,
        borderStyle: "solid",
        borderColor: "chartreuse",
        borderWidth: 1,
        backgroundColor: color,
      }}
    >
      <h2>{label}</h2>
      <input
        type="date"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <p>Your Chosen Date: {value}</p>
    </div>
  );
}

export default DateInput;
