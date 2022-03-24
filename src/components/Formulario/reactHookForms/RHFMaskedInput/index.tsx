import {FieldContainer} from "../../FieldContainer";
import {FormControlProps, GridProps, TextField} from "@mui/material";
import {Controller, useFormContext} from "react-hook-form";
import NumberFormat from "react-number-format";

/*
 * Integração do Mui com react-number-format e react-hook-form
 * https://github.com/s-yadav/react-number-format
 * Recomendada na doc do mui:
 * https://mui.com/pt/components/text-fields/#heading-integration-with-3rd-party-input-libraries
 * */

interface RHFMaskedInputProps {
  name: string;
  label: string;
  format: string;
  formControlProps?: FormControlProps;
  gridProps?: GridProps;
}

export function RHFMaskedInput({
  name,
  label,
  format,
  formControlProps,
  gridProps,
}: RHFMaskedInputProps) {
  const {
    formState: { errors },
    control,
  } = useFormContext();

  return (
    <FieldContainer formControlProps={formControlProps} gridProps={gridProps}>
      <Controller
        name={name}
        control={control}
        render={({ field: { name, ...rest } }) => (
          <NumberFormat
            label={label}
            format={format}
            error={!!errors[name]}
            helperText={errors[name]?.message}
            customInput={TextField}
            {...rest}
          />
        )}
      />
    </FieldContainer>
  );
}
