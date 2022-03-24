export type User = {
  id: string | undefined;
  nome: string;
  email: string;
  data_criacao: string;
  perfil: string;
  uf: string;
  municipio: { cod: number; desc: string };
};

export interface IFiltroPesquisa {
  uf: string;
  municipio: string;
}
