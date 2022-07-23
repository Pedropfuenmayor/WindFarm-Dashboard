import { Container, Grid } from "@mui/material";
import Header from "./Header";
import Indicators from "./indicator/Indicators";
import WindFarmMap from "./map/WindFarmMap";



export default function WindFarmOverview() {
  return (
    <Container sx={{width:'100%'}}>
      <Grid container spacing={1.5}>
        <Header>ANNEA - Dashboard</Header>
        <Indicators />
        <WindFarmMap />
      </Grid>
    </Container>
  );
}