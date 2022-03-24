import { Grid, Paper, PaperProps } from "@mui/material";
import { FormEvent, FormEventHandler, ReactNode } from "react";

interface FormContainerProps extends PaperProps {
  children: ReactNode;
  onSubmitHandler?: FormEventHandler;
}

export function FormContainer({
  children,
  onSubmitHandler,
  sx,
  ...paperProps
}: FormContainerProps) {
  return (
    <Paper
      sx={{
        backgroundColor: "background.form",
        my: 2,
        p: 2,
        boxShadow: "none",
        border: "1px solid #D4D4D4",
        width: "100%",
        ...sx,
      }}
      {...paperProps}
    >
      <Grid
        component="form"
        container
        spacing={2}
        onSubmit={(event: FormEvent<Element>) => {
          if (onSubmitHandler) {
            onSubmitHandler(event);
          }
        }}
      >
        {children}
      </Grid>
    </Paper>
  );
}
