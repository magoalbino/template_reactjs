import { Toolbar } from "@mui/material";
import { useLocation } from "react-router-dom";
import { ResponsiveDrawer } from "./components/ResponsiveDrawer";
import { useDrawer } from "./hooks/useDrawer";
import { MenuList } from "./MenuList";

export function Drawer() {
  const location = useLocation();
  const { handleCloseDrawer } = useDrawer();
  const perfil = "parlamentar"; //pegar perfil do usuário pelo hook

  return (
    <>
      <ResponsiveDrawer>
        <Toolbar />
        <MenuList />
        {/*<List disablePadding>
          {menuItems.map((item) => {
            // let temPerfil = item.roles.includes(perfil);

            // return temPerfil ? (
            return (
              <ListItemButton
                key={item.title}
                divider
                component={Link}
                to={"/home"}
                onClick={() => {
                  handleCloseDrawer();
                  // setTabValue(i);
                }}
                selected={item.path === location.pathname}
              >
                <ListItemText disableTypography>{item.title}</ListItemText>
              </ListItemButton>
            );
            // ) : null;
          })}
        </List>*/}
      </ResponsiveDrawer>
    </>
  );
}
