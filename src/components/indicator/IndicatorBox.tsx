import { Box, Grid, styled } from "@mui/material";
import { Typography } from "@mui/material";
import { IndicatorBoxProps } from "../../models/models";



export default function IndicatorBox({
  tittle,
  value,
  simbol,
  color
}: IndicatorBoxProps) {

const Span = styled("span")({
    color: color === "green"? "#4cb373" : 'red',
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
  });
  return (
    <Grid item md={2} sm={4} xs={6}>
      <Box
        sx={{
          paddingX: "0.5rem",
          textAlign: "center",
          borderWidth: "1px",
          backgroundColor: "white",
          borderRadius: "0.25rem",
          boxShadow:1,
        }}
      >

        <Typography
          sx={{
            paddingTop: "0.5rem",
            fontSize: "0.8rem",
            lineHeight: "1.25rem",
            fontWeight: 500,
            height:'40px'
          }}
          variant="h2"
          gutterBottom
          component="div"
        >
          {tittle}
        </Typography>

        <Typography
          sx={{
            paddingY: "1rem",
            fontSize: "3rem",
            lineHeight: "1rem",
            fontWeight: 700,
            color: color === "green"? "#4cb373" : 'red',
          }}
          variant="subtitle1"
          gutterBottom
          component="div"
        >
          {value}
          {simbol && <Span>{simbol}</Span>}
        </Typography>
        
     
      </Box>
    </Grid>
  );
}