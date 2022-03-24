import { IMenuItem } from "./types";

export const gestor: IMenuItem = {
  id: "grupo-gestor",
  name: "",
  title: "Gestor",
  type: "group",
  children: [
    {
      id: "collapse-outros",
      name: "",
      title: "Outros",
      type: "collapse",
      children: [
        {
          id: "item-teste1",
          name: "teste1",
          title: "Teste 1",
          type: "item",
          path: "/teste1",
        },
        {
          id: "item-teste2",
          name: "teste2",
          title: "Teste 2",
          type: "collapse",
          path: "/teste2",
          children: [
            {
              id: "item-teste4",
              name: "teste4",
              title: "Teste 4",
              type: "item",
              path: "/teste4",
            },
          ],
        },
        {
          id: "item-teste3",
          name: "teste3",
          title: "Teste 3",
          type: "item",
          path: "/teste3",
        },
      ],
    },
  ],
};
