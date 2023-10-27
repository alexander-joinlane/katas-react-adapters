import { useState } from "react";
import ClumsyDateInput from "../clumsy-components/DateInput";
// import DateInput from "./DateInput";
import DateInput from "../exercise/DateInput";
import { Button } from "@mui/material";
import { DateTime } from "luxon";
// import ClumsyEnumSelector from "../clumsy-components/EnumSelector";
// import EnumSelector from "./EnumSelector";
import Color from "../enums/Color";

type FormData = {
  clumsyDate: string;
  date: Date;
  dateA_NY: Date;
  dateA_K: Date;
  clumsyEnum: string;
  enum: Color;
};

type FormProps = {
  onSubmit: (fd: FormData) => void;
};

function Form({ onSubmit }: FormProps) {
  const [form, setForm] = useState<FormData>({
    clumsyDate: DateTime.now().toFormat("yyyy-MM-dd"),
    date: DateTime.now().setZone("UTC").startOf("day").toJSDate(),
    dateA_NY: DateTime.now()
      .setZone("America/New_York")
      .startOf("day")
      .toJSDate(),
    dateA_K: DateTime.now().setZone("Asia/Kolkata").startOf("day").toJSDate(),
    clumsyEnum: "Blue",
    enum: Color.enum.Red,
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      style={{ display: "flex", flexDirection: "column", gap: 12 }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          columnGap: 12,
          rowGap: 12,
        }}
      >
        <ClumsyDateInput
          value={form.clumsyDate}
          onChange={(v) => {
            setForm((prevForm) => ({
              ...prevForm,
              clumsyDate: v,
            }));
          }}
        />

        <DateInput
          value={form.date}
          onChange={(v) => {
            setForm((prevForm) => ({
              ...prevForm,
              date: v,
            }));
          }}
          color="red"
        />
        {/* <DateInput
          value={form.dateA_NY}
          onChange={(v) => {
            setForm((prevForm) => ({
              ...prevForm,
              dateA_NY: v,
            }));
          }}
          label={"DateInput (America/New_York)"}
          timeZone="America/New_York"
        />
        <DateInput
          value={form.dateA_K}
          onChange={(v) => {
            setForm((prevForm) => ({
              ...prevForm,
              dateA_K: v,
            }));
          }}
          label={"DateInput (Asia/Kolkata)"}
          timeZone="Asia/Kolkata"
        /> */}
        {/* <ClumsyEnumSelector
          value={form.clumsyEnum}
          onChange={(v) => {
            setForm((prevForm) => ({
              ...prevForm,
              clumsyEnum: v,
            }));
          }}
          options={["Red", "Green", "Blue", "White", "Black"]}
        />
        <EnumSelector
          value={form.enum}
          onChange={(v) => {
            setForm((prevForm) => ({
              ...prevForm,
              enum: v,
            }));
          }}
          options={Color.Values}
        /> */}
      </div>

      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
}

export default Form;
