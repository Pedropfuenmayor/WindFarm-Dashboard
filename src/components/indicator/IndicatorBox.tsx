import { Box, Grid, styled } from "@mui/material";
import { Typography } from "@mui/material";
import { IndicatorBoxProps } from "../../models/models";



export default function IndicatorBox({
  tittle,
  value,
  simbol,
  color,
  fontSize
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
          height:'80px',
          textAlign: "center",
          borderWidth: "1px",
          backgroundColor: "white",
          borderRadius: "0.25rem",
          boxShadow:1,
          display: 'flex',
          flexDirection:'column',
          justifyContent: 'space-around'
        }}
      >

        <Typography
          sx={{
            paddingTop: "",
            fontSize: "0.8rem",
            lineHeight: "1.25rem",
            fontWeight: 500,
            margin:'0px'
          }}
          variant="h2"
          gutterBottom
          component="div"
        >
          {tittle}
        </Typography>

        <Typography
          sx={{
            fontSize: fontSize,
            lineHeight: "1rem",
            fontWeight: 700,
            color: color === "green"? "#4cb373" : 'red',
            margin:'0px'
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