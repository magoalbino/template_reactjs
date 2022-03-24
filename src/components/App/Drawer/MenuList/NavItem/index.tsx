import { IMenuItem } from "../../../../../menuItems/types";
import { Link, useLocation } from "react-router-dom";
import { ListItemButton, ListItemText, Typography } from "@mui/material";
import { useDrawer } from "../../hooks/useDrawer";

interface NavItemProps {
  item: IMenuItem;
  level?: number;
}

export function NavItem({ item, level = 0 }: NavItemProps) {
  const { handleCloseDrawer } = useDrawer();
  const location = useLocation();

  return (
    <ListItemButton
      key={item.title}
      component={Link}
      to={item.path ?? "/"}
      onClick={() => {
        handleCloseDrawer();
        // setTabValue(i);
      }}
      selected={item.path === location.pathname}
      sx={{
        pl: `${level * 24}px`,
        "&:before": {
          content: "''",
          position: "absolute",
          left: `${(level - 1) * 24}px`,
          top: 0,
          height: "100%",
          width: "1px",
          opacity: 1,
          background: "rgba(125, 125, 125, 0.14)",
        },
      }}
    >
      <ListItemText
        primary={<Typography variant={"body1"}>{item.title}</Typography>}
      />
    </ListItemButton>
  );
}
