import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {Box, Grid, Typography} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import {useAuth} from "../../../hooks/useAuth";

/*
 * Página de redirecionamento quando o usuário faz o login no govbr
 * Aqui vamos fazer a requisição para buscar os dados do usuário (cpf, nome, token)
 * E depois fazer a requisição para o backend para fazer as validações e pegar o Perfil
 * E então redireicionar para a home de usuário autenticado
 * */

export default function LoginProcess() {
  const [searchParams] = useSearchParams();
  const {
    login,
    auth: { autenticado },
  } = useAuth();
  const code = searchParams.get("code");

  useEffect(() => {
    if (code) {
      login(code);
    }
  }, [code]);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent={"center"}
      sx={{
        bgcolor: (theme) => theme.palette.background.dark,
        my: -2,
        mx: -3,
        width: `calc(100% + 48px)`, //pra ignorar o espaçamento padrão (utilizado nas outras telas)
        flexGrow: 1,
      }}
    >
      <Grid
        item
        sx={{
          bgcolor: (theme) => theme.palette.background.default,
          border: "1px solid #D4D4D4",
          borderRadius: "10px",
          padding: 5,
          textAlign: "center",
        }}
      >
        <Box>
          <Typography variant={"h5"} mb={2}>
            Aguarde um momento enquanto processamos a autenticação...
          </Typography>
          {!autenticado ? (
            <CircularProgress size={22} color={"secondary"} />
          ) : (
            <CheckOutlinedIcon color={"success"} />
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
