import {Controller, useFormContext} from "react-hook-form";

import {FormControlProps, GridProps, TextField} from "@mui/material";
import {DatePicker, DatePickerProps} from "@mui/lab";
import {FieldContainer} from "../../FieldContainer";

/*
- exemplo de uso:
 <RHFDate
    name={"data_teste"}
    label={"Data"}
  />
*/

type IDatePickerProps = Omit<
  DatePickerProps,
  "onChange" | "value" | "renderInput" | "date" | "openPicker" | "rawValue"
>;

interface IReactHookFormDateProps extends IDatePickerProps {
  name: string;
  label: string;
  formControlProps?: FormControlProps;
  gridProps?: GridProps;
}

export function RHFDate({
  name,
  label,
  formControlProps,
  gridProps,
  ...datePickerProps
}: IReactHookFormDateProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <FieldContainer formControlProps={formControlProps} gridProps={gridProps}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            label={label}
            minDate={new Date("2015-01-01")}
            maxDate={new Date("2030-01-01")}
            OpenPickerButtonProps={{ color: "primary" }}
            {...datePickerProps}
            renderInput={(params) => (
              <TextField
                {...params}
                error={!!errors[name]}
                helperText={errors[name]?.message}
              />
            )}
            {...field}
          />
        )}
      />
    </FieldContainer>
  );
}
