import { RHFSelect } from "../reactHookForms/RHFSelect";
import { GridProps, MenuItem } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { useQuery } from "react-query";
import { api } from "../../../services/api";
import { RHFAutocomplete } from "../reactHookForms/RHFAutocomplete";

interface IComboUfMunicipio {
  gridProps?: GridProps;
}

/*interface IMunicipioRequest {
  cod: number;
  desc: string;
}*/

export async function getUf() {
  const { data } = await api.get("uf");
  return data;
}

export async function getMunicipio(uf: string) {
  const { data } = await api.get(`municipio/${uf}`);
  return data;
}

export function ComboUfMunicipio({ gridProps }: IComboUfMunicipio) {
  const { watch, setValue } = useFormContext();
  const selectUf = watch("uf");
  // const selectMunicipio = watch("municipio");

  const ufsQuery = useQuery(["ufs"], () => getUf(), {
    staleTime: 1000 * 60 * 60 * 24, //24h
  });

  const munQuery = useQuery(
    ["municipios", selectUf],
    () => getMunicipio(selectUf),
    {
      staleTime: 1000 * 60 * 60 * 24,
      enabled: !!selectUf,
    }
  );

  function handleChangeUf(uf: string) {
    setValue("municipio", "");
    setValue("uf", uf);
  }

  return (
    <>
      <RHFSelect
        id="uf"
        name="uf"
        label="UF"
        isLoading={ufsQuery.isLoading || ufsQuery.isFetching}
        value={selectUf}
        onChange={(event) => {
          handleChangeUf(event.target.value);
        }}
        gridProps={gridProps}
      >
        {ufsQuery.data &&
          ufsQuery.data.map((uf: string) => {
            return (
              <MenuItem key={uf} value={uf}>
                {uf}
              </MenuItem>
            );
          })}
      </RHFSelect>
      <RHFAutocomplete
        name="municipio"
        label="Município"
        options={munQuery.data || []}
        isLoading={munQuery.isLoading || munQuery.isFetching}
        disabled={!selectUf}
        gridProps={gridProps}
      />
      {/*<RHFSelect
        id="municipio"
        name="municipio"
        label="Município"
        isLoading={munQuery.isLoading || munQuery.isFetching}
        disabled={!selectUf}
        value={selectMunicipio}
        onChange={(event) => {
          handleChangeMun(event.target.value);
        }}
        gridProps={gridProps}
      >
        {munQuery.data &&
          munQuery.data.map((mun: IMunicipioRequest) => {
            return (
              <MenuItem key={mun.cod} value={mun.cod}>
                {mun.desc}
              </MenuItem>
            );
          })}
      </RHFSelect>*/}
    </>
  );
}
