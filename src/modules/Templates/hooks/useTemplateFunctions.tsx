import { api } from "../../../services/api";
import { IFiltroPesquisa, User } from "../templateTypes";
import { IFormCadUsuario } from "../components/modalCadUsuario";

type GetUsersResponse = {
  users: User[];
  totalCount?: number; //para paginação
};

export async function getUsers({
  uf,
  municipio,
}: IFiltroPesquisa): Promise<GetUsersResponse> {
  const { data } = await api.post("/users", { uf: uf, municipio: municipio });

  const users = data.users.map((user: User) => {
    return [
      user.id,
      user.nome,
      user.email,
      new Date(user.data_criacao).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
      user.perfil,
      user.uf,
      user.municipio.desc,
    ];
  });

  return {
    users,
  };
}

export async function postUser(user: IFormCadUsuario) {
  const response = await api.post("/user", { ...user });

  return response.data.user;
}
