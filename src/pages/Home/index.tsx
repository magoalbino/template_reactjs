import { Typography } from "@mui/material";

interface HomeProps {}

export default function Home(props: HomeProps) {
  return (
    <>
      <Typography>Página padrão para os usuários logados.</Typography>
      <Typography>Bem vindo!</Typography>
    </>
  );
}