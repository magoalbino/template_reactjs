import { SxProps, Typography, useTheme } from "@mui/material";
import { BotaoPadrao } from "../../../components/Formulario/BotaoPadrao";

interface IBotaoLoginGovBrProps {
  link: string;
}

export function BotaoLoginGovBr({ link }: IBotaoLoginGovBrProps) {
  const theme = useTheme();

  const anchorSx: SxProps = {
    borderRadius: "20px",
    minHeight: "40px",
    padding: "12px 24px",
    textTransform: "none",
    [theme.breakpoints.down("md")]: {
      margin: "24px 0",
    },
  };

  return (
    <BotaoPadrao sx={anchorSx} href={link} fullWidth>
      Entrar com&nbsp;<Typography sx={{ fontWeight: 900 }}>gov.br</Typography>
    </BotaoPadrao>
  );
}
