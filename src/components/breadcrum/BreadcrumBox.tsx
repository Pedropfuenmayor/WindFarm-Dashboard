import { Grid, Box } from "@mui/material";
import BreadcrumbsComp from "./BreadcrumbsComp";

export default function BreadcrumBox() {
  return (
    <Grid item xs={12}>
      <Box
        sx={{
          margin: "auto",
          marginTop: "3rem",
          border: "1px",
          backgroundColor: "white",
          borderRadius: "0.25rem",
          boxShadow: 1,
        }}
      >
        <BreadcrumbsComp />
      </Box>
    </Grid>
  );
}