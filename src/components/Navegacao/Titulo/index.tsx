import { Box, Link as MuiLink, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface ITituloProps {
  titulo: string;
}

export function Titulo({ titulo }: ITituloProps) {
  const navigate = useNavigate();

  return (
    <Box sx={{ my: 3 }} display="flex" justifyContent="space-between">
      <Typography variant="h6">{titulo}</Typography>
      <MuiLink
        sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        underline="hover"
        color="secondary"
        onClick={() => navigate(-1)}
      >
        <ArrowBackIcon sx={{ fontSize: "15px" }} />
        &nbsp;Voltar
      </MuiLink>
    </Box>
  );
}

// export const Titulo = memo(TituloComponent, (prevProps, nextProps) => {
//   return prevProps.titulo === nextProps.titulo;
// });
