import dynamic from "next/dynamic";
import {
  Grid,
  Box,
  Typography,
  Stack,
  useTheme,
  useMediaQuery,
  styled,
} from "@mui/material";

const MyAwesomeMap = dynamic(() => import("./Map"), {
  loading: () => (
    <Typography
      sx={{
        fontSize: "1rem",
        lineHeight: "1.5rem",
        fontWeight: 500,
        margin: "auto",
      }}
      variant="h2"
      gutterBottom
      component="div"
    >
      Loading...
    </Typography>
  ),
  ssr: false,
});

export default function WindFarmMap() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const MapContainer = styled("div")({
    height: "100%",
    marginTop: "-0.5rem",
    display: "flex",
  });

  console.log(matches)
  return (
    <Grid item md={6} xs={12}>
      <Box
        sx={{
          paddingX: "0.5rem",
          textAlign: "center",
          borderWidth: "1px",
          backgroundColor: "white",
          borderRadius: "0.25rem",
          boxShadow: 1,
          height: matches ? "350px" : "100%",
        }}
      >
        <Stack sx={{ height: "100%" }}>
          <Typography
            sx={{
              fontSize: "1rem",
              lineHeight: "1.5rem",
              fontWeight: 500,
              paddingTop: "0.5rem",
            }}
            variant="h2"
            gutterBottom
            component="div"
          >
            Wind Farm Underperformance %
          </Typography>
          <MapContainer>
            <MyAwesomeMap />
          </MapContainer>
        </Stack>
      </Box>
    </Grid>
  );
}
