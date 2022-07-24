import { useMediaQuery, useTheme } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";



export default function BreadcrumbsComp() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Breadcrumbs sx={{
      paddingY: "0.8rem",
      fontSize:matches? "0.8rem": "0.6rem",
      lineHeight: "1.75rem",
      fontWeight: 500,
      paddingLeft: "1rem",
      margin:'0px'
    }} separator='>' aria-label="breadcrumb">
      <Link underline="hover" color="text.primary" href="/">
        Wind Farm Overview
      </Link>
      <Link
        underline="hover"
        color="text.primary"
        href="/"
      >
        Wind Farm 3
      </Link>
      <Link
        underline="hover"
        color="text.primary"
        href="/"
        aria-current="page"
      >
        Underperformance
      </Link>
    </Breadcrumbs>
  );
}
