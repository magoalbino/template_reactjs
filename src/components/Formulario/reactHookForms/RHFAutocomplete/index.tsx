import {Controller, useFormContext} from "react-hook-form";
import {Autocomplete, AutocompleteProps, FormControlProps, GridProps, TextField,} from "@mui/material";
import * as React from "react";
import {AutocompleteRenderInputParams} from "@mui/material/Autocomplete/Autocomplete";
import {FieldContainer} from "../../FieldContainer";

/*
* Integração do autocomplete (select com pesquisa) do mui com react-hook-forms
* Documentação:
* https://mui.com/pt/components/autocomplete/
* */

type IAutoComplete = Omit<AutocompleteProps<any, any, any, any>, "renderInput">;

export interface IAutocompleteDefaultOption {
  cod: number;
  desc: string;
}

interface IReactHookFormAutocompleteProps extends IAutoComplete {
  name: string;
  label: string;
  options: IAutocompleteDefaultOption[] | Array<any>;
  isLoading?: boolean;
  customOnChange?: () => void;
  gridProps?: GridProps;
  formControlProps?: FormControlProps;
  renderInput?: (params: AutocompleteRenderInputParams) => React.ReactNode;
}

export function RHFAutocomplete({
                                  name,
                                  label,
                                  options,
                                  isLoading,
                                  defaultValue,
                                  gridProps,
                                  formControlProps,
                                  renderInput,
                                  customOnChange,
                                  ...autoCompleteProps
                                }: IReactHookFormAutocompleteProps) {
  const {
    control,
    watch,
    formState: {errors},
  } = useFormContext();
  const selectedValue = watch(name); //necessário para resetar a combo

  return (
    <FieldContainer formControlProps={formControlProps} gridProps={gridProps}>
      <Controller
        name={name}
        control={control}
        render={({field: {onChange, value, ref}}) => (
          <Autocomplete
            options={[value, ...options]}
            filterSelectedOptions
            loading={isLoading}
            getOptionLabel={(option) => option.desc || ""}
            isOptionEqualToValue={(option, value) => option.cod === value.cod}
            ref={ref}
            renderInput={(params) => (
              <TextField
                {...params}
                label={label}
                error={!!errors[name]}
                helperText={errors[name]?.message}
                variant="filled"
              />
            )}
            onChange={function (_, value) {
              if (value === null) {
                value = ""; //necessário pra não dar pau quando clicar em 'limpar'
              }
              if (customOnChange) {
                customOnChange();
              }
              onChange(value);
            }}
            value={selectedValue}
            selectOnFocus
            blurOnSelect
            handleHomeEndKeys
            loadingText="Carregando..."
            noOptionsText="Nenhuma opção encontrada"
            clearText="Limpar"
            openText="Abrir"
            {...autoCompleteProps}
          />
        )}
      />
    </FieldContainer>
  );
}
