import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Box, Typography } from "@mui/material";

const data = [
  {
    date: "2017-1-03",
    Performance: 6000,
    Under_Perf: 700,
  },
  {
    date: "2017-1-04",
    Performance: 5000,
    Under_Perf: 900,
  },
  {
    date: "2017-1-05",
    Performance: 9800,
    Under_Perf: 2000,
  },
  {
    date: "2017-1-06",
    Performance: 4500,
    Under_Perf: 1200,
  },
  {
    date: "2017-1-07",
    Performance: 6000,
    Under_Perf: 1700,
  },
  {
    date: "2017-1-08",
    Performance: 4000,
    Under_Perf: 300,
  },
  {
    date: "2017-1-09",
    Performance: 7000,
    Under_Perf: 3000,
    amt: 2100,
  },
  {
    date: "2017-2-03",
    Performance: 6000,
    Under_Perf: 700,
  },
  {
    date: "2017-2-04",
    Performance: 5000,
    Under_Perf: 900,
  },
  {
    date: "2017-2-05",
    Performance: 9800,
    Under_Perf: 2000,
  },
  {
    date: "2017-2-06",
    Performance: 10000,
    Under_Perf: 1200,
  },
  {
    date: "2017-2-07",
    Performance: 6000,
    Under_Perf: 1700,
  },
  {
    date: "2017-2-08",
    Performance: 4000,
    Under_Perf: 300,
  },
  {
    date: "2017-2-09",
    Performance: 7000,
    Under_Perf: 3000,
    amt: 2100,
  },
  {
    date: "2017-3-03",
    Performance: 6000,
    Under_Perf: 700,
  },
  {
    date: "2017-3-04",
    Performance: 5000,
    Under_Perf: 900,
  },
  {
    date: "2017-3-05",
    Performance: 9800,
    Under_Perf: 2000,
  },
  {
    date: "2017-3-06",
    Performance: 4500,
    Under_Perf: 1200,
  },
  {
    date: "2017-3-07",
    Performance: 6000,
    Under_Perf: 1700,
  },
  {
    date: "2017-3-08",
    Performance: 4000,
    Under_Perf: 300,
  },
  {
    date: "2017-3-09",
    Performance: 7000,
    Under_Perf: 3000,
    amt: 2100,
  },
  {
    date: "2017-4-03",
    Performance: 6000,
    Under_Perf: 700,
  },
  {
    date: "2017-4-04",
    Performance: 5000,
    Under_Perf: 900,
  },
  {
    date: "2017-4-05",
    Performance: 14000,
    Under_Perf: 2000,
  },
  {
    date: "2017-4-06",
    Performance: 4500,
    Under_Perf: 1200,
  },
  {
    date: "2017-4-07",
    Performance: 6000,
    Under_Perf: 1700,
  },
  {
    date: "2017-4-08",
    Performance: 4000,
    Under_Perf: 300,
  },
  {
    date: "2017-4-09",
    Performance: 7000,
    Under_Perf: 3000,
    amt: 2100,
  },
  {
    date: "2017-5-03",
    Performance: 6000,
    Under_Perf: 700,
  },
  {
    date: "2017-5-04",
    Performance: 5000,
    Under_Perf: 900,
  },
  {
    date: "2017-5-05",
    Performance: 9800,
    Under_Perf: 2000,
  },
  {
    date: "2017-5-06",
    Performance: 4500,
    Under_Perf: 1200,
  },
  {
    date: "2017-5-07",
    Performance: 6000,
    Under_Perf: 1700,
  },
  {
    date: "2017-5-08",
    Performance: 4000,
    Under_Perf: 300,
  },
  {
    date: "2017-5-09",
    Performance: 7000,
    Under_Perf: 3000,
    amt: 2100,
  },
  {
    date: "2017-6-03",
    Performance: 6000,
    Under_Perf: 700,
  },
  {
    date: "2017-6-04",
    Performance: 5000,
    Under_Perf: 900,
  },
  {
    date: "2017-6-05",
    Performance: 9800,
    Under_Perf: 2000,
  },
  {
    date: "2017-6-06",
    Performance: 4500,
    Under_Perf: 1200,
  },
  {
    date: "2017-6-07",
    Performance: 6000,
    Under_Perf: 1700,
  },
  {
    date: "2017-6-08",
    Performance: 4000,
    Under_Perf: 300,
  },
  {
    date: "2017-6-09",
    Performance: 7000,
    Under_Perf: 3000,
    amt: 2100,
  },
  {
    date: "2017-7-03",
    Performance: 6000,
    Under_Perf: 700,
  },
  {
    date: "2017-7-04",
    Performance: 5000,
    Under_Perf: 900,
  },
  {
    date: "2017-7-05",
    Performance: 9800,
    Under_Perf: 2000,
  },
  {
    date: "2017-7-06",
    Performance: 4500,
    Under_Perf: 1200,
  },
  {
    date: "2017-7-07",
    Performance: 6000,
    Under_Perf: 1700,
  },
  {
    date: "2017-7-08",
    Performance: 4000,
    Under_Perf: 300,
  },
  {
    date: "2017-7-09",
    Performance: 7000,
    Under_Perf: 3000,
    amt: 2100,
  },
];

export default function StackedBarChart() {
  return (
    <Box 
    sx={{
      borderWidth: "1px",
      backgroundColor: "white",
      borderRadius: "0.25rem",
      boxShadow: 1,
      height: '250px'
    }}>
      <Typography
          sx={{
            fontSize: "1rem",
            lineHeight: "1.5rem",
            fontWeight: 500,
            paddingTop: "0.5rem",
            margin:'0px',
            textAlign:'center'
          }}
        variant="h2"
        gutterBottom
        component="div"
      >
        Performace & Underperformace
      </Typography>
      <ResponsiveContainer width="100%" height="90%">
        <>
        <BarChart
          width={500}
          height={600}
          data={data}
          margin={{
            top: 15,
            right: 30,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke="#ccc" vertical={false} />
          <XAxis
            fontFamily="sans-serif"
            fontSize="12px"
            dataKey="date"
            tickCount={4}
            ticks={["2017-1-05", "2017-3-07", "2017-5-09", "2017-7-07"]}
          />
          <YAxis
            axisLine={false}
            fontFamily="sans-serif"
            fontSize="12px"
            type="number"
            tickCount={4}
          />
          <Tooltip
            itemStyle={{ fontFamily: "sans-serif", fontSize: "12px" }}
            labelStyle={{ fontFamily: "sans-serif", fontSize: "13px" }}
          />
          <Bar dataKey="Under_Perf" stackId="a" fill="#e9c46a" />
          <Bar dataKey="Performance" stackId="a" fill="#4cb373"/>
        </BarChart>
        </>
      </ResponsiveContainer>
    </Box>
  );
}