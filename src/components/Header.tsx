import { Typography, Grid, Box } from "@mui/material";

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <Grid item xs={12}>
      <Box
        sx={{
          margin: "auto",
          marginTop: "5rem",
          border: "1px",
          backgroundColor: "white",
          borderRadius: "0.25rem",
          boxShadow: 1,
        }}
      >
        <Typography
          sx={{
            paddingY: "0.5rem",
            fontSize: "1.25rem",
            lineHeight: "1.75rem",
            fontWeight: 700,
            paddingLeft: "1rem",
          }}
          className="py-2 pl-4 font-bold text-xl m-0"
          variant="h2"
          gutterBottom
          component="div"
        >
          {children}
        </Typography>
      </Box>
    </Grid>
  );
}