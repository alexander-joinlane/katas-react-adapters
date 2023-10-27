import { useEffect, useState } from "react";
import ClumsyDateInput from "../clumsy-components/DateInput";
import { DateTime } from "luxon";

type DateInputProps = {
  value: Date;
  onChange: (d: Date) => void;
  label?: string;
  timeZone?: string;
};

function stringFromDate(date: Date, timeZone: string = "UTC") {
  const dateTime = DateTime.fromJSDate(date, { zone: timeZone });

  return dateTime.toFormat("yyyy-MM-dd");
}

function DateInput({
  value,
  onChange,
  label = "DateInput",
  timeZone = "UTC",
}: DateInputProps) {
  const [clumsyDate, setClumsyDate] = useState<string>(stringFromDate(value));

  useEffect(() => {
    setClumsyDate(stringFromDate(value, timeZone));
  }, [value, timeZone]);

  function handleChange(dateString: string) {
    const [year, month, day] = dateString.split("-").map(Number);

    onChange(
      DateTime.fromObject({ year, month, day }, { zone: timeZone }).toJSDate()
    );
  }

  return (
    <ClumsyDateInput label={label} value={clumsyDate} onChange={handleChange} />
  );
}

export default DateInput;
