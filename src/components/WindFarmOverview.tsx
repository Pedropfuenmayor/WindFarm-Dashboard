import { Container, Grid } from "@mui/material";
import Header from "./Header";
import Indicators from "./indicator/Indicators";
import WindFarmMap from "./map/WindFarmMap";
import FarmPerfChart from "./perf-chart/FarmPerfChart";



export default function WindFarmOverview() {
  return (
    <Container sx={{width:'100%'}}>
      <Grid container spacing={1.5}>
        <Header>ANNEA - Dashboard</Header>
        <Indicators />
        <WindFarmMap />
        <FarmPerfChart />
      </Grid>
    </Container>
  );
}