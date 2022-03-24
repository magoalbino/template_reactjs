import { lazy } from "react";
import { ControleRotasPublicas } from "./components/ControleRotasPublicas";
import { IRotas } from "./RotasPrivadas";

const LoginFormGovBr = lazy(() => {
  return import(
    /* webpackChunkName: "LoginForm-chunk" */ "../modules/Login/LoginFormGovBr"
  );
});
const LoginProcess = lazy(() => {
  return import(
    /* webpackChunkName: "LoginProccess-chunk" */ "../modules/Login/LoginProcess"
  );
});

export const RotasPublicas: IRotas = {
  name: "",
  element: <ControleRotasPublicas />,
  children: [
    {
      name: "index",
      index: true,
      path: "/",
      element: <LoginFormGovBr />,
    },
    {
      name: "autenticando",
      path: "/autenticando",
      element: <LoginProcess />,
    },
  ],
};
