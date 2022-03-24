import { IMenuItem } from "./types";
import { privateRoutesNames } from "../routes/routesConstants";

export const admin: IMenuItem = {
  id: "grupo-cad",
  name: "",
  title: "Cadastros",
  type: "group",
  children: [
    {
      id: "item-templpates",
      name: privateRoutesNames.templates.name,
      path: privateRoutesNames.templates.path,
      title: "Templates",
      type: "item",
    },
  ],
};
