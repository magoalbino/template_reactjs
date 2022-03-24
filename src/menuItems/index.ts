import { IMenuItem } from "./types";
import { admin } from "./admin";
import { gestor } from "./gestor";
import { privateRoutesNames } from "../routes/routesConstants";

const index: IMenuItem = {
  id: "grupo-index",
  name: "",
  title: "",
  type: "group",
  children: [
    {
      id: "item-home",
      name: privateRoutesNames.home.name,
      path: privateRoutesNames.home.path,
      title: "Home",
      type: "item",
    },
  ],
};

export const menuItems = [index, admin, gestor];
