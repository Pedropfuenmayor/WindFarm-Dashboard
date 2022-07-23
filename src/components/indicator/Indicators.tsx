import IndicatorBox from "./IndicatorBox";
import { Grid } from "@mui/material";

export default function Indicators() {
  return (
    <Grid item xs={12}>
      <Grid container spacing={2}>
      <IndicatorBox tittle="Active Turbines" value={18} color='green' simbol=' '  />
      <IndicatorBox tittle="Active Nominal Power" value={18} color='green' simbol='MW' />
      <IndicatorBox tittle="Total Production" value={18} color='green' simbol='TW' />
      <IndicatorBox tittle="Avg. Potential Improve..." value={18} color='green' simbol='%' />
      <IndicatorBox tittle="Potential Improvement(h)" value={18} color='green' simbol='Hours' />
      <IndicatorBox tittle="Underperformance Rate %" value={18} color='red' simbol='%' />
      </Grid>
    </Grid>
  );
}