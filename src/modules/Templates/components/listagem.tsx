import {
  ActionButtons,
  IconfigButton,
} from "../../../components/Tabela/ActionButtons";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {
  MUIDataTableColumn,
  MUIDataTableColumnDef,
  MUIDataTableOptions,
} from "mui-datatables";
import { BotaoPadrao } from "../../../components/Formulario/BotaoPadrao";
import { TabelaPadrao } from "../../../components/Tabela/TabelaPadrao";
import { User } from "../templateTypes";
import { memo } from "react";
import { UserHasPermission } from "../../../components/UserHasPermission";

interface ListagemProps {
  isLoading: boolean;
  users: User[] | undefined;
  handleOpenModal: () => void;
}

function ListagemComponente({
  users,
  isLoading,
  handleOpenModal,
}: ListagemProps) {
  const actionButtonsConfig: IconfigButton[] = [
    {
      icon: <EditOutlinedIcon fontSize="inherit" />,
      action: handleOpenModal,
      permission: "editar",
    },
    {
      icon: <DeleteOutlineOutlinedIcon />,
      color: "red",
      action: () => console.log("teste Deletar"),
    },
  ];

  const tableActionsColumn: MUIDataTableColumn = {
    name: "Ações",
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value, tableMeta, updateValue) => (
        <ActionButtons config={actionButtonsConfig} />
      ),
    },
  };

  const columns: MUIDataTableColumnDef[] = [
    "ID",
    "Nome",
    "Email",
    "Data de Criação",
    "Perfil",
    "UF",
    "Município",
    tableActionsColumn,
  ];

  const options: MUIDataTableOptions = {
    // filterType: "checkbox",
  };

  return (
    <TabelaPadrao
      titulo="Lista de usuários"
      data={users ?? []}
      columns={columns}
      options={options}
      isLoading={isLoading}
      titleButtons={
        <UserHasPermission childPermission={"cadastrar"}>
          <BotaoPadrao onClick={handleOpenModal}>Criar Usuário</BotaoPadrao>
        </UserHasPermission>
      }
    />
  );
}

//Para impedir a listagem de renderizar quando abrir ou fechar a modal
//se retornar true, ele não renderiza
//se der false ele renderiza
export const Listagem = memo(ListagemComponente, (prevProps, nextProps) => {
  /*  console.log(
      "prev:",
      prevProps.users?.length,
      "next:",
      nextProps.users?.length
    );*/

  return (
    prevProps.isLoading === nextProps.isLoading &&
    prevProps.users?.length === nextProps.users?.length
  );
});
