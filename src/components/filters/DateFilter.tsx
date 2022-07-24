import { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";

export default function DateFilter() {
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  return (
    <Grid item md={5} sm={8} xs={12}>
      <Box
        sx={{
          margin: "auto",
          marginTop: "1rem",
          borderWidth: "1px",
          backgroundColor: "white",
          borderRadius: "0.25rem",
          boxShadow: 1,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterLuxon}>
          <DatePicker
            label="Start Date"
            value={fromDate}
            onChange={(newValue) => {
              setFromDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} size="small" />}
          />
        </LocalizationProvider>
        <Typography
         sx={{
            fontSize: "1rem",
            lineHeight: "1.5rem",
            fontWeight: 500,
            paddingTop: "0.5rem",
            margin: "0px",
            textAlign: "center",
            paddingX: '2rem'
          }}
          variant="h2"
          gutterBottom
          component="div"
        >
          To
        </Typography>
        <LocalizationProvider dateAdapter={AdapterLuxon}>
          <DatePicker
            label="End Date"
            value={toDate}
            onChange={(newValue) => {
              setToDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} size="small" />}
          />
        </LocalizationProvider>
      </Box>
    </Grid>
  );
}
