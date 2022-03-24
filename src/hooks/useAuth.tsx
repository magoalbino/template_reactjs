import { createContext, ReactNode, useContext } from "react";
import useLocalStorage from "./useLocalStorage";
import { IMenuItem } from "../menuItems/types";
import { menuItems } from "../menuItems";
import { IUserPermissions } from "../components/UserHasPermission";

interface IAuthProviderProps {
  children: ReactNode;
}

export interface IUserRoutes {
  name: string;
  permissions: IUserPermissions[];
}

interface UserAuth {
  name: string;
  cpf: string;
  code: string;
  autenticado: boolean;
  userRoutes: IUserRoutes[];
  userMenuItems: IMenuItem[];
}

interface IAuthContextData {
  login: (code: string) => void;
  logout: () => void;
  auth: UserAuth;
}

const userAuthDefaultValues: UserAuth = {
  name: "",
  cpf: "",
  code: "",
  autenticado: false,
  userRoutes: [],
  userMenuItems: menuItems,
};

function filterMenuItems(
  allMenus: IMenuItem[],
  userMenu: IUserRoutes[]
): IMenuItem[] {
  if (userMenu === undefined || userMenu.length === 0) {
    return allMenus;
  }

  return allMenus.filter((menu: IMenuItem) => {
    let found = false;

    if (menu.children) {
      menu.children = filterMenuItems(menu.children, userMenu);
    } else {
      found = userMenu.some((usermenu) => {
        return usermenu.name === menu.name;
      });
    }

    return found || !!menu.children;
  });
}

const AuthContext = createContext({} as IAuthContextData);

function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }: IAuthProviderProps) {
  const [auth, setAuth] = useLocalStorage("auth", userAuthDefaultValues);

  function login(code: string) {
    // requisição para o govbr e depois para o backend, ou só para o backend?
    new Promise((resolve, reject) => setTimeout(resolve, 2000))
      .then((r) => {
        // const routes = ["home", "templates", "teste1", "teste2"]; //resposta da api

        const routes: IUserRoutes[] = [
          {
            name: "home",
            permissions: ["cadastrar", "editar", "excluir", "listar"],
          },
          {
            name: "templates",
            permissions: ["cadastrar", "editar", "excluir", "listar"],
          },
          {
            name: "teste1",
            permissions: ["cadastrar", "editar", "excluir", "listar"],
          },
          {
            name: "teste4",
            permissions: ["cadastrar", "editar", "excluir", "listar"],
          },
        ];

        const userMenuItems = filterMenuItems(menuItems, routes);

        const newAuthData: UserAuth = {
          ...auth,
          autenticado: true,
          userMenuItems: userMenuItems,
          userRoutes: routes, //controle das rotas privadas
        };

        setAuth(newAuthData);
      })
      .catch((error) => {
        setAuth({
          ...auth,
          autenticando: false,
        });

        // reject(error);
      });
  }

  function logout() {
    setAuth(userAuthDefaultValues);
    window.localStorage.setItem("location", "");
  }

  return (
    <AuthContext.Provider value={{ login, logout, auth }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth, AuthProvider };
