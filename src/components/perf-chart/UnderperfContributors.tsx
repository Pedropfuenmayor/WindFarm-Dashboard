import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelProps,
} from "recharts";
import { Box, Typography } from "@mui/material";
import { useState } from "react";


const data = [
  {
    Contributor: "Generator RPM",
    Performance: 44,
  },
  {
    Contributor: "Nacelle Direction",
    Performance: 29,
  },
  {
    Contributor: "Met Wind Direction ",
    Performance: 23,
  },
  {
    Contributor: "Gear Bearing Temperature",
    Performance: 13
  },
  {
    Contributor: "Gear Oil Temperature",
    Performance: 7.6,
  }
];

export default function UnderperformanceContributors() {
    const [yaxisWidth,styaxisWidth] = useState(190)
  const renderCustomBarLabel = ({ x, y, width, value }: LabelProps) => {
    x = +x!;
    width = +width!;
    value = +value!;

    const fullBarWidth = (100 * width)/value

  
    return (
      <text
        x={+x! + fullBarWidth + 20}
        y={y}
        fill="#4cb373"
        fontFamily="sans-serif"
        fontWeight='500'
        fontSize='14px'
        dy={12}
      >{`${value}%`}</text>
    );
  };

  return (
    <Box sx={{
        borderWidth: "1px",
        backgroundColor: "white",
        borderRadius: "0.25rem",
        boxShadow: 1,
        height: '150px',
        marginTop:'16px'
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
        Top Contributors To Underperformance
      </Typography>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          width={500}
          height={600}
          data={data}
          layout="vertical"
          margin={{
            top: 10,
            right: 70,
            left: 0,
            bottom: 10,
          }}
        >
          <XAxis
            fontFamily="sans-serif"
            fontSize="12px"
            axisLine={false}
            type="number"
            hide={true}
            domain={[0, () => (100)]} />
          <YAxis
            axisLine={false}
            fontFamily="sans-serif"
            fontSize="12px"
            dataKey="Contributor"
            type="category"
            tickLine={false}
            interval={0}
            width={yaxisWidth} 
          />
          <Bar
            barSize={15}
            dataKey="Performance"
            fill="#4cb373"
            background={{ fill: "#eee", radius: 4 }}
            radius={4}
            label={renderCustomBarLabel}
          />
          
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}