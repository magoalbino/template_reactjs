import { Grid, IconButton, Tooltip } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import React from "react";
import { useAuth } from "../../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export function LogoutButton() {
  const {
    logout,
    auth: { autenticado },
  } = useAuth();
  const navigate = useNavigate();

  function onLogout() {
    logout();
    navigate("/");
  }

  if (!autenticado) {
    return null;
  }

  return (
    <Grid item>
      <Tooltip title="Sair">
        <span>
          <IconButton
            color="secondary"
            size="large"
            edge="start"
            onClick={onLogout}
          >
            <LogoutIcon fontSize="inherit" />
          </IconButton>
        </span>
      </Tooltip>
    </Grid>
  );
}
