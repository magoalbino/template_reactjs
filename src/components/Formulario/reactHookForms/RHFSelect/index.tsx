import {FilledTextFieldProps, FormControlProps, GridProps, MenuItem, TextField,} from "@mui/material";
import {ReactNode} from "react";
import {useFormContext} from "react-hook-form";
import {FieldContainer} from "../../FieldContainer";

/*
*  Use example:
  <RHFSelect
    id="testeselect"
    name="testeselect"
    label="Teste Select"
    error={!!errors.testeselect}
    helperText={errors.testeselect?.message}
    {...register("testeselect")}
  >
    <MenuItem value="">Escolha uma opção</MenuItem>
    <MenuItem value="3">03 teste</MenuItem>
    <MenuItem value="6">06 teste</MenuItem>
  </RHFSelect>
*
* */

export type IFieldPropsNoVariant = Omit<FilledTextFieldProps, "variant">;

interface IReactHookFormSelectProps extends IFieldPropsNoVariant {
  name: string;
  label: string;
  children: ReactNode;
  isLoading?: boolean;
  formControlProps?: FormControlProps;
  gridProps?: GridProps;
}

export function RHFSelect({
  name,
  label,
  children,
  formControlProps,
  isLoading,
  gridProps,
  ...textFieldProps
}: IReactHookFormSelectProps) {
  const {
    formState: { errors },
    register,
  } = useFormContext();
  return (
    <FieldContainer formControlProps={formControlProps} gridProps={gridProps}>
      <TextField
        select
        variant="filled"
        label={label}
        error={!!errors[name]}
        helperText={errors[name]?.message}
        {...textFieldProps}
        {...register(name, { onChange: textFieldProps.onChange })}
      >
        <MenuItem value="" selected disabled>
          {isLoading ? "Carregando..." : "Escolha uma opção"}
        </MenuItem>
        {children}
      </TextField>
    </FieldContainer>
  );
}

/*const NestedInput = memo(
  ({ register, formState: { isDirty } }: UseFormReturn) => (
    <div>
      <input {...register("test")} />
      {isDirty && <p>This field is dirty</p>}
    </div>
  ),
  (prevProps, nextProps) =>
    prevProps.formState.isDirty === nextProps.formState.isDirty
);*/
