import { Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { WarningAmberRounded } from "@mui/icons-material";

function createData(date: string, variable: number, underperformace: number) {
  return { date, variable, underperformace };
}

const rows = [
  createData("2017-1-03", 4, 1000),
  createData("2017-1-03", 4, 466),
  createData("2017-1-03", 4, 300),
  createData("2017-1-03", 4, 689),
  createData("2017-1-03", 4, 245),
];
export default function UnderPerfTable() {
  return (
    <Box
      sx={{
        borderWidth: "1px",
        backgroundColor: "white",
        borderRadius: "0.25rem",
        boxShadow: 1,
        height: "250px",
      }}
    >
      <Typography
        sx={{
          fontSize: "1rem",
          lineHeight: "1.5rem",
          fontWeight: 500,
          paddingTop: "0.5rem",
          margin: "0px",
          textAlign: "center",
        }}
        variant="h2"
        gutterBottom
        component="div"
      >
        Underperformace Logs
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350}} aria-label="simple table">
          <TableHead >
            <TableRow >
              <TableCell align='center'>Date</TableCell>
              <TableCell align='center'>
                <WarningAmberRounded />
              </TableCell>
              <TableCell align='center'>Underperformance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.date}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },

                }}
              >
                <TableCell align='center' component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell align='center'>{row.variable}</TableCell>
                <TableCell align='center' >{row.underperformace}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
