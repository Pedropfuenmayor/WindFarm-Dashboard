import { Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import { Window, StarBorder, ShareOutlined} from "@mui/icons-material";

export default function Header() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Grid item sm={12} >
      <Box
        sx={{
          margin: "auto",
          marginTop: "1rem",
          display: "flex",
          alignItems: 'center'
        }}
      >
        <Window style={{ fontSize: matches ? 16: 12}}/>
        <Typography
          sx={{
            fontSize: matches ? "0.9rem": '0.7rem',
            lineHeight: "1.25rem",
            fontWeight: 500,
            margin: "0px",
            paddingLeft:'5px'
          }}
          variant="h2"
          gutterBottom
          component="div"
        >
        Wind Farm / Underperformance Dashboard (level 1)
        </Typography>
        <StarBorder style={{ fontSize: matches ? 16: 12, marginLeft:10}}/>
        <ShareOutlined style={{ fontSize: matches ? 16: 12, marginLeft:10}}/>
      </Box>
    </Grid>
  );
}
