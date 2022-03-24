import { useAuth } from "../../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export function ControleRotasPublicas() {
  const {
    auth: { autenticado },
  } = useAuth();

  /*const navigatePathname = useMemo(() => {
    const storedLocation = window.localStorage.getItem("location");
    console.log("stored", storedLocation);

    if (storedLocation) {
      window.localStorage.setItem("location", "");
      console.log("ué", storedLocation);
      return storedLocation;
    }

    return "/home";
  }, [location]);*/

  if (autenticado) {
    let storedLocation = window.localStorage.getItem("location");
    storedLocation = storedLocation ? JSON.parse(storedLocation) : "";

    return <Navigate to={storedLocation || "/home"} replace />;
  }

  return <Outlet />;
}
