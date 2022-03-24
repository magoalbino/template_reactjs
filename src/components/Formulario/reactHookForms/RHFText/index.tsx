import { FormControlProps, GridProps, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { IFieldPropsNoVariant } from "../RHFSelect";
import { FieldContainer } from "../../FieldContainer";

interface ReactHookFormTextProps extends IFieldPropsNoVariant {
  name: string;
  label: string;
  formControlProps?: FormControlProps;
  gridProps?: GridProps;
}

export function RHFText({
  name,
  label,
  formControlProps,
  gridProps,
  ...textFieldProps
}: ReactHookFormTextProps) {
  const {
    formState: { errors },
    register,
  } = useFormContext();
  return (
    <FieldContainer formControlProps={formControlProps} gridProps={gridProps}>
      <TextField
        label={label}
        error={!!errors[name]}
        helperText={errors[name]?.message}
        {...register(name)}
        {...textFieldProps}
      />
    </FieldContainer>
  );
}
