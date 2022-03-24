import { IUserRoutes, useAuth } from "../../hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AccessDenied } from "./AccessDenied";
import { IRoutesNames, privateRoutesNames } from "../routesConstants";

function filterUserRoutes(
  allRoutes: IRoutesNames,
  userRoutes: IUserRoutes[],
  locationPath: string
) {
  if (userRoutes === undefined || userRoutes.length === 0) {
    return allRoutes;
  }

  const routes = Object.entries(allRoutes);
  const locationInfo = routes.find((route) => {
    return route[1].path === locationPath;
  });

  if (locationInfo) {
    return userRoutes.some((r) => {
      return r.name === locationInfo[1].name;
    });
  }

  return false;
}

export function ControleRotasPrivadas() {
  const {
    auth: { autenticado, userRoutes },
  } = useAuth();
  const location = useLocation();

  if (!autenticado) {
    window.localStorage.setItem("location", JSON.stringify(location.pathname));
    console.log({ from: location });
    return <Navigate to="/" replace />;
  } else {
    if (!filterUserRoutes(privateRoutesNames, userRoutes, location.pathname)) {
      return <AccessDenied />;
    }
  }

  return <Outlet />;
}
