import { Container, Grid } from "@mui/material";
import Header from "./Header";
import Indicators from "./indicator/Indicators";



export default function WindFarmOverview() {
  return (
    <Container sx={{width:'100%'}}>
      <Grid container spacing={1}>
        <Header>ANNEA - Dashboard</Header>
        <Indicators />
      </Grid>
    </Container>
  );
}