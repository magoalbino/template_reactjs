import { Box, Grid, Typography, useTheme } from "@mui/material";
import { govBrConstants } from "../../../utils/constants";
import logo from "../../../assets/logo.png";
import { BotaoLoginGovBr } from "../components/BotaoLoginGovBr";

export default function LoginForm() {
  const theme = useTheme();

  const qs = [
    "response_type=code",
    `client_id=${govBrConstants.clientId}`,
    "scope=openid",
    `redirect_uri=${govBrConstants.redirectUri}`,
  ].join("&");

  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
        height: `calc(100vh - 70px - 80px)`,
        "@media (min-width: 0px) and (orientation: landscape)": {
          height: "calc(100vh - 40px - 60px)",
        },
        "@media (min-width: 600px)": {
          height: "calc(100vh - 80px - 80px)",
        },
      }}
    >
      <Grid container justifyContent={"center"} spacing={3}>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            [theme.breakpoints.up("md")]: {
              paddingRight: "5em",
            },
            [theme.breakpoints.down("md")]: {
              textAlign: "center",
            },
            textAlign: "right",
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              width: "300px",
              [theme.breakpoints.down("xs")]: {
                width: "75px",
              },
              [theme.breakpoints.down("md")]: {
                width: "150px",
              },
              marginBottom: "24px",
            }}
            flexGrow={1}
          />
          <Typography variant="body2">
            Sistema de Gestão de Transferências Voluntárias
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} display={"flex"} alignItems={"stretch"}>
          <Grid
            xs={12}
            md={8}
            lg={6}
            display={"flex"}
            direction={"column"}
            textAlign={"left"}
            alignItems={"stretch"}
            sx={{
              [theme.breakpoints.down("md")]: {
                textAlign: "center",
              },
              textAlign: "left",
            }}
          >
            <Typography variant={"body2"} flexGrow={1}>
              <b>Identifique-se no Template:</b>
            </Typography>
            <Grid item flexGrow={1}>
              <BotaoLoginGovBr
                link={`${govBrConstants.urlProvider}/authorize?${qs}`}
              />
            </Grid>
            <hr style={{ width: "100%" }} />
            <Typography variant={"body2"}>
              Clique no botão acima para entrar no sistema ou cadastrar sua
              senha de acesso.
              <br />
              <br />
              Não forneça sua senha para outra pessoa.
              <br />
              Ela é individual e intransferível.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
