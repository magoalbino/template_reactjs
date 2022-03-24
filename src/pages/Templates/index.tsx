import { Breadcrumbs } from "../../components/Navegacao/Breadcrumbs";
import { Titulo } from "../../components/Navegacao/Titulo";
import { getUsers } from "./hooks/useTemplateFunctions";
import { useState } from "react";
import { Listagem } from "./components/listagem";
import { ModalCadUsuario } from "./components/modalCadUsuario";
import { Pesquisa } from "./components/pesquisa";
import { useQuery } from "react-query";
import { IFiltroPesquisa } from "./templateTypes";
import { UserHasPermission } from "../../components/UserHasPermission";

export default function Templates() {
  const [openModal, setOpenModal] = useState(false);
  const [ufMunicipio, setUfMunicipio] = useState({
    uf: "",
    municipio: "",
  });

  const usersQuery = useQuery(
    ["users", ufMunicipio],
    () => getUsers(ufMunicipio),
    {
      staleTime: 1000 * 60 * 10, // 10 minutos
    }
  );

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  function handleSetUfMunicipio(ufMunicipio: IFiltroPesquisa) {
    setUfMunicipio(ufMunicipio);
  }

  return (
    <>
      <Breadcrumbs
        current="Templates"
        prevCrumbs={[{ name: "Teste", to: "/" }]}
      />
      <Titulo titulo="Templates" />

      <Pesquisa
        handleSetUfMunicipio={handleSetUfMunicipio}
        isLoading={usersQuery.isLoading || usersQuery.isFetching}
      />

      <UserHasPermission childPermission={"listar"}>
        <Listagem
          isLoading={usersQuery.isLoading || usersQuery.isFetching}
          users={usersQuery.data?.users}
          handleOpenModal={handleOpenModal}
        />
      </UserHasPermission>

      {openModal && (
        <ModalCadUsuario open={openModal} onClose={handleCloseModal} />
      )}

      {/*
      // só para ver o erro que tava dando no celular
      {usersQuery.error && (
        <ModalPadrao
          open={true}
          onClose={() => {
            handleCloseModal();
          }}
          title={"Cadastrar Usuário"}
          content={JSON.stringify(usersQuery.error)}
        />
      )}*/}
    </>
  );
}
