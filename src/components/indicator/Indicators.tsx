import IndicatorBox from "./IndicatorBox";
import { Grid } from "@mui/material";

export default function Indicators() {
  return (
    <Grid item xs={12}>
      <Grid container spacing={1.5}>
      <IndicatorBox tittle="Active Turbines" value={18} color='green' fontSize='3rem' simbol=' '  />
      <IndicatorBox tittle="Active Nominal Power" value={36} color='green' fontSize='3rem' simbol='MW' />
      <IndicatorBox tittle="Total Production" value={13.0} color='green' fontSize='3rem' simbol='TW' />
      <IndicatorBox tittle="Avg. Potential Improve..." value={5.9} color='green' fontSize='3rem' simbol='%' />
      <IndicatorBox tittle="Potential Improvement(h)" value={1253} color='green' fontSize='2rem' simbol='hrs.' />
      <IndicatorBox tittle="Underperformance Rate %" value={11} color='red' fontSize='2.5rem' simbol='%' />
      </Grid>
    </Grid>
  );
}