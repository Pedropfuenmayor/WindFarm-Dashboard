import { Grid} from "@mui/material";
import { Turbine } from "../../models/models";
import StackedBarChart from "./StackedBarChart";
import UnderperformanceContributors from "./UnderperfContributors";

export default function FarmPerfChart() {
  return (
    <Grid item md={6} xs={12}>
      <StackedBarChart />
      <UnderperformanceContributors />
    </Grid>
  );
}