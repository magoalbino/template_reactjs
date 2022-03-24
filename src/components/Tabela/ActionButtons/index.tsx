import { Grid, IconButton } from "@mui/material";
import { ReactNode } from "react";
import { IUserPermissions, UserHasPermission } from "../../UserHasPermission";

export interface IconfigButton {
  icon: ReactNode;
  color?: string;
  action: () => void;
  permission?: IUserPermissions;
}

interface IActionButtonsProps {
  config: IconfigButton[];
}

export function ActionButtons({ config }: IActionButtonsProps) {
  return (
    <Grid container aria-label="Ações">
      <Grid item display="flex" gap={2}>
        {config.map((config, index) => (
          <UserHasPermission key={index} childPermission={config.permission}>
            <IconButton
              sx={{
                border: " 2px solid",
                borderRadius: "10px",
                color: (theme) => config.color ?? theme.palette.secondary.main,
              }}
              onClick={(e) => {
                e.stopPropagation();
                config.action();
              }}
            >
              {config.icon}
            </IconButton>
          </UserHasPermission>
        ))}
      </Grid>
    </Grid>
  );
}
