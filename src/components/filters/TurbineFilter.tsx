import {
    Grid,
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent,
  } from "@mui/material";
  import { Turbine, TurbineFilterFormat } from "../../models/models";
  import { turbinesIds } from "../../../data/turbineData";
  import { useState } from "react";
  
  export default function TurbineFilter() {
    const [selectedTurbine, setSelectedTurbine] = useState<string>("Turbine 1");
  
    const filterHandler = (event: SelectChangeEvent) => {
        console.log(event.target.value)
      setSelectedTurbine(event.target.value);
    };
  
    return (
      <Grid item md={2} sm={3} xs={12}>
        <Box  sx={{
          margin: "auto",
          marginTop: "1rem",
          borderWidth: "1px",
          backgroundColor: "white",
          borderRadius: "0.25rem",
          boxShadow:1,
        }}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">Turbine</InputLabel>
            <Select
              labelId="turbine"
              id="turbine"
              value={selectedTurbine}
              label="Turbine"
              onChange={filterHandler}
            >
              {turbinesIds.map((turbine, i) => {
                return <MenuItem key={i} value={turbine.turbineLabel}>{turbine.turbineLabel}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Box>
      </Grid>
    );
  }