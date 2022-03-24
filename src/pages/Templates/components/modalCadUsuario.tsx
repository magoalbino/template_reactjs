import { Box } from "@mui/material";
import { ModalPadrao } from "../../../components/Modal/ModalPadrao";
import { RHFDate } from "../../../components/Formulario/reactHookForms/RHFDate";
import { FormProvider, useForm } from "react-hook-form";
import { ComboUfMunicipio } from "../../../components/Formulario/commons/ComboUfMunicipio";
import { FormContainer } from "../../../components/Formulario/FormContainer";
import { RHFText } from "../../../components/Formulario/reactHookForms/RHFText";
import { RHFAutocomplete } from "../../../components/Formulario/reactHookForms/RHFAutocomplete";
import { useSnackbar } from "notistack";
import { memo } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RHFMaskedInput } from "../../../components/Formulario/reactHookForms/RHFMaskedInput";
import { useMutation } from "react-query";
import { postUser } from "../hooks/useTemplateFunctions";
import { queryClient } from "../../../services/queryClient";

export interface IFormCadUsuario {
  uf: string;
  municipio: string;
  dataCadastro: Date | null;
  email: string;
  testeselecao: {} | null;
  cpf: string;
}

interface ITemplateModalProps {
  open: boolean;
  onClose: () => void;
}

const defaultValues = {
  uf: "",
  municipio: "",
  dataCadastro: null,
  email: "",
  perfil: "",
  cpf: "",
};

const cadUsuarioFormSchema = yup.object().shape({
  uf: yup.string().required("UF é obrigatório"),
  dataCadastro: yup
    .date()
    .nullable()
    // .optional()
    // .min(new Date("01/01/2014"), "Data inválida")y
    // .max(new Date("31/12/2030"), "Data inválida")
    .typeError("Data inválida")
    .required("Data de cadastro é obrigatória"),
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  perfil: yup
    .object()
    .nullable()
    .shape({
      cod: yup.number().required("Perfil é obrigatório"),
    })
    .required("Perfil é obrigatório"),
  cpf: yup.string().required("CPF é obrigatório"),
});

function ModalCadUsuarioComponent({ open, onClose }: ITemplateModalProps) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const rhfmethods = useForm<IFormCadUsuario>({
    defaultValues,
    resolver: yupResolver(cadUsuarioFormSchema),
  });

  const cadastrarUsuarioMutation = useMutation(postUser, {
    onMutate: () => {},
    onSuccess: () => {
      queryClient.invalidateQueries("users");
      const key = enqueueSnackbar("Alteração realizada com sucesso", {
        variant: "success",
        onClick: () => closeSnackbar(key),
      });
      onClose();
    },
  });

  const handleCadastrar = async (values: IFormCadUsuario) => {
    await cadastrarUsuarioMutation.mutateAsync(values);
  };

  function handleCancelButton() {
    rhfmethods.reset();
  }

  const modalContent = (
    <FormProvider {...rhfmethods}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <FormContainer>
          <ComboUfMunicipio gridProps={{ lg: 6 }} />
          <RHFDate
            name="dataCadastro"
            label="Data de Cadastro"
            gridProps={{ lg: 6 }}
          />
          <RHFText
            gridProps={{ lg: 6 }}
            type="email"
            name="email"
            label="E-mail"
          />
          <RHFAutocomplete
            name="perfil"
            label="Perfil"
            options={[
              { cod: 1, desc: "Administrador" },
              { cod: 2, desc: "Parlamentar" },
              { cod: 3, desc: "Gestor Estadual" },
            ]}
            gridProps={{ lg: 6 }}
            customOnChange={() => console.log("Autocomplete custom change")}
          />
          <RHFMaskedInput
            name="cpf"
            label="CPF"
            format="###.###.###-##"
            gridProps={{ lg: 6 }}
          />
        </FormContainer>
      </Box>
    </FormProvider>
  );

  return (
    <ModalPadrao
      open={open}
      onClose={() => {
        onClose();
        rhfmethods.reset();
      }}
      title="Cadastrar Usuário"
      content={modalContent}
      isLoading={cadastrarUsuarioMutation.isLoading}
      handleConfirm={rhfmethods.handleSubmit(handleCadastrar)}
      handleCancel={handleCancelButton}
    />
  );
}

export const ModalCadUsuario = memo(
  ModalCadUsuarioComponent,
  (prevProps, nextProps) => {
    return prevProps.open === nextProps.open;
  }
);
