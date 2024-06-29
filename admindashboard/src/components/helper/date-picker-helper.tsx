import type { ReactNode } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { useResponsive } from "@components/hooks";

export const DatePickerHelper = ({ value }: { value?: Date }): ReactNode => {
  const upMd = useResponsive("up", "md");

  return upMd ? (
    <DatePicker defaultValue={value} />
  ) : (
    <MobileDatePicker defaultValue={value} />
  );
};
