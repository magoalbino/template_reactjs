export interface IRoutesNames {
  [key: string]: {
    name: string;
    path: string;
  };
}

export const privateRoutesNames: IRoutesNames = {
  home: {
    name: "home",
    path: "/home",
  },
  templates: {
    name: "templates",
    path: "/templates",
  },
  teste1: {
    name: "teste1",
    path: "/teste1",
  },
  teste2: {
    name: "teste2",
    path: "/teste2",
  },
  teste3: {
    name: "teste3",
    path: "/teste3",
  },
};

export const publicRoutesNames: IRoutesNames = {
  index: {
    name: "index",
    path: "/",
  },
  autenticando: {
    name: "autenticando",
    path: "/autenticando",
  },
};
