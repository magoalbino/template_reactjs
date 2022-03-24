import { Grid } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { FormContainer } from "../../../components/Formulario/FormContainer";
import { ComboUfMunicipio } from "../../../components/Formulario/commons/ComboUfMunicipio";
import { BotaoPadrao } from "../../../components/Formulario/BotaoPadrao";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { IFiltroPesquisa } from "../templateTypes";
import { EraserIcon } from "../../../components/Formulario/icons/EraserIcon";
import { memo } from "react";

interface PesquisaProps {
  handleSetUfMunicipio: (param: IFiltroPesquisa) => void;
  isLoading: boolean;
}

const defaultValues: IFiltroPesquisa = {
  uf: "",
  municipio: "",
};

function PesquisaComponente({
  handleSetUfMunicipio,
  isLoading,
}: PesquisaProps) {
  const rhfmethods = useForm<IFiltroPesquisa>({
    defaultValues,
  });

  const handlePesquisar = async (values: IFiltroPesquisa) => {
    handleSetUfMunicipio(values);
  };

  return (
    <FormProvider {...rhfmethods}>
      <FormContainer onSubmitHandler={rhfmethods.handleSubmit(handlePesquisar)}>
        <ComboUfMunicipio />
        <Grid item xs={12}>
          <Grid
            container
            spacing={2}
            alignItems={"center"}
            justifyContent={"flex-end"}
          >
            <BotaoPadrao
              variant={"outlined"}
              size={"large"}
              color={"neutral"}
              startIcon={<EraserIcon />}
              onClick={() => {
                rhfmethods.reset();
              }}
            >
              Limpar Dados
            </BotaoPadrao>
            <BotaoPadrao
              loading={isLoading}
              variant={"outlined"}
              size={"large"}
              startIcon={<SearchOutlinedIcon />}
              type={"submit"}
            >
              Pesquisar
            </BotaoPadrao>
          </Grid>
        </Grid>
      </FormContainer>
    </FormProvider>
  );
}

export const Pesquisa = memo(PesquisaComponente, (prevProps, nextProps) => {
  return prevProps.isLoading === nextProps.isLoading;
});
