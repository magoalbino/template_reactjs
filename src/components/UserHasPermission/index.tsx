import { useAuth } from "../../hooks/useAuth";
import { Fragment, ReactNode } from "react";
import { useLocation } from "react-router-dom";

export type IUserPermissions = "cadastrar" | "editar" | "excluir" | "listar";

/**
 * children: componente que precisa do controle de permissão
 * childPermission: permissão que o usuário precisa ter para ver o componente
 */
interface IUserHasPermissionProps {
  children: ReactNode;
  childPermission?: IUserPermissions;
}

export function UserHasPermission({
  childPermission,
  children,
}: IUserHasPermissionProps) {
  const {
    auth: { userRoutes },
  } = useAuth();

  const location = useLocation();

  const currentRoute = userRoutes.find((r) => {
    return r.name === location.pathname.substring(1);
  });

  const userHasPermission = childPermission
    ? currentRoute?.permissions.includes(childPermission)
    : true;

  if (userHasPermission) {
    return <Fragment>{children}</Fragment>;
  } else {
    return <Fragment />;
  }
}
