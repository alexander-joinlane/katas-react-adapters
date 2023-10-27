import { DateTime } from "luxon";
import ClumsyDateInput, {
  DateInputProps,
} from "../clumsy-components/DateInput";
import { useMemo } from "react";

type Props = Omit<DateInputProps, "value" | "onChange" | "timeZone"> & {
  value: Date;
  onChange: (d: Date) => void;
  timeZone?: string;
};

function translateStringToDate(dateString: string, timeZone: string): Date {
  return DateTime.fromFormat(dateString, "yyyy-MM-dd", {
    zone: timeZone,
  }).toJSDate();
}

function translateDateToString(date: Date, timeZone: string): string {
  return DateTime.fromJSDate(date, { zone: timeZone }).toFormat("yyyy-MM-dd");
}

function DateInput({
  value,
  onChange,
  timeZone = "UTC",
  ...otherProps
}: Props) {
  const clumsyValue = useMemo(() => {
    return translateDateToString(value, timeZone);
  }, [value, timeZone]);

  return (
    <ClumsyDateInput
      value={clumsyValue}
      onChange={(dateString) => {
        onChange(translateStringToDate(dateString, timeZone));
      }}
      {...otherProps}
    />
  );
}

export default DateInput;
