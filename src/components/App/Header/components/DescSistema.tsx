import { Grid, Typography } from "@mui/material";
import React from "react";

export function DescSistema() {
  return (
    <Grid item>
      <Typography variant="h6" sx={{ fontSize: 18 }}>
        Template
      </Typography>
      <Typography variant="body2">Versão 1.8.4</Typography>
    </Grid>
  );
}