import { AppBar, Grid, Toolbar } from "@mui/material";
import React from "react";
import { MenuButton } from "./components/MenuButton";
import { DescSistema } from "./components/DescSistema";
import { LogoutButton } from "./components/LogoutButton";

export function Header() {
  return (
    <AppBar
      sx={{
        boxShadow: "0 1px 10px 1px rgba(0,0,0,.1)",
        position: "fixed",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <Grid container alignItems="center">
          <MenuButton />
          <Grid item sx={{ flexGrow: 1 }}>
            <Grid container alignItems="center" justifyContent="space-between">
              <DescSistema />
              <LogoutButton />
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
