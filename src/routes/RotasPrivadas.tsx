import { RouteObject } from "react-router-dom";
import { lazy } from "react";
import { ControleRotasPrivadas } from "./components/ControleRotasPrivadas";
import { Box } from "@mui/material";
import { privateRoutesNames } from "./routesConstants";

let Home = lazy(() => {
  return import(/* webpackChunkName: "Home-chunk" */ "../pages/Home");
});
let Templates = lazy(() => {
  return import(
    /* webpackChunkName: "Templates-chunk" */ "../pages/Templates"
  );
});

export interface IRotas extends RouteObject {
  name: string;
  children?: IRotas[];
}

export const RotasPrivadas: IRotas = {
  name: "",
  element: <ControleRotasPrivadas />,
  children: [
    {
      name: privateRoutesNames.home.name,
      path: privateRoutesNames.home.path,
      element: <Home />,
    },
    {
      name: privateRoutesNames.templates.name,
      path: privateRoutesNames.templates.path,
      element: <Templates />,
    },
    {
      name: privateRoutesNames.teste1.name,
      path: privateRoutesNames.teste1.path,
      element: <Box>Teste 1</Box>,
    },
    {
      name: privateRoutesNames.teste2.name,
      path: privateRoutesNames.teste2.path,
      element: <Box>Teste 2</Box>,
    },
    {
      name: privateRoutesNames.teste3.name,
      path: privateRoutesNames.teste3.path,
      element: <Box>Teste 3</Box>,
    },
  ],
};
