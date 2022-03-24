import { Link as RouterDomLink } from "react-router-dom";
import {
  Breadcrumbs as MuiBreadcrumbs,
  Divider,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { memo } from "react";

interface IPrevCrumbs {
  to: string;
  name: string;
}

interface IBreadcrumbsProps {
  current: string;
  prevCrumbs?: IPrevCrumbs[];
  homeTo?: string;
  withDivider?: boolean;
}

function BreadcrumbsComponent({
  current,
  prevCrumbs = [],
  homeTo = "/home",
  withDivider = true,
}: IBreadcrumbsProps) {
  return (
    <>
      {/*separator={<NavigateNextIcon fontSize="small" />}*/}
      <MuiBreadcrumbs
        separator={
          <NavigateNextIcon fontSize="small" sx={{ color: "#D4D4D4" }} />
        }
      >
        <MuiLink
          underline="hover"
          color="secondary"
          component={RouterDomLink}
          to={homeTo}
        >
          <HomeIcon />
        </MuiLink>
        {prevCrumbs.map((crumb) => (
          <MuiLink
            key={crumb.name}
            underline="hover"
            color="secondary"
            component={RouterDomLink}
            to={crumb.to}
          >
            {crumb.name}
          </MuiLink>
        ))}
        <Typography sx={{ fontWeight: 600 }}>{current}</Typography>
      </MuiBreadcrumbs>

      {withDivider && <Divider sx={{ my: 1 }} />}
    </>
  );
}

export const Breadcrumbs = memo(
  BreadcrumbsComponent,
  (prevProps, nextProps) => {
    return prevProps.current === nextProps.current;
  }
);
