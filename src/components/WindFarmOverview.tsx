import { Container, Grid } from "@mui/material";
import Header from "./Header";



export default function WindFarmOverview() {
  return (
    <Container className='p-2'>
      <Grid container spacing={2}>
        <Header>ANNEA - Dashboard</Header>
      </Grid>
    </Container>
  );
}