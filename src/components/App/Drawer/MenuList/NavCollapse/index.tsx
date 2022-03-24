import { IMenuItem } from "../../../../../menuItems/types";
import { useEffect, useState } from "react";
import { NavItem } from "../NavItem";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useLocation } from "react-router-dom";

interface NavCollapseProps {
  menu: IMenuItem;
  level: number;
}

export function NavCollapse({ menu, level }: NavCollapseProps) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const hasSelectedItem = menu.children?.some((item) => {
      return item.path === location.pathname;
    });

    setOpen(hasSelectedItem || false);
  }, [location.pathname, menu.children]);

  const menus = menu.children?.map((item) => {
    switch (item.type) {
      case "collapse":
        return <NavCollapse key={item.id} menu={item} level={level + 1} />;
      case "item":
        return <NavItem key={item.id} item={item} level={level + 1} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return (
    <>
      <ListItemButton
        sx={{
          mb: 0.5,
          alignItems: "center",
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
        onClick={handleClick}
      >
        <ListItemText primary={menu.title} />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{
            position: "relative",
            // "&:after": {
            //   content: "''",
            //   position: "absolute",
            //   left: `${level * 32}px`,
            //   top: 0,
            //   height: "100%",
            //   width: "1px",
            //   opacity: 1,
            //   background: "rgba(125, 125, 125, 0.14)",
            // },
          }}
        >
          {menus}
        </List>
      </Collapse>
    </>
  );
}
