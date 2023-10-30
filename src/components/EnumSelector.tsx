import { useMemo } from "react";
import ClumsyEnumSelector from "../clumsy-components/EnumSelector";
import { ZodEnum } from "zod";

function EnumSelector<T extends ZodEnum<[string, ...string[]]>>({
  value,
  onChange,
  optionEnum,
  label = "EnumSelector",
}: {
  value: keyof T["Values"];
  onChange: (t: keyof T["Values"]) => void;
  optionEnum: T;
  label?: string;
}) {
  const clumsyOptions: string[] = useMemo(() => {
    return Object.keys(optionEnum.Values).map(String);
  }, [optionEnum]);

  const clumsyValue = useMemo(() => {
    return clumsyOptions.find((co) => co === value)!;
  }, [clumsyOptions, value]);

  function handleChange(cv: string) {
    onChange(cv);
  }

  return (
    <ClumsyEnumSelector
      value={clumsyValue}
      onChange={handleChange}
      options={clumsyOptions}
      label={label}
    />
  );
}

export default EnumSelector;
