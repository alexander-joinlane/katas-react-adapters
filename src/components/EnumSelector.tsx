import { useMemo } from "react";
import ClumsyEnumSelector from "../clumsy-components/EnumSelector";
import { EnumLike } from "zod";

type Props<T extends EnumLike> = {
  value: T;
  onChange: (t: T) => void;
  options: T[];
  label?: string;
};

function isString<T extends EnumLike>(t: T | string): t is string {
  return typeof t === "string";
}

function isEnum<T>(t: string | T, options: T[]): t is T {
  return options.map(String).includes(t);
}

function EnumSelector<T extends EnumLike>({
  value,
  onChange,
  options,
  label = "EnumSelector",
}: Props<T>) {
  if (!isString(value)) {
    throw new Error("Incompatible Enum");
  }

  function handleChange(v: string) {
    if (isEnum(v, options)) {
      onChange(v);
    }
  }

  const clumsyOptions: string[] = useMemo(() => {
    return options.map(String);
  }, [options]);

  return (
    <ClumsyEnumSelector
      value={value}
      onChange={handleChange}
      options={clumsyOptions}
      label={label}
    />
  );
}

export default EnumSelector;
