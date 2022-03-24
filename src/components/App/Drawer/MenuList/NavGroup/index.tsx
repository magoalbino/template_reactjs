import { IMenuItem } from "../../../../../menuItems/types";
import { Divider, List, Typography } from "@mui/material";
import { NavCollapse } from "../NavCollapse";
import { NavItem } from "../NavItem";

interface NavGroupProps {
  item: IMenuItem;
}

export function NavGroup({ item }: NavGroupProps) {
  const items = item.children?.map((menu) => {
    switch (menu.type) {
      case "collapse":
        return <NavCollapse key={menu.id} menu={menu} level={1} />;
      case "item":
        return <NavItem key={menu.id} item={menu} level={1} />;
      default:
        return (
          <Typography key={menu.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return (
    <>
      <List
        subheader={
          item.title && (
            <Typography
              variant={"caption"}
              display="block"
              gutterBottom
              sx={{
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "#212121",
                padding: "6px",
                textTransform: "capitalize",
                fontStyle: "italic",
                // marginTop: "10px",
              }}
            >
              {item.title}
            </Typography>
          )
        }
      >
        {items}
      </List>

      {/* group divider */}
      <Divider sx={{ mt: 0.25, mb: 1.25 }} />
    </>
  );
}
