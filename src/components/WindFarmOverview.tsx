import { Container, Grid } from "@mui/material";
import Indicators from "./indicator/Indicators";
import WindFarmMap from "./map/WindFarmMap";
import FarmPerfChart from "./perf-chart/FarmPerfChart";
import UnderPerfLogs from "./under-perf-logs/UnderPerfLogs";
import BreadcrumBox from "./breadcrum/BreadcrumBox";
import Header from "./header/Header";

export default function WindFarmOverview() {
  return (
    <Container sx={{ width: "100%", marginBottom:'25px'}}>
      <Grid container spacing={1.5}>
        <Header />
        <BreadcrumBox />
        <Indicators />
        <WindFarmMap />
        <FarmPerfChart />
        <UnderPerfLogs />
      </Grid>
    </Container>
  );
}
