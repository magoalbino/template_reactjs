import { Box, Container, Typography } from "@mui/material";

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        textAlign: "center",
        position: "absolute",
        py: 1.25,
        px: 1.25,
        mt: "auto",
        color: (theme) => theme.palette.primary.contrastText,
        background: (theme) => theme.palette.primary.main,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body2">Ministério da Cidadania</Typography>
      </Container>
    </Box>
  );
}
